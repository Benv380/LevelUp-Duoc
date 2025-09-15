//Actualizar sidebar activo al cambiar de slide
const carousel = document.getElementById('gameCarousel');
const sidebarItems = document.querySelectorAll('.sidebar-game');

carousel.addEventListener('slide.bs.carousel', function (event) {
    sidebarItems.forEach(item => item.classList.remove('active'));
    sidebarItems[event.to].classList.add('active');
});