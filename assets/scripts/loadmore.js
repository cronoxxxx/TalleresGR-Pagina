document.getElementById('loadMoreButton').addEventListener('click', function() {
    let hiddenCards = document.getElementsByClassName('hidden');
    Array.from(hiddenCards).forEach(card => {
        card.classList.add('show__content-cards');
        card.classList.remove('hidden');
    });
    this.style.display = 'none'; // Ocultar el botÃ³n despuÃ©s de mostrar todas las tarjetas
});