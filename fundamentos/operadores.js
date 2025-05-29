// @ts-nocheck
// Ejemplo de Operadores en JavaScript

// 1. Operadores Aritméticos
let a = 1;
let b = 3;
console.log("Suma (a + b):", a + b); // 4
console.log("Resta (a - b):", a - b); // -2
console.log("Multiplicación (a * b):", a * b); // 3
console.log("División (a / b):", a / b); // ~0.33
console.log("Módulo (a % b):", a % b); // 1
console.log("Exponenciación (a ** b):", a ** b); // 1

// Incremento y Decremento
// a++; // a pasa a ser 2 (post-incremento)
// b--; // b pasa a ser 2 (post-decremento)
console.log("Incremento (a++):", ++a); // 2
console.log("Decremento (b--):", --b); // 2

// 2. Operadores de Asignación
let c = 5;
c += 3; // c = 5 + 3 => 8
console.log("Asignación +=:", c);
c -= 2; // c = 8 - 2 => 6
console.log("Asignación -=:", c);
c *= 4; // c = 6 * 4 => 24
console.log("Asignación *=:", c);
c /= 6; // c = 24 / 6 => 4
console.log("Asignación /=:", c);
c %= 3; // c = 4 % 3 => 1
console.log("Asignación %=:", c);
c **= 3; // c = 1 ** 3 => 1
console.log("Asignación **=:", c);

// Operadores de asignación bit a bit
let d = 8; // En binario: 1000
console.log((d >>> 0).toString(2));
d <<= 1; // Desplaza los bits a la izquierda: 10000
console.log("Asignación <<=:", d);
d >>= 2; // Desplaza a la derecha: 0100 (4)
console.log("Asignación >>=:", d);
d >>>= 1; // Desplaza sin signo: 0010 (2)
console.log("Asignación >>>=:", d);

let e = 5; // En binario: 0101
e &= 3; // 0101 & 0011 = 0001 (1)
console.log("Asignación &=:", e);
e |= 2; // 0001 | 0010 = 0011 (3)
console.log("Asignación |=:", e);
e ^= 1; // 0011 ^ 0001 = 0010 (2)
console.log("Asignación ^=: ", e);

// Operadores de asignación lógica (introducidos en ECMAScript 2021)
let f = null;
f ??= "valor por defecto"; // Si f es null o undefined, asigna "valor por defecto"
console.log("Asignación ??=:", f);
let g = false;
g = g && true;
g &&= false; // g pasa a false, ya que true && false es false
console.log("Asignación &&=:", g);
let h = false;
h = h || true;
h ||= true; // h pasa a true, ya que false || true es true
console.log("Asignación ||=:", h);

// 3. Operadores de Comparación
let x = 5,
  y = "5";
console.log("Igualdad laxa (==):", x == y); // true (5 es igual a "5" después de conversión)
console.log("Desigualdad laxa (!=):", x != y); // false
console.log("Igualdad estricta (===):", x === y); // false (diferentes tipos)
console.log("Desigualdad estricta (!==):", x !== y); // true
console.log("Menor que (<):", x < 10); // true
console.log("Menor o igual (<=):", x <= 5); // true
console.log("Mayor que (>):", x > 3); // true
console.log("Mayor o igual (>=):", x >= 5); // true

// 4. Valores Truthy y Falsy
// En JavaScript, un valor se evalúa como "truthy" si se comporta como verdadero en contextos booleanos,
// y "falsy" si se evalúa como falso.
// Los valores falsy comunes son: false, 0, -0, 0n, "", null, undefined y NaN.
console.log("Boolean(true):", Boolean(true)); // true, es truthy
console.log("Boolean('texto'):", Boolean("texto")); // true, es truthy
console.log("Boolean(123):", Boolean(-123)); // true, es truthy
console.log("Boolean({}):", Boolean({})); // true, es truthy (objeto vacío)
console.log("Boolean([]):", Boolean([])); // true, es truthy (array vacío)
console.log("Boolean(false):", Boolean(false)); // false, es falsy
console.log("Boolean(0):", Boolean(0)); // false, es falsy
console.log("Boolean(''):", Boolean("")); // false, es falsy
console.log("Boolean(null):", Boolean(null)); // false, es falsy
console.log("Boolean(undefined):", Boolean(undefined)); // false, es falsy
console.log("Boolean(NaN):", Boolean(NaN)); // false, es falsy

// 5. Operadores Lógicos
let bool1 = true,
  bool2 = false;
console.log("AND lógico (&&):", bool1 && bool2); // false
console.log("OR lógico (||):", bool1 || bool2); // true
console.log("NOT lógico (!):", !"fasdfas"); // false
console.log("Coalescencia nula (??):", null ?? "valor por defecto"); // "valor por defecto"

// 6. Operadores Bit a Bit
let bitA = 6; // 0110 en binario
let bitB = 3; // 0011 en binario
console.log("Bitwise AND (&):", bitA & bitB); // 0010 (2)
console.log("Bitwise OR (|):", bitA | bitB); // 0111 (7)
console.log("Bitwise XOR (^):", bitA ^ bitB); // 0101 (5)
console.log("Bitwise NOT (~) de bitA:", ~bitA); // Inversa de 6 en complemento a dos
console.log("Desplazamiento a la izquierda (<<):", bitA << 1); // 1100 (12)
console.log("Desplazamiento a la derecha (>>):", bitA >> 1); // 0011 (3)
console.log("Desplazamiento sin signo (>>>):", bitA >>> 1); // 0011 (3)

// 7. Operador Condicional (Ternario)
let edad = 20; // ? :
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log("Operador ternario:", mensaje);

// 8. Operador de Coma
let i, j;
i = ((j = 10), j + 5); // Se evalúa j = 10 y luego j + 5; el resultado es 15
console.log("Operador coma:", i);
let salida = "";
for (let k = 0; k < 10; k++, salida += ",") {}

// 9. Operadores Unarios Especiales
// typeof: retorna el tipo del operando
console.log("typeof 123:", typeof null); // "number"

// delete: elimina una propiedad de un objeto
const obj = { propiedad: "valor" };
console.log("Objeto antes de delete:", obj);
delete obj.propiedad;
console.log("Objeto después de delete:", obj);

// void: evalúa una expresión y retorna undefined
console.log("void operador:", void 0);

// new: crea una nueva instancia de un objeto
const lambda = () => {};
function Persona(nombre) {
  this.nombre = nombre;
}
const persona = new Persona("Juan");
console.log("new operador:", persona);

// in: comprueba si una propiedad existe en un objeto
console.log("Propiedad 'nombre' en persona:", "nombre" in persona); // true

// instanceof: verifica si un objeto es instancia de una función constructora
console.log("persona instanceof Persona:", persona instanceof Persona); // true

// await y yield requieren funciones especiales:
// await: se usa en funciones asíncronas
async function ejemploAwait() {
  const promesa = new Promise((resolve) =>
    setTimeout(() => resolve("Hecho"), 1000)
  );
  const resultado = await promesa;
  console.log("await resultado:", resultado);
}
ejemploAwait();

// yield: se usa en funciones generadoras
function* generadorEjemplo() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = generadorEjemplo();
console.log("yield:", gen.next().value); // 1
console.log("yield:", gen.next().value); // 2
console.log("yield:", gen.next().value); // 3

// 10. Operadores de Encadenamiento Opcional y Spread/Rest
// Optional chaining (?.): permite acceder a propiedades de forma segura.
const objetoComplejo = { a: undefined };
// console.log("Optional chaining:", objetoComplejo.a.b.c);
console.log("Optional chaining:", objetoComplejo.a?.b?.c); // 42
console.log("Optional chaining (propiedad inexistente):", objetoComplejo.x?.y); // undefined

// Spread: expande elementos de un iterable (por ejemplo, en arrays)
const arrOriginal = [1, 2, 3];
const arrClonado = [...arrOriginal];
console.log("Spread (array clonado):", arrClonado);

// Rest: agrupa múltiples argumentos en una función
function sumar(nombre, ...numeros) {
  return numeros.reduce((acum, actual) => acum + actual, 0);
}
console.log("Rest (suma de argumentos):", sumar(1, 2, 3, 4, 5, 6, 7, 8)); // 15
