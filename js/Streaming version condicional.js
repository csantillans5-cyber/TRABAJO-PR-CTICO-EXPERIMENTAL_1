/*Una aplicación de streaming cobra según número de usuarios:
• ≥100 usuarios → $5 c/u.
• 50–99 usuarios → $6 c/u.
• 30–49 usuarios → $8 c/u.
• <30 usuarios → $300 fijos.
Calcular el costo total y el costo por usuario para un grupo.

Entrada:pedir el numero de usuarios
Proceso:calcular el costo total y el costo por usuario
Salida:mostrar resultados
*/
function calcularcosto(){
let usuario=0,costo=0,costousuario=0
usuario=parseInt(prompt("Ingrese la cantidad de usuarios"))
if (usuario>=100){
costo=usuario*5
}else if (usuario<=99,usuario>=50){
costo=usuario*6 
} else if (usuario<=49,usuario>=30){
costo=usuario*8
}else {
costo=300
}
costousuario=costo/usuario
console.log(`costo total:${costo}`)
console.log(`Costo por usuario: ${costousuario}`)
}
calcularcosto()