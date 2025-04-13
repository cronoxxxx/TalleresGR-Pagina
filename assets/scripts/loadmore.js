document.getElementById('loadMoreButton').addEventListener('click', function() {
    let hiddenCards = document.getElementsByClassName('hidden');
    
    // Mostrar todas las tarjetas ocultas
    Array.from(hiddenCards).forEach(card => {
        card.classList.add('show__content-cards');
        card.classList.remove('hidden');
    });
    
    // Ocultar el botón
    this.style.display = 'none';
    
    // Añadir espacio adicional después de las tarjetas en móvil
    if (window.innerWidth <= 767) {
        // Crear un espacio adicional después de las tarjetas
        const spacer = document.createElement('div');
        spacer.className = 'mobile-spacer';
        spacer.style.height = '100px'; // Ajusta esta altura según necesites
        
        // Insertar el espaciador después del contenedor de servicios
        const servicioContainer = document.getElementById('servicioContainer');
        servicioContainer.parentNode.insertBefore(spacer, servicioContainer.nextSibling);
        
        // O ajustar el margen del botón (que ahora está oculto pero sigue ocupando espacio)
        document.querySelector('.contactobtn__width').style.marginTop = '-50px';
    }
});