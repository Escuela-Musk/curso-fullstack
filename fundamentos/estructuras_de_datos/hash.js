function calculateHashForStrings(key, tableSize) {
  let hash = 37;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i) * hash;
  }
  return hash % tableSize;
}

console.log(calculateHashForStrings("Hola mundo", 10));

console.log(calculateHashForStrings("Hola muncp", 10));
