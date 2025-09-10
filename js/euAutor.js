const messageElement = document.getElementById('message');
const message = "Hey, you found me here, congratulations! :) But.. this is not one of the endings of the story. He is still sleeping, so go back to our dream..";
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
