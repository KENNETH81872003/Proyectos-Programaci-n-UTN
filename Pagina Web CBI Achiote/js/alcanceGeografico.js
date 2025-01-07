// Selecciona el elemento de la imagen
const imagenContenedor = document.getElementById('imagenZoom'); // Usa tu propio ID o clase

// Añade el evento para alternar el zoom al hacer clic
imagenContenedor.addEventListener('click', function () {
    this.classList.toggle('zoomed'); // Alterna la clase 'zoomed' para aplicar o quitar el zoom
});


