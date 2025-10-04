# CodeQuestAPI

## Ejercicio Documentación

Ejecuta el siguiente comando de git para clonar este repositorio:

git clone https://github.com/shimotachi3/CodeQuestAPI-examen-mf0493_3.git

Luego instala las dependencias con el siguiente comando de npm:

npm install

Para levantar el servidor ejecuta el siguiente comando de npm:

npm run dev

## Setup de la base de datos

Ejecuta esta sentencia de MongoDB utilizando el plugin de Visual Studio para llenar la base de datos preguntas tipo test. Hazlo con TU conexíon de MongoDB Atlas: 

```
/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('codequest-examen');

// Search for documents in the current collection.
db.getCollection('questions')
  .insertMany([
    {
      "question": "¿Qué etiqueta HTML se usa para crear un enlace?",
      "codeExamples": [],
      "answerOptions": [
        { "answer": "<link>", "isCorrect": false },
        { "answer": "<a>", "isCorrect": true },
        { "answer": "<href>", "isCorrect": false },
        { "answer": "<url>", "isCorrect": false }
      ],
      "explanation": "La etiqueta <a> se utiliza para crear enlaces en HTML.",
      "status": "approved",
      "urlSource": "",
      "difficulty": "easy"
    },
    {
      "question": "¿Cuál es la etiqueta HTML correcta para crear un párrafo?",
      "codeExamples": [],
      "answerOptions": [
        { "answer": "<pr>", "isCorrect": false },
        { "answer": "<p>", "isCorrect": true },
        { "answer": "<paragraph>", "isCorrect": false },
        { "answer": "<para>", "isCorrect": false }
      ],
      "explanation": "La etiqueta <p> se utiliza para definir un párrafo en HTML.",
      "status": "approved",
      "urlSource": "",
      "difficulty": "easy"
    },
    {
      "question": "¿Cómo se selecciona un elemento con la clase 'example' en CSS?",
      "codeExamples": [".example { color: red; }"],
      "answerOptions": [
        { "answer": ".example", "isCorrect": true },
        { "answer": "#example", "isCorrect": false },
        { "answer": "example", "isCorrect": false },
        { "answer": "class=example", "isCorrect": false }
      ],
      "explanation": "En CSS, se utiliza un punto (.) seguido del nombre de la clase para seleccionar elementos con esa clase.",
      "status": "approved",
      "urlSource": "",
      "difficulty": "easy"
    },
    {
      "question": "¿Qué propiedad CSS se usa para cambiar el color de texto?",
      "codeExamples": ["p { color: blue; }"],
      "answerOptions": [
        { "answer": "color", "isCorrect": true },
        { "answer": "background-color", "isCorrect": false },
        { "answer": "font-color", "isCorrect": false },
        { "answer": "text-color", "isCorrect": false }
      ],
      "explanation": "La propiedad CSS 'color' se utiliza para cambiar el color del texto.",
      "status": "approved",
      "urlSource": "",
      "difficulty": "easy"
    },
    {
      "question": "¿Qué atributo HTML se usa para especificar la dirección de una imagen?",
      "codeExamples": ["<img src='image.jpg' alt='Descripción'>"],
      "answerOptions": [
        { "answer": "src", "isCorrect": true },
        { "answer": "alt", "isCorrect": false },
        { "answer": "href", "isCorrect": false },
        { "answer": "link", "isCorrect": false }
      ],
      "explanation": "El atributo 'src' se utiliza en la etiqueta <img> para especificar la ruta de la imagen.",
      "status": "approved",
      "urlSource": "",
      "difficulty": "easy"
    },
    {
      "question": "¿Cómo se escribe un comentario en JavaScript?",
      "codeExamples": ["// Esto es un comentario"],
      "answerOptions": [
        { "answer": "// comentario", "isCorrect": true },
        { "answer": "/* comentario */", "isCorrect": false },
        { "answer": "<!-- comentario -->", "isCorrect": false },
        { "answer": "# comentario", "isCorrect": false }
      ],
      "explanation": "En JavaScript, los comentarios de una línea se escriben con '//'.",
      "status": "approved",
      "urlSource": "",
      "difficulty": "easy"
    },
    {
      "question": "¿Qué propiedad CSS se usa para cambiar el tamaño de la fuente?",
      "codeExamples": ["p { font-size: 16px; }"],
      "answerOptions": [
        { "answer": "font-size", "isCorrect": true },
        { "answer": "text-size", "isCorrect": false },
        { "answer": "size", "isCorrect": false },
        { "answer": "font-style", "isCorrect": false }
      ],
      "explanation": "La propiedad 'font-size' se utiliza en CSS para establecer el tamaño de la fuente.",
      "status": "approved",
      "urlSource": "",
      "difficulty": "easy"
    },
    {
      "question": "¿Qué método en JavaScript se usa para agregar un elemento al final de un array?",
      "codeExamples": ["let arr = [1, 2]; arr.push(3);"],
      "answerOptions": [
        { "answer": "push()", "isCorrect": true },
        { "answer": "pop()", "isCorrect": false },
        { "answer": "shift()", "isCorrect": false },
        { "answer": "unshift()", "isCorrect": false }
      ],
      "explanation": "El método 'push()' se usa en JavaScript para agregar elementos al final de un array.",
      "status": "approved",
      "urlSource": "",
      "difficulty": "easy"
    },
    {
      "question": "¿Cuál es la forma correcta de declarar una variable en JavaScript?",
      "codeExamples": ["let x = 10;"],
      "answerOptions": [
        { "answer": "variable x;", "isCorrect": false },
        { "answer": "var x;", "isCorrect": false },
        { "answer": "let x;", "isCorrect": true },
        { "answer": "x var;", "isCorrect": false }
      ],
      "explanation": "En JavaScript, se utiliza 'let' o 'const' para declarar una variable.",
      "status": "approved",
      "urlSource": "",
      "difficulty": "easy"
    },
    {
      "question": "¿Qué propiedad CSS se usa para crear márgenes alrededor de un elemento?",
      "codeExamples": ["div { margin: 20px; }"],
      "answerOptions": [
        { "answer": "margin", "isCorrect": true },
        { "answer": "padding", "isCorrect": false },
        { "answer": "border", "isCorrect": false },
        { "answer": "spacing", "isCorrect": false }
      ],
      "explanation": "La propiedad 'margin' en CSS se usa para definir el espacio fuera del borde de un elemento.",
      "status": "approved",
      "urlSource": "",
      "difficulty": "easy"
    },
    {
      "question": "¿Qué valor de CSS se usa para hacer que un elemento ocupe toda la altura de la ventana del navegador?",
      "codeExamples": ["height: 100vh;"],
      "answerOptions": [
        { "answer": "100vh", "isCorrect": true },
        { "answer": "100%", "isCorrect": false },
        { "answer": "auto", "isCorrect": false },
        { "answer": "100px", "isCorrect": false }
      ],
      "explanation": "El valor '100vh' en CSS se utiliza para que un elemento ocupe toda la altura de la ventana.",
      "status": "approved",
      "urlSource": "",
      "difficulty": "easy"
    },
    {
      "question": "¿Cómo se agrega un enlace a una página externa en HTML?",
      "codeExamples": ["<a href='url'>Enlace</a>"],
      "answerOptions": [
        { "answer": "<link href='url'>", "isCorrect": false },
        { "answer": "<a href='url'>", "isCorrect": true },
        { "answer": "<a src='url'>", "isCorrect": false },
        { "answer": "<link rel='url'>", "isCorrect": false }
      ],
      "explanation": "El atributo 'href' se usa en la etiqueta <a> para especificar la URL de un enlace.",
      "status": "approved",
      "urlSource": "",
      "difficulty": "medium"
    },
    {
      "question": "¿Qué método JavaScript se usa para convertir un string a un número?",
      "codeExamples": ["let num = parseInt('123');"],
      "answerOptions": [
        { "answer": "parseInt()", "isCorrect": true },
        { "answer": "toNumber()", "isCorrect": false },
        { "answer": "convert()", "isCorrect": false },
        { "answer": "parse()", "isCorrect": false }
      ],
      "explanation": "El método 'parseInt()' se usa para convertir un string en un número entero.",
      "status": "approved",
      "urlSource": "",
      "difficulty": "medium"
    }
  ]
  );
```
