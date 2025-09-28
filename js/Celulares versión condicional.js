/* Definir precioBase, marca, capacidad, precioFinal
  Escribir "Ingrese el precio base del celular:"
  Leer precioBase
  Escribir "Ingrese la marca (A o B):"
  Leer marca
  Escribir "Ingrese la capacidad (64 o 128):"
  Leer capacidad
  Si marca = "A" Entonces
    Si capacidad = 64 Entonces
      precioFinal ← precioBase + 20
    Sino Si capacidad = 128 Entonces
      precioFinal ← precioBase + 30
    SinoS
      Escribir "Capacidad inválida"
    FinSi
  Sino Si marca = "B" Entonces
    Si capacidad = 64 Entonces
      precioFinal ← precioBase - 30
    Sino Si capacidad = 128 Entonces
      precioFinal ← precioBase - 50
    Sino
      Escribir "Capacidad inválida"
    FinSi
  Sino
    Escribir "Marca inválida"
  FinSi
  Escribir "Precio final del celular:", precioFinal
*/
let precioInicial = parseFloat(prompt("Ingrese precio inicial:"));
let marca = prompt("Ingrese marca (A o B):").toUpperCase();
let capacidad = parseInt(prompt("Ingrese capacidad (64 o 128):"));
let precioFinal;
if (marca === "A" && capacidad === 64) {
    precioFinal = precioInicial + 20;
} else if (marca === "A" && capacidad === 128) {
    precioFinal = precioInicial + 30;
} else if (marca === "B" && capacidad === 64) {
    precioFinal = precioInicial - 30;
} else if (marca === "B" && capacidad === 128) {
    precioFinal = precioInicial - 50;
}
alert("El precio final es: $" + precioFinal);