/* Desarrollar el siguiente problema
Una empresa de impresión ofrece tarjetas de invitación:
> Pedido ≤ 200 → $2.00 c/u.
> Entre 201 y 300 → $1.80 c/u.
> Más de 300 → $1.50 c/u.

Guardar en un arreglo las cantidades de tarjetas de N pedidos. Calcular en un arreglo
paralelo el costo total de cada pedido.
 

Definir las siguientes variables 
tar, cos, n y c
en el proceso porsederemos a definir la cantidadde pedios para iniciar un bucle 
en el cual se vera la cantidad de tarjetas y al final se mostrara su costo

*/
function Arreglo_tarjetas() {

    let tar=[], cos=0, n=0;
     
    n = parseInt(prompt("ingrese la cantidad de pedidos"))

      for ( let c=0; c<n; c=c+1 ) {
       let cant = parseInt(prompt("ingrese cantidad de tarjetas"));
       tar[c] = cant ;
      if (cant < 200){
       cos = 2.00
    } else if (cant > 201 && cant < 300){
       cos = 1.80
    } else {
       cos = 1.50
        alert(`El valor a pagar es de ${cos}`);
    }
  } 
}
Arreglo_tarjetas()