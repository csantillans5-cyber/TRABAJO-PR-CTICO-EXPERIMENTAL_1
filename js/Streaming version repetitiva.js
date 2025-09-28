/*La aplicación recibe N solicitudes de grupos. Para cada uno, calcular el costo total y el
costo por usuario aplicando las mismas reglas.

Entrada:Ingresar los grupos y el numero de usuarios para cada grupo
Proceso:recorrer cada grupo con un ciclo y calcular el costo total y por usuario
Salida:mostrar los resultados de cada grupo.
*/
function costomultiple (){
let cost=0,i=0,n=0,usuario=0,usucos=0
n=parseInt(prompt("Ingrese los grupos"))
while (i<n){
usuario=parseInt(prompt("Ingrese la cantidad de usuarios"))
if (usuario>=100){
cost=usuario*5
}else if (usuario<=99,usuario>=50){
cost=usuario*6 
} else if (usuario<=49,usuario>=30){
cost=usuario*8
}else {
cost=300
}
usucos=cost/usuario
console.log(`Del grupo: ${i+1}`)
console.log(`costo total:${cost}`)
console.log(`Costo por usuario: ${usucos}`)
i=i+1
  }

}
costomultiple ()