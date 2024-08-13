const divisor = document.querySelector('div');
divisor.addEventListener('click', () => {
    alert('Hola! Soy el div');
});

const boton = document.getElementById('saludarBtn');
boton.addEventListener('click', (event) => {
    event.stopPropagation();
    alert('Hola!😊🙌');
});
