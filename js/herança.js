localStorage.setItem('visitedHeranca', 'true');

document.addEventListener('DOMContentLoaded', () => {
    const beijaFlores = document.querySelectorAll('.bj1, .bj2, .bj3, .bj4');
    const textos = document.querySelectorAll('.texto-1, .texto-2, .texto-3, .texto-4');
    const btnBeijaFlor = document.getElementById('bj4');
    const modal = document.getElementById('modal');

    beijaFlores.forEach((beijaFlor, index) => {
        beijaFlor.addEventListener('click', () => {
            // Mostrar o próximo beija-flor
            if (index < beijaFlores.length - 1) {
                beijaFlor.classList.add('hidden');
                beijaFlores[index + 1].classList.remove('hidden');
            }

            // Mostrar o texto correspondente
            if (index < textos.length - 1) {
                textos[index + 1].classList.remove('hidden');
            }
        });
    });

    // Configuração do modal
    if (btnBeijaFlor && modal) {
        btnBeijaFlor.addEventListener('click', () => {
            modal.showModal();
        });
    }
});

const inputElement = document.getElementById('heranca');
const buttonHeranca = document.getElementById('btnEnviar');

btnEnviar.addEventListener('click', () => {
    const inputValue = inputElement.value;

    localStorage.setItem('heranca', inputValue);
})

// PREVENÇÃO DE ERRO
document.getElementById('btnEnviar').addEventListener('click', function(event) {
    const heranca = document.getElementById('heranca');
    const nameError = document.getElementById('nameError');

    if (heranca.value.trim() === "") {
        nameError.textContent = "Parece que alguém está meio tímido! Não se preocupe, pode compratilhar o que quiser :)";
        nameError.style.display = "inline";
        event.preventDefault();
    } else {
        nameError.style.display = "none";
        window.location.href = './index.html'; // Redireciona para a página final
    }
});