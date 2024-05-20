const puntos = document.querySelectorAll('.punto');
const contenedorTarjetas = document.querySelector('.contenedortarjetas');
let currentTranslation = 0;


puntos.forEach((punto, index) => {
    punto.addEventListener('click', function() {
        
        puntos.forEach(p => p.classList.remove('activo'));
        
        this.classList.add('activo');

        
        if (index === 1) {
            currentTranslation = -50;
        } else {
            currentTranslation = 0;
        }
        contenedorTarjetas.style.transform = `translateX(${currentTranslation}%)`;
    });
});
