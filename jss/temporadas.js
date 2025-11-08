const botones = document.querySelectorAll('.btn-temporada');
    const listas = document.querySelectorAll('.lista-capitulos');

    botones.forEach(boton => {
      boton.addEventListener('click', () => {
       
        botones.forEach(b => b.classList.remove('activa'));
        listas.forEach(l => l.classList.remove('activa'));

        boton.classList.add('activa');
        const temporada = document.getElementById(boton.dataset.temp);
        temporada.classList.add('activa');
      });
    });