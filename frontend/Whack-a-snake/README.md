# Proyecto Whack-a-snake

Whack-a-Snake es un juego interactivo desarrollado como parte del curso de desarrollo web. El objetivo es aprender conceptos clave de programación frontend mientras se crea un proyecto divertido y didáctico.

## Descripción

En Whack-a-Snake, los jugadores deben atrapar serpientes que aparecen en una cuadrícula antes de que desaparezcan. El juego pone a prueba la velocidad de reacción y la coordinación, y sirve como excusa para practicar eventos, estados y renderizado en React.

## Objetivos didácticos

- Aprender a trabajar con React y Vite.
- Comprender el manejo de estados y props en componentes.
- Practicar el uso de eventos en el navegador.
- Trabajar con CSS para crear interfaces atractivas.
- Fomentar el trabajo en equipo y la creatividad.

## Tecnologías utilizadas

- **React**: Para la construcción de la interfaz y la lógica del juego.
- **Vite**: Para el entorno de desarrollo rápido y moderno.
- **JavaScript** y **JSX**: Para la lógica y estructura de los componentes.
- **CSS**: Para el diseño visual del juego.

## Estructura del proyecto

```
frontend/Whack-a-snake/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx           # Componente principal del juego
│   ├── Grid.jsx          # Lógica y renderizado de la cuadrícula
│   ├── Snake.jsx         # Componente de la serpiente
│   ├── Corazones.jsx     # Indicador de vidas
│   ├── index.css         # Estilos globales
│   └── main.jsx          # Punto de entrada de la app
├── Diseño.drawio         # Diseño visual del juego
├── index.html            # HTML principal
├── package.json          # Dependencias y scripts
├── vite.config.js        # Configuración de Vite
└── README.md             # Documentación del proyecto
```

## Cómo ejecutar el proyecto

1. Clona el repositorio:

   ```zsh
   git clone <URL-del-repositorio>
   ```

2. Instala las dependencias:

   ```zsh
   cd frontend/Whack-a-snake
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```zsh
   npm run dev
   ```

4. Abre el navegador en `http://localhost:5173` para jugar.

## Explicación de la lógica principal

- El componente `Grid.jsx` gestiona la aparición aleatoria de serpientes y detecta los clics del usuario.
- `Snake.jsx` representa cada serpiente en la cuadrícula.
- `Corazones.jsx` muestra las vidas restantes del jugador.
- El estado global se gestiona en `App.jsx`, que coordina los componentes y la lógica de puntuación.

## Créditos

Proyecto realizado por los alumnos y el profesor del curso de FullStack de la escuela **The Musk**.

¡Gracias por jugar y aprender con Whack-a-Snake!

## Licencia

Este proyecto se distribuye bajo la licencia MIT.
