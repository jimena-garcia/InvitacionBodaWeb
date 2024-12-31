// Inicializa WOW.js
new WOW({animateClass: 'animate__animated'}).init();


// Función para redirigir con una transición suave
function redirectToIndex() {
   // Agrega la clase fade-out al contenedor para aplicar la animación
   document.querySelector('.pre-page').classList.add('fade-out');
   
   // Espera a que termine la animación y luego redirige
   setTimeout(function () {
     window.location.href = 'Index.html';
   }, 1000); // Asegúrate de que esto coincide con la duración de la animación fade-out
}
