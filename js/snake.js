var cuadrito=document.getElementById("cuadrito");
var boton=document.getElementById("reiniciar");
boton.addEventListener("click", reiniciar);
document.addEventListener("keydown", moverCuadrito);
var posX=0;
var posY=0;
var movimiento=40;


var teclas ={
  UP: 38||104,
  DOWN: 40||98,
  LEFT: 37||100,
  RIGHT: 39||102
};



function moverCuadrito(evento)//esta funcion mueve el cuadrito,modificando las coordenadas x o y
{

  switch(evento.keyCode)
  {
    case teclas.UP:
    console.log("arriba");
    posY =posY - movimiento;
    if (posY < 0){
      alert("Has perdido, intentalo de nuevo");
    }
    else {
        cuadrito.style.marginTop = posY+ "px";
    }
    break;
    case teclas.DOWN:
    console.log("abajo");
    posY =posY + movimiento;
    if (posY >160){
      alert("Has perdido, intentalo de nuevo");
    }
    else {
        cuadrito.style.marginTop = posY+ "px";
    }
    break;
    case teclas.LEFT:
    console.log("izquierda");
    posX =posX - movimiento;
    if (posX < 0){
      alert("Has perdido, intentalo de nuevo");
    }
    else {
        cuadrito.style.marginLeft = posX + "px";
    }
    break;
    case teclas.RIGHT:
    console.log("derecha");
    posX =posX + movimiento;
    if (posX >160){
      alert("Has perdido, intentalo de nuevo");
    }
    else {
        cuadrito.style.marginLeft = posX + "px";
    }

    break;
    default:
    alert("Tecla inválida, presiona una flecha");
    break;
  }
}

function reiniciar(){//esta funcion regresa el cuadrito a su pusicion original
   posX = 0;
   posY = 0;
   cuadrito.style.marginTop=posY;
   cuadrito.style.marginLeft=posX;
   document.addEventListener("keydown", moverCuadrito);
}
