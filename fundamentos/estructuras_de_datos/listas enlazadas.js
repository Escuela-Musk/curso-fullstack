// Definición del Nodo de la Lista Enlazada
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  hasNext() {
    return this.next !== null;
  }

  // Método para imprimir el nodo (útil para depuración)
  toString() {
    return this.value.toString();
  }
}

// Definición de la Lista Enlazada
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Método para agregar un nodo al final de la lista
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // Si la lista está vacía
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Si la lista tiene al menos un nodo
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // Método para agregar un nodo al inicio de la lista
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // Si la lista está vacía
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Si la lista tiene al menos un nodo
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  // Método para eliminar un nodo por su valor
  remove(value) {
    if (!this.head) return null;

    // Si el nodo a eliminar es el primero
    if (this.head.value === value) {
      const removedNode = this.head;
      this.head = this.head.next;
      this.size--;
      if (this.size === 0) {
        this.tail = null;
      }
      return removedNode;
    }

    // Buscar el nodo a eliminar
    let current = this.head;
    let previous = null;
    while (current && current.value !== value) {
      previous = current;
      current = current.next;
    }

    if (current) {
      // Si se encuentra el nodo
      previous.next = current.next;
      if (current === this.tail) {
        // Si es el último nodo
        this.tail = previous;
      }
      this.size--;
      return current;
    }

    return null; // Si no se encuentra el nodo
  }

  // Método para encontrar un nodo por su valor
  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  // Método para imprimir la lista (útil para depuración)
  printList() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}

// Ejemplo de uso
const lista = new LinkedList();

// Agregar elementos
lista.append(10);
lista.append(20);
lista.prepend(5);
lista.printList(); // Salida: 5 -> 10 -> 20

// Eliminar un elemento
lista.remove(10);
lista.printList(); // Salida: 5 -> 20

// Buscar un elemento
const encontrado = lista.find(20);
console.log(encontrado ? `Encontrado: ${encontrado.value}` : "No encontrado"); // Salida: Encontrado: 20

// Iterar sobre la lista usando for...of
