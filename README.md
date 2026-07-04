# Jardin interactivo - Desafio Condiciones JS

Proyecto web creado para practicar **condiciones en JavaScript**, **manipulacion del DOM** y uso de eventos.  
La pagina tiene una estetica inspirada en plantas, con tonos verdes y una interfaz simple para resolver los tres ejercicios del desafio.

## Demo

Puedes ver el proyecto publicado en GitHub Pages:

[Ver demo](https://cadina-sandy.github.io/D2-condiciones-js/)

## Vista general

El desafio incluye tres interacciones principales:

1. Una imagen que agrega o quita un borde rojo al hacer click.
2. Una seleccion de stickers que permite llevar hasta 10 unidades en total.
3. Un validador de password usando tres select con numeros del 1 al 9.

## Funcionalidades

- Cambio de borde al seleccionar la planta.
- Suma de cantidades ingresadas por el usuario.
- Mensaje dinamico cuando se seleccionan hasta 10 stickers.
- Mensaje de advertencia cuando se superan los 10 stickers.
- Validacion de dos passwords correctos:
  - `911`: muestra `password 1 correcto`
  - `714`: muestra `password 2 correcto`
- Mensaje de error para cualquier otro password.
- Diseno responsive para pantallas pequenas.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub Pages

## Estructura del proyecto

```text
D2-condiciones-js/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   │   ├── plant-click.svg
│   │   ├── plant-main.svg
│   │   ├── sticker-1.svg
│   │   ├── sticker-2.svg
│   │   └── sticker-3.svg
│   └── js/
│       └── script.js
└── README.md
```

## Como usar el proyecto

1. Clonar el repositorio:

```bash
git clone https://github.com/cadina-sandy/D2-condiciones-js.git
```

2. Entrar a la carpeta:

```bash
cd D2-condiciones-js
```

3. Abrir el archivo `index.html` en el navegador.

## Aprendizajes aplicados

En este proyecto se practicaron conceptos importantes de JavaScript:

- Seleccion de elementos con `querySelector` y `querySelectorAll`.
- Uso de `addEventListener` para escuchar clicks.
- Condicionales `if`, `else if` y `else`.
- Lectura de valores desde inputs y selects.
- Escritura de resultados en el HTML con `innerHTML`.
- Uso de clases CSS para cambiar estilos desde JavaScript.

## Autora

Creado por **Sandy Cadina**.
