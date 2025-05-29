// @ts-nocheck
const lista = {
  root: undefined,
  length: 0,
  append: function (value) {
    const newNode = {
      value: value,
      next: undefined,
    };
    let node = this.root;
    if (node === undefined) {
      this.root = newNode;
    } else {
      while (node.next !== undefined) {
        node = node.next;
      }
      node.next = newNode;
    }
    this.length++;
  },
  toString: function () {
    if (this.root === undefined) return "EMPTY";
    let node = this.root;
    let salida = "";
    do {
      salida += " " + node.value;
      node = node.next;
    } while (node.next !== undefined);
    salida += " " + node.value;
    return salida;
  },
};

lista.append("Uva");
lista.append("Manzana");
lista.append("Pera");

lista.length;

console.log(lista.toString());
