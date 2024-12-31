 // Inicializa WOW.js
 new WOW().init();

 // Función para redirigir con una transición suave
 function redirectToIndex() {
   document.querySelector('.envelope-container').classList.add('fade-out');
   setTimeout(function () {
     window.location.href = 'Index.html';
   }, 1000); // Tiempo en milisegundos, debe coincidir con la duración de la transición
 }

 