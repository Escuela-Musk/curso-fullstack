// @ts-nocheck
// Nombre de la caché
const CACHE_NAME = "mi-cache-v1";

// Archivos a cachear
const ARCHIVOS = ["index.html", "ejemplo.txt"];

// Instalar y precachear recursos
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ARCHIVOS);
    })
  );
});

// Activar y limpiar versiones viejas
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
        )
      )
  );
});

// Interceptar peticiones
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((respuesta) => {
      console.log("Buscando en caché:", event.request.url);

      return respuesta || fetch(event.request);
    })
  );
});
