function onload () {
    console.log(onload);
let numeroRandom = Math.floor (Math.random() * 100) + 1;

console.log(numeroRandom);

const campo = document.querySelector('.campo');
const botonEnviar = document.querySelector('.botonEnviar');
const respuesta = document.querySelector('.respuesta');
const ultimoResultado = document.querySelector('.ultimoResultado');
const mayorOmenor = document.querySelector('.mayorOmenor');


let Contador = 1;
let botonReiniciar;

botonEnviar.addEventListener('click', controlar);

    function controlar() {      
        let usuario = Number(campo.value);
    
        if (Contador === 1) {
            respuesta.textContent = 'Intentos Anteriores: ';
        }
        respuesta.textContent += usuario + ' ';

        if (usuario === numeroRandom) {         
            ultimoResultado.textContent = 'Felicitaciones Adivinaste!!';
            ultimoResultado.style.backgroundColor = 'green';
            mayorOmenor.textContent = ' ';
            reiniciar();
            

        } else if (Contador === 10) {
            ultimoResultado.textContent = '¡Fin del Juego!';
            reiniciar();
        
        } else {
            ultimoResultado.textContent ='Incorrecto';
            ultimoResultado.style.backgroundColor = 'red';
        
        if (usuario < numeroRandom) {
            mayorOmenor.textContent ='El número es muy bajo... Intenta nuevamente!!';
        
        }else if (usuario > numeroRandom) {
            mayorOmenor.textContent = 'El número es muy alto... Intenta nuevamente!!';
        }
        }
        
        Contador ++;
        campo.value = '';
        campo.focus();

    }       

    function reiniciar () {
        campo.disabled = true;
        campo.disabled = true;
        botonReiniciar = document.createElement('button');
        botonReiniciar.textContent = 'Iniciar nuevo juego';
        document.body.append(botonReiniciar);
        botonReiniciar.addEventListener('click', reiniciarJuego);
    }

    function reiniciarJuego() {
        Contador = 1;

        const reiniciarParrafos = document.querySelectorAll('.contenedorResultado p')
        
        for (let i = 0 ; i < reiniciarParrafos.length ; i++) {
            reiniciarParrafos[i].textContent = '';
        }

        botonReiniciar.parentNode.removeChild(botonReiniciar);

        campo.disabled = false;
        botonEnviar.disabled = false;
        campo.value = '';
        campo.focus();

        ultimoResultado.style.backgroundColor = 'white';

        numeroRandom = Math.floor(Math.random() * 100) + 1;
        }
    
    
}






