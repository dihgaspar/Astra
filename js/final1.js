document.addEventListener('DOMContentLoaded', () => {

    const txtFinal1 = document.getElementById('txtFinal1');

        const nome = localStorage.getItem('Nome');
        txtFinal1.textContent = "Thanks, " + nome + ", for staying with me until here! :D";
        txtFinal1.style.display = 'block'; // Mostra o texto

})
