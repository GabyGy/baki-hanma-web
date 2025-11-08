const form = document.getElementById('form-contacto');
        const mensaje = document.getElementById('mensaje-form');

        form.addEventListener('submit', e => {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const msg = document.getElementById('mensaje').value.trim();

            if (nombre && email && msg) {
                mensaje.textContent = "Mensaje enviado correctamente";
                mensaje.style.color = "rgba(0, 151, 0, 1)";
                form.reset();
            } else {
                mensaje.textContent = "Error, completá todos los campos";
                mensaje.style.color = "#f33";
            }
        });