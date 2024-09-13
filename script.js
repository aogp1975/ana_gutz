console.log('Este es mi portafolio.')

const menubtn = document.getElementById('menubt');
const menu = document.getElementById('menuabb');

menubtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});
