const carrito = {
  items: [
    {
      nombre: "Camiseta Hawaiana",
      precio: 23,
    },
    {
      nombre: "Gafas de sol",
      precio: 100,
    },
  ],
};

localStorage.setItem("carrito", JSON.stringify(carrito));
