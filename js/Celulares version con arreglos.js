/* Definir N, precioBase, marca, capacidad, precioFinal
  Definir marcas[], capacidades[], preciosFinales[]
  Escribir "Ingrese la cantidad de celulares:"
  Leer N
  Para i ← 1 Hasta N Hacer
    Escribir "Celular", i
    Leer precioBase
    Leer marca
    Leer capacidad
    Si marca = "A" Entonces
      Si capacidad = 64 Entonces
        precioFinal ← precioBase + 20
      Sino Si capacidad = 128 Entonces
        precioFinal ← precioBase + 30
      FinSi
    Sino Si marca = "B" Entonces
      Si capacidad = 64 Entonces
        precioFinal ← precioBase - 30
      Sino Si capacidad = 128 Entonces
        precioFinal ← precioBase - 50
      FinSi
    FinSi
    marcas[i] ← marca
    capacidades[i] ← capacidad
    preciosFinales[i] ← precioFinal
  FinPara
  Escribir "Resumen de celulares vendidos:"
  Para i ← 1 Hasta N Hacer
    Escribir "Marca:", marcas[i], "Capacidad:", capacidades[i], "Precio final:", preciosFinales[i]
*/
let N = parseInt(prompt("Ingrese número de celulares:"));
let marcas = [];
let capacidades = [];
let preciosFinales = [];
for (let i = 0; i < N; i++) {
    alert("Celular " + (i + 1));
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
    marcas.push(marca);
    capacidades.push(capacidad);
    preciosFinales.push(precioFinal);
}
alert("--- Resultados ---");
for (let i = 0; i < N; i++) {
    alert("Celular " + (i + 1) + 
          ": Marca=" + marcas[i] + 
          ", Capacidad=" + capacidades[i] + "GB" + 
          ", Precio Final=$" + preciosFinales[i]);
}