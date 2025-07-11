# Ejercicio de modelado de base de datos

Este ejercicio consiste en diseñar un modelo de base de datos para gestionar eventos culturales organizados por una fundación. El objetivo es aplicar los conceptos de normalización y modelado de datos aprendidos en el curso.

## Gestión de eventos

La Fundación Cultural del Sur organiza distintos eventos culturales —como muestras, conciertos o charlas—. Cada evento tiene:

- **Código único**
- **Título**
- **Tipo**
- **Fecha de inicio y fin**

La planificación de cada evento está a cargo de un **empleado** de la fundación.

Un evento puede desarrollarse en **varios espacios físicos**, y cada espacio puede albergar distintos eventos en fechas y horarios distintos. Los espacios tienen:

- **Nombre**
- **Ubicación**
- **Capacidad**

Algunos eventos cuentan con **artistas invitados**. Un mismo artista puede participar en varios eventos, y un evento puede tener varios artistas. Se registra:

- **Nombre artístico**
- **País**
- **Especialidad**

Algunos artistas pertenecen a un **grupo artístico** con:

- **Nombre**
- **País de origen**
- **Año de formación**

Los **asistentes** deben registrarse para adquirir entradas. Cada entrada se asocia a una persona y a un evento, incluyendo:

- **Fecha de compra**
- **Precio**
- **Forma de pago**
- **Indicación de si es gratuita o no**

Cada asistente puede adquirir varias entradas, pero cada entrada pertenece a un único evento.

Los eventos tienen un **cronograma detallado de actividades**, indicando:

- **Día**
- **Hora de inicio y fin**
- **Nombre de la actividad**
- **Espacio donde se realiza**

Cada actividad ocupa un solo espacio.

Los **empleados** que organizan eventos tienen:

- **Identificador fiscal**
- **Nombre**
- **Teléfono**
- **Cargo**
- **Departamento**

Algunos eventos reciben apoyo de **patrocinadores** —empresas, fundaciones u otras entidades— identificados por:

- **CIF**
- **Nombre**
- **Tipo**

Un evento puede tener varios patrocinadores, y un patrocinador puede participar en varios eventos.
