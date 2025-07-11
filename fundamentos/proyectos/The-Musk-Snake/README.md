
# Proyecto The-Musk-Snake

The-Musk-Snake es un juego interactivo desarrollado en conjunto con los alumnos de la escuela **The Musk**. El objetivo es aprender fundamentos de programación y JavaScript mientras se crea un proyecto divertido y didáctico.

## Descripción

En The-Musk-Snake, los jugadores controlan una serpiente que debe comer manzanas para crecer y sumar puntos. El reto consiste en evitar chocar contra las paredes o contra sí misma. El juego sirve como excusa para practicar lógica, estructuras de datos y manipulación de eventos en JavaScript.

## Objetivos didácticos

- Aprender a trabajar con JavaScript y Node.js.
- Comprender la lógica de movimiento y colisiones.
- Practicar el uso de eventos de teclado en el navegador.
- Trabajar con estructuras de datos como arrays y objetos.
- Modularizar el código y organizarlo en archivos.
- Fomentar el trabajo en equipo y la creatividad.

## Tecnologías utilizadas

- **JavaScript**: Para la lógica y estructura del juego.
- **Node.js**: Para ejecutar el juego en entorno local.
- **Terminal/Consola**: Para la interacción y ejecución.

## Estructura del proyecto

```sh
The-Musk-Snake/
├── app.js           # Archivo principal que inicia el juego
├── teclado.js       # Lógica para capturar y procesar las teclas
├── utils.js         # Funciones auxiliares para el juego
├── LICENSE          # Licencia del proyecto
├── package.json     # Dependencias y scripts
└── README.md        # Documentación del proyecto
```

## Cómo ejecutar el proyecto

1. Instala las dependencias:

   ```sh
   npm ci
   ```

2. Inicia el juego:

   ```sh
   node app.js
   ```

## Explicación de la lógica principal

- El archivo `app.js` gestiona el ciclo principal del juego, el movimiento de la serpiente y la generación de manzanas.
- `teclado.js` captura y procesa las teclas presionadas por el usuario para mover la serpiente.
- `utils.js` contiene funciones auxiliares para la lógica del juego, como la generación de posiciones aleatorias y detección de colisiones.
- El estado global del juego se gestiona en `app.js`, que coordina los módulos y la lógica de puntuación.

## ¿Cómo jugar?

- Usa las flechas del teclado para mover la serpiente.
- Come las manzanas para crecer y sumar puntos.
- Evita chocar contra las paredes o tu propio cuerpo.

## Créditos

Proyecto realizado por los alumnos y el profesor del curso de FullStack de la escuela **The Musk**.

## Recursos y aprendizaje

- [Documentación oficial de Node.js](https://nodejs.org/es/)
- [MDN JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Guía de eventos de teclado en JavaScript](https://developer.mozilla.org/es/docs/Web/API/KeyboardEvent)

## Licencia

Este proyecto se distribuye bajo la licencia MIT.
