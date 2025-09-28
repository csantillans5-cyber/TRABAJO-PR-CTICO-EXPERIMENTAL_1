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