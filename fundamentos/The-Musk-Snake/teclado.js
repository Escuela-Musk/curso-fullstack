process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on("data", (key) => {
  // Always convert Buffer to string for comparison
  const keyStr = key.toString();
  if (keyStr === "\u0003") process.exit(0);
  console.log("Tecla:", JSON.stringify(keyStr));
});
