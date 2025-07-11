let db;

const request = indexedDB.open("TareasDB", 1);

request.onupgradeneeded = function (event) {
  db = event.target.result;
  const objectStore = db.createObjectStore("tareas", {
    keyPath: "clave",
    autoIncrement: true,
  });
  objectStore.createIndex("texto", "texto", { unique: false });
};

request.onsuccess = function (event) {
  db = event.target.result;
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
