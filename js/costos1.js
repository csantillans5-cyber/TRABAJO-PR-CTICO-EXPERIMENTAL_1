function Costos_tarjetas() {

    let tar=0, cos=0

    tar = parseInt(prompt("ingrese cantidad de tarjetas"));
    
    if (tar < 200){
     cos = 2.00
      alert(`El valor a pagar es de ${cos}`);
  } else if (tar > 201 & tar < 300){
    cos = 1.80
      alert(`El valor a pagar es de ${cos}`);
  } else {
     cos = 1.50
     alert(`El valor a pagar es de ${cos}`);
    }
}
Costos_tarjetas()