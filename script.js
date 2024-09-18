console.log('Este es mi portafolio.')

const menubtn = document.getElementById('menubt');
const menu = document.getElementById('menuabb');

menubtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});
  


const textoElement = document.getElementById('escribe');
const texto = textoElement.textContent;
textoElement.textContent = '';

let index = 0;
const velocidad = 100; // Velocidad en milisegundos

function escribirTexto() {
    if (index < texto.length) {
        textoElement.textContent += texto.charAt(index);
        index++;
        setTimeout(escribirTexto, velocidad);
    } else {
        // Reiniciar el índice y limpiar el texto para repetir la animación
        setTimeout(() => {
            textoElement.textContent = '';
            index = 0;
            escribirTexto();
        }, 2000); // Tiempo de pausa antes de reiniciar (2 segundos en este caso)
    }
}

escribirTexto();