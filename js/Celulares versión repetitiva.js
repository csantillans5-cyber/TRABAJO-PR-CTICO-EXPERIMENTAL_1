/*Definir N, precioBase, marca, capacidad, precioFinal
  Escribir "Ingrese la cantidad de celulares a procesar:"
  Leer N
  Para i ← 1 Hasta N Hacer
    Escribir "Celular", i
    Escribir "Ingrese precio base:"
    Leer precioBase
    Escribir "Ingrese marca (A o B):"
    Leer marca
    Escribir "Ingrese capacidad (64 o 128):"
    Leer capacidad
    Si marca = "A" Entonces
      Si capacidad = 64 Entonces
        precioFinal ← precioBase + 20
      Sino Si capacidad = 128 Entonces
        precioFinal ← precioBase + 30
      Sino
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
    Escribir "Precio final del celular", i, ":", precioFinal
*/
let N = parseInt(prompt("Ingrese número de celulares:"));
for (let i = 1; i <= N; i++) {
    alert("Celular " + i);
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
    alert("Precio final del celular " + i + ": $" + precioFinal);
}