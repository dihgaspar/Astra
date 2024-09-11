document.getElementById("audioFundoPesadelo").volume = 0.7;

document.addEventListener('DOMContentLoaded', () => {
    // Configuração do áudio de fundo
    const audioElement = document.getElementById('audioFundoPesadelo');
    const btnTrocarAudio = document.getElementById('btnTrocarAudio');
    const audiosDisponiveis = [
        { src: './audio/O Pesadelo/pesadelo-1.wav', volume: 0.7 },
        { src: './audio/O Pesadelo/pesadelo-2.wav', volume: 0.7 },
        { src: './audio/O Pesadelo/pesadelo-3.wav', volume: 0.7 }
    ];

    // Configuração do modal
    const btnFantasma = document.getElementById('btnFantasma');
    const modal = document.getElementById('modal');

    // Abrir o modal
    btnFantasma.addEventListener('click', () => {
        modal.showModal();
    });

    // Configuração dos áudios (fantasmas, bolhas-modal)
    const audioConfigs = [
        { 
            audioId: 'audio-fantasmas',
            containerId: 'audio-fantasmas-container',
            initialVolume: 0.1,
            maxVolume: 1
        },
        { 
            audioId: 'audio-bolhas-modal',
            containerId: 'modal',
            initialVolume: 0.1,
            maxVolume: 1
        }
    ];

    // Função para obter um áudio aleatório
    const getRandomAudio = () => audiosDisponiveis[Math.floor(Math.random() * audiosDisponiveis.length)];

    // Função para trocar o áudio de fundo
    const trocarAudioFundo = () => {
        const { src, volume } = getRandomAudio();
        audioElement.src = src;
        audioElement.volume = volume;
        audioElement.play();
    };

    // Função para tocar áudio com crossfade
    const playAudioWithCrossfade = (audio, { initialVolume, maxVolume }) => {
        audio.currentTime = 0; // Reinicia o áudio para o início
        audio.volume = initialVolume; // Começa com o volume inicial
        audio.play();

        // Gradualmente aumenta o volume até o máximo
        const fadeInterval = setInterval(() => {
            audio.volume += 0.1;
            if (audio.volume >= maxVolume) clearInterval(fadeInterval); // Para o intervalo quando atingir o volume máximo
        }, 100); // Intervalo de 100ms para um fade in mais suave
    };

    // Evento de clique para trocar o áudio de fundo
    btnTrocarAudio.addEventListener('click', trocarAudioFundo);

    // Configuração dos eventos de áudio para cada configuração
    audioConfigs.forEach(({ audioId, containerId, initialVolume, maxVolume }) => {
        const audio = document.getElementById(audioId);
        const audioContainer = document.getElementById(containerId);
        audio.loop = true;
        audio.volume = initialVolume;

        // Evento para tocar o áudio com crossfade ao passar o mouse sobre o container
        audioContainer.addEventListener('mouseover', () => playAudioWithCrossfade(audio, { initialVolume, maxVolume }));

        // Evento para pausar e reiniciar o áudio ao retirar o mouse do container
        audioContainer.addEventListener('mouseout', () => {
            audio.pause();
            audio.currentTime = 0; // Reinicia o áudio para o início ao sair
        });
    });

    const inputPesadelo = document.getElementById('inpFantasmas');
    const buttonPesadelo = document.getElementById('btnEnviarPesadelo');
    const nameError = document.getElementById('nameError');

    buttonPesadelo.addEventListener('click', function(event) {

        // PREVENÇÃO DE ERRO

        if (inputPesadelo.value.trim() === "") {
            nameError.textContent = "Vamos lá, não deixe os fantasmas te assustarem.. Enfrente eles!";
            nameError.style.display = "inline";
            event.preventDefault();
        } else {
            const inputValuePesadelo = inputPesadelo.value.trim();

            const pesadeloArray = inputValuePesadelo.split(/[\s,]+/);

            localStorage.setItem('inpFantasmas', JSON.stringify(pesadeloArray));
            
            nameError.style.display = "none";

            window.location.href = './mergulho.html'; // Redireciona para a página final
        }
    })
});