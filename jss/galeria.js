const modal = document.getElementById('modal');
    const imagenAmpliada = document.getElementById('imagen-ampliada');
    const cerrar = document.getElementById('cerrar');
    const imagenes = document.querySelectorAll('.imagen-galeria');

    imagenes.forEach(img => {
      img.addEventListener('click', () => {
        modal.style.display = 'flex';
        imagenAmpliada.src = img.src;
      });
    });

    cerrar.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });