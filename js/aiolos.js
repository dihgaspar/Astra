localStorage.setItem('visitedAiolos', 'true');

document.getElementById('seguir').addEventListener('click', function(event) {
    // Recuperar os valores do localStorage
    const visitedHeranca = localStorage.getItem('visitedHeranca');
    const visitedMergulho = localStorage.getItem('visitedMergulho');

    console.log('Herança:', visitedHeranca);
    console.log('Mergulho:', visitedMergulho);

    // Verificar se todas as condições foram atendidas
    if (visitedHeranca === 'true' && visitedMergulho === 'true') {
        // Redireciona para euAutor.html se todas as condições forem atendidas
        window.location.href = 'euAutor.html';
    } else {
        // Redireciona para index.html se alguma das condições não for atendida
        event.preventDefault();
        window.location.href = 'index.html';
    }
});

document.getElementById("audioFundo").volume = 0.7;

document.addEventListener('DOMContentLoaded', () => {
    const canvas = Array.from(document.querySelectorAll('.astraAiolos, .canva1, .canva2, .canva3, .container'));
    
    canvas.forEach((canva, index) => {
        canva.addEventListener('click', () => {
            if (index < canvas.length - 1) {
                canvas[index + 1].classList.remove("hidden");
            }
        });
    });
});