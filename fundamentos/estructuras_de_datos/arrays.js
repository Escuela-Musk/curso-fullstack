const array = [1, 2, 3, 4, 5];

// Cola (Queue)
const queue = [];

queue.push("Pepe"); // Push añade al final
queue.push("María");

console.log(queue);

// FIFO First In First Out

let atendiendo = queue.shift(); // Retira del principio
console.log("Estamos atendiendo a", atendiendo);

console.log(queue);

// Pila (Stack)

const stack = [];

// LIFO Last In First Out
stack.push("Plato 1");
stack.push("Plato 2");

console.log(stack);

let sacoPlato = stack.splice(stack.length - 1, 1)[0];
sacoPlato = stack.splice(stack.length - 1, 1)[0];
sacoPlato = stack.splice(stack.length - 1, 1)[0];

console.log("Voy a comer en", sacoPlato);
