function obtenerUbicacion() {
  if (!navigator.geolocation) {
    console.log("Geolocalización no soportada");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (posicion) => {
      const { latitude, longitude } = posicion.coords;
      console.log(`Ubicación obtenida:`, posicion.coords);

      console.log(`Latitud: ${latitude}, Longitud: ${longitude}`);
    },
    (error) => {
      console.error("Error obteniendo ubicación:", error.message);
    }
  );
}
