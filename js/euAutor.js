const messageElement = document.getElementById('message');
const message = "Eie, você me achou aqui, parabéns! :) Mas.. esse não é um dos finais da história. Ele ainda dorme, então volte ao nosso sonho..";
let index = 0;

function typeWriter() {
    if (index < message.length) {
        messageElement.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

function createFlashingLight() {
    const light = document.createElement('div');
    light.classList.add('flashing-light');
    
    // Posiciona a luz em uma posição aleatória na tela
    light.style.top = Math.random() * window.innerHeight + 'px';
    light.style.left = Math.random() * window.innerWidth + 'px';
    
    // Define uma duração de animação aleatória
    light.style.animationDuration = (Math.random() * 2 + 0.5) + 's';
    
    document.body.appendChild(light);
}

// Cria múltiplas luzes piscando
for (let i = 0; i < 50; i++) {
    createFlashingLight();
}

window.onload = typeWriter;