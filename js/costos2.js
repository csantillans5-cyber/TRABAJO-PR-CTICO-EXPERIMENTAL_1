/* Desarrollar el siguiente problema
Una empresa de impresión ofrece tarjetas de invitación:
> Pedido ≤ 200 → $2.00 c/u.
> Entre 201 y 300 → $1.80 c/u.
> Más de 300 → $1.50 c/u.

La empresa recibe N pedidos. Para cada pedido, leer la cantidad de tarjetas y calcular
el costo total aplicando las mismas reglas. 

Definir las siguientes variables 
tar, cos, n y c
luego vamos a calcular el valor de las tarjetas de pendiendo de la cantidad de pedidos
y por ultimo mostraremos su costo 

*/

function Costos_tarjetas() {

    let tar=0, cos=0, n=0, c=0
      n = parseInt(prompt("ingrese la cantidad de pedidos"))

  while (c<n){

    tar = parseInt(prompt("ingrese cantidad de tarjetas"));
    
    if (tar < 200){
     cos = 2.00
      alert(`El valor a pagar es de ${cos}`);
   }else if (tar > 201 & tar < 300){
    cos = 1.80
      alert(`El valor a pagar es de ${cos}`);
   } else {
     cos = 1.50
     alert(`El valor a pagar es de ${cos}`);
    }
    c=c+1
  } 
}
Costos_tarjetas()