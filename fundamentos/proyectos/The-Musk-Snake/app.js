const { calcularAltoAncho, getRandomCoords } = require("./utils");

const HEAD = "🐍";
const TAIL = "🍍";
const FOOD = "🥚";
const FRUIT = "🍒";
const SPACE = "  ";

/**
 * Función para generar el tablero de juego con valores de ancho y alto.
 * @param {Number} alto
 * @param {Number} ancho
 * @returns Un array con el tablero
 */
function generarTablero(alto, ancho) {
  /** @type {string[][]} */
  const tablero = [];
  for (let i = 0; i < alto; i++) {
    tablero[i] = [];
    for (let j = 0; j < ancho; j++) {
      tablero[i][j] = SPACE;
    }
  }
  return tablero;
}

/**
 * Pinta por consola el tablero de juego
 * @param {string[][]} tablero
 * @returns {void}
 */
function pintarTablero(tablero) {
  console.clear();
  if (!tablero) {
    console.error("No me has pasado un tablero válido");
    return;
  }
  const { alto, ancho } = calcularAltoAncho(tablero);

  console.log(`+${"--".repeat(ancho)}+   SCORE: ${puntuacion}`);
  for (const fila of tablero) {
    console.log("|" + fila.join("") + "|");
  }
  console.log("+" + "--".repeat(ancho) + "+");
}

/**
 * Genera el objeto jugador y le asigna coordenadas aleatorias en el tablero
 * @param {string[][]} tablero
 * @returns {{posicion: Number[], estela: Number[][]}}
 */
function calcularPosicionInicial(tablero) {
  const { alto, ancho } = calcularAltoAncho(tablero);
  const posicion = getRandomCoords(alto, ancho);
  const estela = [];
  return { posicion, estela };
}

/**
 * Pinta el jugador y la estela en el tablero.
 * @param {string[][]} tablero
 * @param {{posicion: Number[], estela: Number[][]}} jugador
 * @returns
 */
function pintarJugador(tablero, jugador) {
  const { alto, ancho } = calcularAltoAncho(tablero);
  tablero[jugador.posicion[1]][jugador.posicion[0]] = HEAD;
  for (const cola of jugador.estela) {
    tablero[cola[1]][cola[0]] = TAIL;
  }
  return jugador;
}

/**
 * Genera un punto de comida en el tablero con posición aleatoria.
 * @param {string[][]} tablero
 * @param {Number[]} posicion
 * @param {'🥚'|'🍒'} comida
 * @returns La posición de la comida
 */
function colocarComida(tablero, posicion, comida) {
  const { alto, ancho } = calcularAltoAncho(tablero);
  tablero[posicion[1]][posicion[0]] = comida;
  return posicion;
}

/**
 * - Movemos las coordenadas de la cabeza del jugador
 * - Recalculamos la estela del jugador
 * - Comprobamos si hemos comido
 * - Pintamos el jugador en el tablero
 *
 * @param {string[][]} tablero
 * @param {{posicion: Number[], estela: Number[][]}} jugador
 * @param {string} movimiento
 */
function moverJugador(tablero, jugador, movimiento) {
  const { posicion: cabeza, estela } = jugador;
  tablero[cabeza[1]][cabeza[0]] = SPACE;
  const posicionAnterior = [...cabeza];
  // Movemos jugador
  switch (movimiento) {
    case "\u001b[A":
      cabeza[1] -= 1;
      break;
    case "\u001b[B":
      cabeza[1] += 1;
      break;
    case "\u001b[D":
      cabeza[0] -= 1;
      break;
    case "\u001b[C":
      cabeza[0] += 1;
      break;
    default:
      break;
  }
  // recalcular la estela
  if (estela.length !== 0) {
    // Limpiamos la estela para redibujar
    for (const posicion of estela) {
      tablero[posicion[1]][posicion[0]] = SPACE;
    }
    //  @ooo
    estela.unshift(posicionAnterior);
    estela.pop();
  }
  // Comprobar comida
  const comemos = tablero[cabeza[1]][cabeza[0]] === FOOD;
  const comemosFruta = tablero[cabeza[1]][cabeza[0]] === FRUIT;
  if (comemos) {
    hayComida = false;
    puntuacion += 5;
    FPS++;
    estela.push(posicionAnterior);
  }
  if (comemosFruta) {
    puntuacion += 25;
    FPS--;
  }
}

function comprobarChoque(tablero, jugador) {
  const { alto, ancho } = calcularAltoAncho(tablero);
  if (jugador.posicion[0] < 0 || jugador.posicion[0] >= ancho) {
    console.log("GAME OVER");
    process.exit(1);
  }
  if (jugador.posicion[1] < 0 || jugador.posicion[1] >= alto) {
    console.log("GAME OVER");
    process.exit(1);
  }
  for (const cola of jugador.estela) {
    if (jugador.posicion[0] === cola[0] && jugador.posicion[1] === cola[1]) {
      console.log("GAME OVER");
      process.exit(1);
    }
  }
}

function updateGame() {
  const { alto, ancho } = calcularAltoAncho(miTablero);
  if (!hayComida) {
    hayComida = true;
    posicionComida = getRandomCoords(alto, ancho);
    // TODO evitar que posicionComida === posicionJugador
    colocarComida(miTablero, posicionComida, FOOD);
  }
  if (ticks % 20 === 0) {
    const fruta = getRandomCoords(alto, ancho);
    colocarComida(miTablero, fruta, FRUIT);
  }
  moverJugador(miTablero, jugador, movimiento);
  pintarJugador(miTablero, jugador);
  comprobarChoque(miTablero, jugador);
}

function gameLoop() {
  updateGame();
  pintarTablero(miTablero);
  ticks++;
  setTimeout(gameLoop, 1000 / FPS);
}

let hayComida = false;
let posicionComida = [];
let puntuacion = 0;
let movimiento = "";

const alto = 15;
const ancho = 25;
let FPS = 5;
let ticks = 0;

const miTablero = generarTablero(alto, ancho);
const jugador = calcularPosicionInicial(miTablero);
pintarJugador(miTablero, jugador);
gameLoop();

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on("data", (key) => {
  const keyStr = key.toString();
  if (keyStr === "\u0003") process.exit(0);
  movimiento = keyStr;
});
