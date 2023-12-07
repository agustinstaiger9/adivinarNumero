//Seleccionar un numero al azar para que adivine el usuario

let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')


function chequearResultado(){
    let numeroIngresado = parseInt(numeroEntrada.value)

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favor introduce un numero valido entre 1 y 100'
        return
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = 'Felicitaciones! Adivinaste el numero';
        mensaje.style.color ='green';
        numeroEntrada.disable = true;
    }else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = '¡Mas alto! El numero es mas alto que seleccionaste!';
        mensaje.style.color = 'red';
    }else {
        mensaje.textContent= 'El numero es mas bajo que el que seleccionaste';
        mensaje.style.color = 'red';
    }

}