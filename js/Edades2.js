const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let grupos = [];
let totalGrupos = 0;
let grupoActual = 0;

function preguntarCantidadGrupos() {
  rl.question("¿Cuántos grupos de hermanos deseas registrar? ", (respuesta) => {
    totalGrupos = parseInt(respuesta);
    if (isNaN(totalGrupos) || totalGrupos <= 0) {
      console.log("Por favor, ingresa un número válido.");
      preguntarCantidadGrupos();
    } else {
      preguntarCantidadHermanos();
    }
  });
}

function preguntarCantidadHermanos() {
  rl.question(`¿Cuántos hermanos hay en el grupo ${grupoActual + 1}? `, (respuesta) => {
    const cantidad = parseInt(respuesta);
    if (isNaN(cantidad) || cantidad <= 0) {
      console.log("Por favor, ingresa una cantidad válida.");
      preguntarCantidadHermanos();
    } else {
      grupos.push([]);
      preguntarEdades(cantidad, 0);
    }
  });
}

function preguntarEdades(cantidad, index) {
  rl.question(`Edad del hermano ${index + 1} del grupo ${grupoActual + 1}: `, (respuesta) => {
    const edad = parseInt(respuesta);
    if (isNaN(edad) || edad < 0) {
      console.log("Edad inválida. Intenta de nuevo.");
      preguntarEdades(cantidad, index);
    } else {
      grupos[grupoActual].push(edad);
      if (index + 1 < cantidad) {
        preguntarEdades(cantidad, index + 1);
      } else {
        grupoActual++;
        if (grupoActual < totalGrupos) {
          preguntarCantidadHermanos();
        } else {
          mostrarMayores();
          rl.close();
        }
      }
    }
  });
}

function mostrarMayores() {
  console.log("\n📢 Resultados:");
  grupos.forEach((grupo, i) => {
    const mayor = Math.max(...grupo);
    const indice = grupo.indexOf(mayor);
    console.log(`Grupo ${i + 1}: El hermano ${indice + 1} es el mayor con ${mayor} años.`);
  });
}

preguntarCantidadGrupos();
