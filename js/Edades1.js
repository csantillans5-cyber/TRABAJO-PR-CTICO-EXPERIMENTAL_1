const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let edades = [];

function preguntarEdad(index) {
  rl.question(`Ingresa la edad del hermano ${index + 1}: `, (respuesta) => {
    const edad = parseInt(respuesta);
    if (isNaN(edad) || edad < 0) {
      console.log("Por favor, ingresa una edad válida.");
      preguntarEdad(index);
    } else {
      edades.push(edad);
      if (edades.length < 3) {
        preguntarEdad(index + 1);
      } else {
        determinarMayor();
        rl.close();
      }
    }
  });
}

function determinarMayor() {
  const mayor = Math.max(...edades);
  const indice = edades.indexOf(mayor);
  console.log(`El hermano ${indice + 1} es el mayor con ${mayor} años.`);
}

preguntarEdad(0);
