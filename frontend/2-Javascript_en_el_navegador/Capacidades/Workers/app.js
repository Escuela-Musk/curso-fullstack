if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .then((reg) => console.log("Service Worker registrado", reg))
      .catch((err) => console.error("Fallo al registrar SW:", err));
  });
}

function hacerPeticion(archivo) {
  fetch(archivo)
    .then((res) => res.text())
    .then((texto) => {
      document.getElementById("resultado").textContent = texto;
    })
    .catch((err) => {
      console.error("Error al hacer fetch:", err);
    });
}
