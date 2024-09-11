document.getElementById("audioFundo").volume = 0.7;

document.addEventListener('DOMContentLoaded', function() {
    // Configuração do áudio de fundo
    const audioElement = document.getElementById('audioFundo');
    const btnTrocarAudio = document.getElementById('btnTrocarAudio');
    const audiosDisponiveis = [
        {
            src: './audio/Audio-back/sonho-1.wav',
            volume: 0.7
        },
        {
            src: './audio/Audio-back/sonho-2.wav',
            volume: 0.7
        },
        {
            src: './audio/Audio-back/sonho-3.wav',
            volume: 0.7
        }
    ];

    // Configuração para trocar a imagem das estrelas ao clicar
    const imagemEstrelas = document.getElementById('imagemEstrelas');
    const imagensEstrelas = [
        './img/O Sonho/Stars.png',
        './img/O Sonho/Stars-R.png',
        './img/O Sonho/Stars-V.png'
    ];
    let indiceAtualEstrelas = 0;

    imagemEstrelas.addEventListener('click', function() {
        indiceAtualEstrelas = (indiceAtualEstrelas + 1) % imagensEstrelas.length;
        imagemEstrelas.src = imagensEstrelas[indiceAtualEstrelas];
    });

    // Função para trocar o áudio de fundo
    function trocarAudioFundo() {
        const novoAudio = audiosDisponiveis[Math.floor(Math.random() * audiosDisponiveis.length)];
        audioElement.src = novoAudio.src;
        audioElement.volume = novoAudio.volume; // Define o volume do novo áudio
        audioElement.play();
    }

    // Evento de clique para trocar o áudio de fundo
    btnTrocarAudio.addEventListener('click', trocarAudioFundo);

    // Configuração dos modais e botão "DESPERTAR?"
    const btnDespertar = document.getElementById('btnDespertar');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('btnNao');

    // Abrir o modal
    btnDespertar.addEventListener('click', function () {
        modal.showModal();
    });

    //Fechar o modal
    closeModal.addEventListener('click', function () {
        modal.close();
    })

    // Configuração dos áudios (passaro, relogio, relogio-modal)
    const audioConfigs = [
        {
            audioId: 'audio-passaro',
            containerId: 'audio-passaro-container',
            initialVolume: 0.1,
            maxVolume: 0.3
        },
        {
            audioId: 'audio-relogio',
            containerId: 'audio-relogio-container',
            initialVolume: 0.1,
            maxVolume: 1.0
        },
        {
            audioId: 'audio-relogio-modal',
            containerId: 'modal',
            initialVolume: 0.1,
            maxVolume: 1.0
        }
    ];

    // Função para tocar áudio com crossfade
    function playAudioWithCrossfade(audio, config) {
        audio.currentTime = 0; // Reinicia o áudio para o início
        audio.volume = config.initialVolume; // Começa com o volume inicial
        audio.play();

        // Gradualmente aumenta o volume até o máximo
        const fadeInterval = setInterval(function() {
            audio.volume += 0.1;
            if (audio.volume >= config.maxVolume) {
                clearInterval(fadeInterval); // Para o intervalo quando atingir o volume máximo
            }
        }, 100); // Intervalo de 100ms para um fade in mais suave
    }

    // Configuração dos eventos de áudio para cada configuração
    audioConfigs.forEach(config => {
        const audio = document.getElementById(config.audioId);
        audio.loop = true;
        audio.volume = config.initialVolume;

        const audioContainer = document.getElementById(config.containerId);
        audioContainer.addEventListener('mouseover', function() {
            playAudioWithCrossfade(audio, config);
        });

        audioContainer.addEventListener('mouseout', function() {
            audio.pause();
            audio.currentTime = 0; // Reinicia o áudio para o início ao sair
        });
    });
});