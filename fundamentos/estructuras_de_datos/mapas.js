const mapa = new Map();

mapa.set("pepe@ejemplo.com", { nombre: "Pepe", apellido: "Pérez", edad: 34 });
mapa.set("pepe-secundario@ejemplo.com", mapa.get("pepe@ejemplo.com"));
mapa.set("ruth@ejemplo.com", { nombre: "Ruth", apellido: "García", edad: 35 });

console.log(mapa);

console.log(mapa.get("pepe@ejemplo.com"));
const pepe = mapa.get("pepe@ejemplo.com");

pepe.edad = 2900;
console.log(mapa.get("pepe-secundario@ejemplo.com"));

console.log("no existe ->", mapa.get("no existe"));

console.log("mapa.has('ruth@ejemplo.com')", mapa.has("ruth@ejemplo.com"));

console.log("mapa.has('no existe')", mapa.has("no existe"));

mapa.delete("pepe@ejemplo.com");

console.log(mapa);

mapa.clear();

// Reiniciamos el mapa
mapa.set("pepe@ejemplo.com", { nombre: "Pepe", apellido: "Pérez", edad: 34 });
mapa.set("ruth@ejemplo.com", { nombre: "Ruth", apellido: "García", edad: 35 });

console.log("Tamaño del mapa", mapa.size);

console.log("Claves del mapa", mapa.keys());

console.log("Valores del mapa", mapa.values());

console.log("Entradas del mapa", mapa.entries());

console.log("\nIterando con for...of\n");
for (const entry of mapa) {
  console.log(entry);
}

console.log("\nIterando con for..of y desestructurando\n");
for (const [key, value] of mapa) {
  console.log(key, "->", value);
}
