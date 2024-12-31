 // Inicializa WOW.js
 new WOW().init();

 // Función para redirigir con una transición suave
 function redirectToIndex() {
   document.querySelector('.envelope-container').classList.add('fade-out');
   setTimeout(function () {
     window.location.href = 'index.html';
   }, 1000); // Tiempo en milisegundos, debe coincidir con la duración de la transición
 }

 // Función para hacer desaparecer los elementos de bienvenida
 function fadeOutWelcomeElements() {
   document.querySelector('.pre-page-content').classList.add('fade-out');
   document.querySelector('.wax-seal-container').classList.add('fade-out');
 }