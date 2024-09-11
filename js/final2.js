localStorage.setItem('visitedFinal2', 'true');

document.addEventListener('DOMContentLoaded', () => {

    const audioFundo = document.getElementById("audioFundo");
    const audioFundo2 = document.getElementById("audioFundo2");

    // Definir volume padrão para os áudios
    audioFundo.volume = 0.5;
    audioFundo2.volume = 1; 

    const autores = document.querySelectorAll('.autor, .autor2, .autor3');
    const textos = document.querySelectorAll('.textoF2-1, .textoF2-2, .textoF2-3, .minicontainer2');

    autores.forEach((autor, index) => {
        autor.addEventListener('click', () => {

            if (index < autores.length - 1) {
                autores[index + 1].classList.remove('hidden');
                audioFundo.volume = Math.min(audioFundo.volume + 0.2, 1);
            }

            if (index < textos.length - 1) {
                textos[index + 1].classList.remove('hidden');
            }

            if (autor.classList.contains('autor2')) {
                audioFundo2.play(); // Inicia o segundo áudio
            }

        });
    });

});