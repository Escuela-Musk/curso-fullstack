self.addEventListener("install", (e) => self.skipWaiting());
self.addEventListener("activate", (e) => self.clients.claim());

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

self.addEventListener("message", (e) => {
  if (e.data && e.data.cmd === "sort" && e.ports[0]) {
    const arr = Array.from({ length: 100_000 }, () =>
      Math.floor(Math.random() * 10_000)
    );
    const start = Date.now();
    const sorted = bubbleSort(arr);
    const end = Date.now();
    e.ports[0].postMessage(
      `Ordenado! Primeros 100: ${sorted.slice(0, 100)}\nTiempo: ${
        end - start
      } ms`
    );
  }
});
