document.addEventListener('DOMContentLoaded', () => {

    const txtFinal1 = document.getElementById('txtFinal1');

        const nome = localStorage.getItem('Nome');
        txtFinal1.textContent = "Obrigado, " + nome + ", por seguir até aqui comigo! :D";
        txtFinal1.style.display = 'block'; // Mostra o texto
})