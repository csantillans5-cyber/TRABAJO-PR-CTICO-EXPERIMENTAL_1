/*Entrada: se leen los datos de edades y se realiza un arreglo
Proceso: creamos un bucle que sea menor a n cantidad para que 
sea nuestro bucle sea finito, dentro de este hacemos una secuencia para encontrar la edad mayor
Salida: muestra la edad mayor*/
function pedirEdad() {
  const edades = [];
  const totalHermanos = 3;

  for (let i = 0; i < totalHermanos; i++) {
    let edad = parseInt(prompt(`Ingrese la edad del hermano ${i + 1}:`));

    while (isNaN(edad)) {
      edad = parseInt(prompt("Por favor, ingrese un número válido:"));
    }
    edades.push(edad);
  }

  let mayor = edades[0];
  for (let i = 0; i < edades.length; i++) {
    if (edades[i] > mayor) {
      mayor = edades[i];
    }
  }

  alert(`La mayor edad es: ${mayor}`);
}

pedirEdad();
