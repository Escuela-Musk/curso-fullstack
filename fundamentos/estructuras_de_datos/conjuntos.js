const conjunto = new Set();

conjunto.add("pepe@ejemplo.com");
conjunto.add("ruth@ejemplo.com");

console.log(conjunto);

console.log(
  "conjunto.has('ruth@ejemplo.com')",
  conjunto.has("ruth@ejemplo.com")
);

console.log("conjunto.has('no existe')", conjunto.has("no existe"));

conjunto.delete("pepe@ejemplo.com");

console.log(conjunto);

conjunto.clear();

// Reiniciamos el conjunto
conjunto.add("pepe@ejemplo.com");
conjunto.add("ruth@ejemplo.com");

console.log("Tamaño del conjunto", conjunto.size);

console.log("Claves del conjunto", conjunto.keys());

console.log("Valores del conjunto", conjunto.values());

console.log("Entradas del conjunto", conjunto.entries());

console.log("\nIterando con for...of\n");
for (const entry of conjunto) {
  console.log(entry);
}
