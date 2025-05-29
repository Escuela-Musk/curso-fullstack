// Definición de la Clase Grafo
class Graph {
  constructor(directed = false) {
    // Mapa para almacenar la lista de adyacencia
    this.adjacencyList = new Map();
    this.directed = directed; // Indica si el grafo es dirigido o no
  }

  // Método para agregar un vértice al grafo
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // Método para agregar una arista entre dos vértices
  addEdge(source, destination) {
    // Primero, asegurarse de que ambos vértices existan
    if (!this.adjacencyList.has(source)) {
      this.addVertex(source);
    }
    if (!this.adjacencyList.has(destination)) {
      this.addVertex(destination);
    }

    // Agregar la arista desde source a destination
    this.adjacencyList.get(source).push(destination);

    // Si el grafo no es dirigido, agregar también la arista inversa
    if (!this.directed) {
      this.adjacencyList.get(destination).push(source);
    }
  }

  // Método para eliminar una arista entre dos vértices
  removeEdge(source, destination) {
    if (
      !this.adjacencyList.has(source) ||
      !this.adjacencyList.has(destination)
    ) {
      return;
    }

    // Filtrar la arista de source a destination
    this.adjacencyList.set(
      source,
      this.adjacencyList.get(source).filter((vertex) => vertex !== destination)
    );

    // Si el grafo no es dirigido, eliminar también la arista inversa
    if (!this.directed) {
      this.adjacencyList.set(
        destination,
        this.adjacencyList
          .get(destination)
          .filter((vertex) => vertex !== source)
      );
    }
  }

  // Método para eliminar un vértice y todas sus aristas
  removeVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      return;
    }

    // Eliminar todas las aristas que apuntan al vértice
    for (let [key, neighbors] of this.adjacencyList) {
      this.adjacencyList.set(
        key,
        neighbors.filter((neighbor) => neighbor !== vertex)
      );
    }

    // Eliminar el vértice del grafo
    this.adjacencyList.delete(vertex);
  }

  // Método para obtener los vecinos de un vértice
  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex) || [];
  }

  // Método para obtener todos los vértices del grafo
  getVertices() {
    return Array.from(this.adjacencyList.keys());
  }

  // Método para imprimir el grafo (útil para depuración)
  printGraph() {
    for (let [vertex, neighbors] of this.adjacencyList) {
      console.log(`${vertex} -> ${neighbors.join(", ")}`);
    }
  }

  // Implementación de BFS (Búsqueda en Anchura)
  breadthFirstSearch(start, callback) {
    const visited = new Set();
    const queue = [start];
    visited.add(start);

    while (queue.length > 0) {
      const vertex = queue.shift();
      callback(vertex);

      for (let neighbor of this.getNeighbors(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }

  // Implementación de DFS (Búsqueda en Profundidad)
  depthFirstSearch(start, callback, visited = new Set()) {
    visited.add(start);
    callback(start);

    for (let neighbor of this.getNeighbors(start)) {
      if (!visited.has(neighbor)) {
        this.depthFirstSearch(neighbor, callback, visited);
      }
    }
  }
}

// Ejemplo de uso
const grafo = new Graph(); // Grafo no dirigido

// Agregar vértices y aristas
grafo.addVertex("A");
grafo.addVertex("B");
grafo.addVertex("C");
grafo.addVertex("D");
grafo.addEdge("A", "B");
grafo.addEdge("A", "C");
grafo.addEdge("B", "D");
grafo.addEdge("C", "D");
grafo.addEdge("D", "A");

grafo.printGraph();
// Salida:
// A -> B, C, D
// B -> A, D
// C -> A, D
// D -> B, C, A

// Eliminar una arista
grafo.removeEdge("A", "D");
grafo.printGraph();
// Salida:
// A -> B, C
// B -> A, D
// C -> A, D
// D -> B, C

// Eliminar un vértice
grafo.removeVertex("C");
grafo.printGraph();
// Salida:
// A -> B
// B -> A, D
// D -> B

// Buscar vecinos de un vértice
console.log(`Vecinos de B: ${grafo.getNeighbors("B").join(", ")}`); // Vecinos de B: A, D

// Realizar BFS
console.log("BFS desde A:");
grafo.breadthFirstSearch("A", (vertex) => console.log(vertex));
// Salida:
// A
// B
// D

// Realizar DFS
console.log("DFS desde A:");
grafo.depthFirstSearch("A", (vertex) => console.log(vertex));
// Salida (puede variar dependiendo del orden de los vecinos):
// A
// B
// D
