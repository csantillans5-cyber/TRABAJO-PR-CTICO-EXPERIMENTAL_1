/*Versión con arreglos:
Guardar en un arreglo la cantidad de usuarios de cada grupo y en otro arreglo el costo
total calculado. Mostrar además en un arreglo paralelo el costo por usuario.

Entrada:Agregar un arreglo para los usuarios, uno para el costo y uno para el costo por usuario
Proceso: recorrer cada arreglo y calcular el costo total y por usuario
Salida:mostrar los reslutados de cada arreglo 
*/
function costoarreglo(){
let i=0,usuario=0,cost=0,N=0
const usuarios=[],costo=[],costousuario=[]
N=parseInt(prompt("Ingrese el numero de grupos"))
while(usuarios.length<N){
usuario=parseInt(prompt(`Ingrese los usuarios para el grupo ${i+1}`))
usuarios.push(usuario)
 if(usuarios[i]>=100){
cost=usuarios[i]*5
}else if (usuarios[i]<=99,usuario[i]>=50){
cost=usuarios[i]*6 
} else if (usuario[i]<=49,usuario[i]>=30){
cost=usuarios[i]*8
}else{
cost=300
} 
costo.push(cost)
costousuario.push(cost/usuarios[i])
console.log(`Del grupo: ${i+1}`)
console.log(`costo total:${cost}`)
console.log(`Costo por usuario: ${costousuario[i]}`)
i=i+1
}
}
debugger
costoarreglo()