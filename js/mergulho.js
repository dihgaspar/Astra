localStorage.setItem('visitedMergulho', 'true');

document.getElementById('btnEmergir').addEventListener('click', function(event) {
    // Recuperar os valores do localStorage
    const visitedHeranca = localStorage.getItem('visitedHeranca');
    const visitedAiolos = localStorage.getItem('visitedAiolos');
    const visitedFinal2 = localStorage.getItem('visitedFinal2');

    console.log('Herança:', visitedHeranca);
    console.log('Aiolos:', visitedAiolos);
    console.log('Final:', visitedFinal2);

    // Verificar se todas as condições foram atendidas
    if (visitedHeranca === 'true' && visitedAiolos === 'true' && visitedFinal2 === 'true') {
        // Redireciona para Final1.html se todas as condições forem atendidas
        window.location.href = 'dihfuso.html';
    } else {
        // Redireciona para sonho.html se alguma das condições não for atendida
        event.preventDefault();
        window.location.href = 'index.html';
    }
});

document.getElementById("audioFundo").volume = 1;

document.addEventListener('DOMContentLoaded', () => {
    const wordsContainer = document.getElementById('words-container');
    const astra = document.getElementById('astraMergulho');
    
    // Recupera o array do local storage
    const words = JSON.parse(localStorage.getItem('inpFantasmas')) || [];
    
    // Função para criar uma palavra com animação
    function createWordElement(word) {
        const wordElement = document.createElement('div');
        wordElement.className = 'word';
        wordElement.textContent = word;
        
        // Adiciona a palavra ao container
        wordsContainer.appendChild(wordElement);
        
        // Define a animação
        wordElement.style.animation = 'slideUp 6s ease-in-out forwards';
        
        // Remove a palavra após a animação
        setTimeout(() => {
            wordsContainer.removeChild(wordElement);
        }, 6000); // Tempo deve coincidir com a duração da animação
    }

    // Adiciona palavras com animação
    function shoWords() {
        words.forEach((word, index) => {
            setTimeout(() => {
                createWordElement(word);
            }, index * 700); // Adiciona um intervalo entre as palavras
        });
    }

    astra.addEventListener('click', shoWords);
});


// PRECOND