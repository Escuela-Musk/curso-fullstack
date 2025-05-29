let db;
let necesitaMigrarDatos = false;

const request = indexedDB.open("TareasDB", 2);

request.onupgradeneeded = function (event) {
  db = event.target.result;

  switch (event.oldVersion) {
    case 0:
      // Crear el objectStore en la versión inicial
      const tareasStore = db.createObjectStore("tareas", {
        keyPath: "id",
        autoIncrement: true,
      });
      tareasStore.createIndex("texto", "texto", { unique: false });
    // ⚠️ No break: así continúa hacia el siguiente paso de migración

    case 1:
      // Aquí solo declaramos que vamos a hacer migración de datos
      // No podemos hacerla aún, porque db no está completamente abierta
      console.log("Migración estructural a v2 lista (añadir campo completada)");
      necesitaMigrarDatos = true;

    case 2:
      // Declaramos la nueva tabla "proyectos"
      const proyectosStore = db.createObjectStore("proyectos", {
        keyPath: "id",
        autoIncrement: true,
      });
      proyectosStore.createIndex("nombre", "nombre", { unique: false });
      break;
  }
};

request.onsuccess = function (event) {
  db = event.target.result;

  console.log("Base de datos abierta con éxito");
  console.log("Versión de la base de datos:", db.version);

  // Detectar si venimos desde una versión inferior a 2
  if (necesitaMigrarDatos) {
    // Ahora sí podemos hacer migración de datos porque la base está abierta
    const tx = db.transaction("tareas", "readwrite");
    const store = tx.objectStore("tareas");

    store.openCursor().onsuccess = function (event) {
      const cursor = event.target.result;
      if (cursor) {
        const tarea = cursor.value;

        // Si no tiene el campo 'completada', lo añadimos
        if (tarea.completada === undefined) {
          tarea.completada = false;
          cursor.update(tarea);
        }

        cursor.continue();
      }
    };

    tx.oncomplete = () => {
      console.log("Migración de datos a v2 completada");
    };
  }

  // Puedes continuar cargando la app
  mostrarTareas();
};

request.onerror = function (event) {
  console.error("Error abriendo la base de datos", event.target.errorCode);
};

function addTask() {
  const input = document.getElementById("taskInput");
  if (!input) return;
  const texto = input?.value.trim();
  if (!texto) return;

  const transaction = db.transaction(["tareas"], "readwrite");
  const objectStore = transaction.objectStore("tareas");
  objectStore.add({ texto });

  transaction.oncomplete = function () {
    input.value = "";
    mostrarTareas();
  };
}

function mostrarTareas() {
  const lista = document.getElementById("taskList");
  if (!lista) return;
  lista.innerHTML = "";

  const transaction = db.transaction(["tareas"], "readonly");
  const objectStore = transaction.objectStore("tareas");

  objectStore.openCursor().onsuccess = function (event) {
    const cursor = event.target.result;
    if (cursor) {
      const li = document.createElement("li");
      li.textContent = cursor.value.texto;

      const btn = document.createElement("button");
      btn.textContent = "Eliminar";
      btn.onclick = () => eliminarTarea(cursor.key);

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = cursor.value.completada;
      const tarea = cursor.value;
      checkbox.onchange = () => {
        const transaction = db.transaction(["tareas"], "readwrite");
        const objectStore = transaction.objectStore("tareas");
        console.log(tarea);

        tarea.completada = checkbox.checked;
        objectStore.put(tarea);
      };
      li.appendChild(checkbox);

      li.appendChild(btn);
      lista.appendChild(li);

      cursor.continue();
    }
  };
}

function eliminarTarea(id) {
  const transaction = db.transaction(["tareas"], "readwrite");
  const objectStore = transaction.objectStore("tareas");
  objectStore.delete(id);

  transaction.oncomplete = function () {
    mostrarTareas();
  };
}
