document.getElementById("audioFundo2").volume = 0.7;

// MODAL
const final1Btn = document.getElementById('final1Button');
const modal = document.getElementById('modal');

// Abrir o modal
final1Btn.addEventListener('click', () => {
    modal.showModal();
});

// ANIMAÇÃO DE ONDULAÇÃO
function createRipple() {
    const rippleContainer = document.querySelector('.ripple-container');
    const ripple = document.createElement('div');

    const size = Math.max(window.innerWidth, window.innerHeight);

    // Centralizar a ondulação
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x - size / 2}px`;
    ripple.style.top = `${y - size / 2}px`;
    ripple.classList.add('ripple');

    rippleContainer.appendChild(ripple);

    ripple.addEventListener('animationend', function () {
        ripple.remove();
    });
}

function startRipples() {
    createRipple();
    setInterval(createRipple, 1000); // Cria uma nova ondulação a cada segundo
}

document.addEventListener('DOMContentLoaded', startRipples);

// SALVAR NOME
const inputElement = document.getElementById('nameUser');
const btnDihfuso = document.getElementById('btnDihfuso');

btnDihfuso.addEventListener('click', () => {
    const inputValue = inputElement.value;

    localStorage.setItem('Nome', inputValue);
})

// PREVENÇÃO DE ERRO
document.getElementById('btnDihfuso').addEventListener('click', function(event) {
    const nameInput = document.getElementById('nameUser');
    const nameError = document.getElementById('nameError');

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Eie, parece que você esqueceu de colocar seu nome :<. Pode me contar? Quero te agradecer! Hehe";
        nameError.style.display = "inline";
        event.preventDefault();
    } else {
        nameError.style.display = "none";
        window.location.href = './final1.html'; // Redireciona para a página final
    }
});