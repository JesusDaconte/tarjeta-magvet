function iniciarCarruseles() {
    if (window.innerWidth >= 815) {
        // En pantallas grandes, mostrar todas las imágenes
        document.querySelectorAll('section.seccion div.imagenes').forEach(div => {
            const imgs = div.querySelectorAll('img');
            imgs.forEach(img => {
                img.style.display = 'block';
                img.classList.remove('activa');
            });
        });
        return;
    }

    document.querySelectorAll('section.seccion div.imagenes').forEach(div => {
        const imgs = div.querySelectorAll('img');
        if (imgs.length <= 1) return;

        // Configuración inicial
        let idx = 0;
        imgs.forEach((img, i) => {
            img.classList.remove('activa');
            img.style.display = 'block'; // Aseguramos que todas sean block
        });
        imgs[idx].classList.add('activa');

        // Intervalo para cambiar imágenes
        setInterval(() => {
            imgs[idx].classList.remove('activa');
            idx = (idx + 1) % imgs.length;
            imgs[idx].classList.add('activa');
        }, 3000); // Cambia cada 3 segundos
    });
}

// Iniciar carruseles al cargar y al redimensionar
window.addEventListener('DOMContentLoaded', iniciarCarruseles);
window.addEventListener('resize', iniciarCarruseles);
