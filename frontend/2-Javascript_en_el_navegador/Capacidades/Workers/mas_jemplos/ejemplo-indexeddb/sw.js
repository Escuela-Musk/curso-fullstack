const DB_NAME = "advancedDB";
const DB_VERSION = 1;
const CUSTOMERS_STORE = "customers";
const ORDERS_STORE = "orders";

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);

    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db) return;

      // Create customers store with email index
      const customersStore = db.createObjectStore(CUSTOMERS_STORE, {
        keyPath: "id",
        autoIncrement: true,
      });
      customersStore.createIndex("by_email", "email", { unique: true });

      // Create orders store with customerId index
      const ordersStore = db.createObjectStore(ORDERS_STORE, {
        keyPath: "id",
        autoIncrement: true,
      });
      ordersStore.createIndex("by_customer", "customerId");
    };

    req.onsuccess = (e) => {
      resolve(e.target.result);
    };
    req.onerror = (e) => {
      reject(e.target.error);
    };
  });
}

function withDB(callback) {
  return openDB().then((db) => {
    return new Promise((resolve, reject) => {
      callback(db).then(resolve).catch(reject);
    });
  });
}

self.addEventListener("install", (e) => {
  e.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener("message", (e) => {
  if (!e.ports || !e.ports[0]) return;
  const port = e.ports[0];

  switch (e.data.cmd) {
    case "addCustomer":
      withDB((db) => {
        const tx = db.transaction(CUSTOMERS_STORE, "readwrite");
        const store = tx.objectStore(CUSTOMERS_STORE);

        return new Promise((resolve, reject) => {
          store.add({
            name: e.data.name,
            email: e.data.email,
            createdAt: new Date(),
          });

          tx.oncomplete = () => resolve("Cliente agregado con éxito");
          tx.onerror = () => reject("Error al agregar cliente");
        });
      }).then(
        (msg) => port.postMessage(msg),
        (err) => port.postMessage(err)
      );
      break;

    case "addOrder":
      withDB((db) => {
        const tx = db.transaction([CUSTOMERS_STORE, ORDERS_STORE], "readwrite");
        const customersStore = tx.objectStore(CUSTOMERS_STORE);
        const ordersStore = tx.objectStore(ORDERS_STORE);

        return new Promise((resolve, reject) => {
          // Verify customer exists
          const customerReq = customersStore.get(Number(e.data.customerId));

          customerReq.onsuccess = () => {
            if (!customerReq.result) {
              reject("Cliente no encontrado");
              return;
            }

            ordersStore.add({
              customerId: Number(e.data.customerId),
              product: e.data.product,
              amount: Number(e.data.amount),
              date: new Date(),
            });

            tx.oncomplete = () => resolve("Pedido agregado con éxito");
          };

          customerReq.onerror = () => reject("Error al verificar cliente");
        });
      }).then(
        (msg) => port.postMessage(msg),
        (err) => port.postMessage(err)
      );
      break;

    case "getCustomers":
      withDB((db) => {
        const tx = db.transaction(CUSTOMERS_STORE, "readonly");
        const store = tx.objectStore(CUSTOMERS_STORE);

        return new Promise((resolve, reject) => {
          const req = store.getAll();

          req.onsuccess = () => resolve(JSON.stringify(req.result));
          req.onerror = () => reject("Error al obtener clientes");
        });
      }).then(
        (data) => port.postMessage(data),
        (err) => port.postMessage(err)
      );
      break;

    case "getOrdersByCustomer":
      withDB((db) => {
        const tx = db.transaction([CUSTOMERS_STORE, ORDERS_STORE], "readonly");
        const customersStore = tx.objectStore(CUSTOMERS_STORE);
        const ordersStore = tx.objectStore(ORDERS_STORE);
        const ordersIndex = ordersStore.index("by_customer");

        return new Promise((resolve, reject) => {
          // Get customer info
          const customerReq = customersStore.get(Number(e.data.customerId));

          customerReq.onsuccess = () => {
            if (!customerReq.result) {
              reject("Cliente no encontrado");
              return;
            }

            // Get all orders for this customer
            const ordersReq = ordersIndex.getAll(Number(e.data.customerId));

            ordersReq.onsuccess = () => {
              const result = {
                customer: customerReq.result,
                orders: ordersReq.result,
              };
              resolve(JSON.stringify(result, null, 2));
            };

            ordersReq.onerror = () => reject("Error al obtener pedidos");
          };

          customerReq.onerror = () => reject("Error al obtener cliente");
        });
      }).then(
        (data) => port.postMessage(data),
        (err) => port.postMessage(err)
      );
      break;

    default:
      port.postMessage("Comando no reconocido");
  }
});
