document.addEventListener('DOMContentLoaded', (event) => {
    const bar = document.getElementById('bar');
    let width = 65;
    const interval = setInterval(() => {
        width -= 1;
        bar.style.width = width + '%';
        if (width <= 0) {
            clearInterval(interval);
            setTimeout(() => {
                window.location.href = './final2.html';
            }); // Aguarda a transição de 1 segundo antes de redirecionar
        }
    }, 65);
});

document.querySelectorAll('.R').forEach(function(img) {
    img.addEventListener('click', function() {
        img.classList.remove('animation');
    });
});