// Pedir permiso para mostrar notificaciones
function pedirPermiso() {
  Notification.requestPermission().then((permiso) => {
    console.log("Permiso:", permiso);
  });
}

// Mostrar una notificación
function mostrarNotificacion() {
  if (Notification.permission === "granted") {
    new Notification("Hola!", {
      body: "Esta es una notificación de prueba.",
      icon: "https://via.placeholder.com/128",
    });
  } else {
    console.log("Primero debes dar permiso");
  }
}
