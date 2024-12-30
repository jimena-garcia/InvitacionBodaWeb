// Función para hacer aparecer el contenido de la página con una transición suave
window.onload = function () {
  document.querySelector('.main-container').classList.add('visible');
}

// Función para la cuenta regresiva
function updateCountdown() {
  const eventDate = new Date("February 1, 2025 19:00:00").getTime();
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  if (timeLeft <= 0) {
    document.getElementById("countdown").innerHTML = "¡Es hoy! ¡Es hoy!";
    clearInterval(countdownInterval);
  } else {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
  // Añade la clase 'loaded' al body después de la carga completa
  document.body.classList.add('loaded');
});

// Animación de aparición al hacer scroll
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.section');
  const scrollPosition = window.scrollY + window.innerHeight * 0.8;

  sections.forEach((section) => {
    if (section.offsetTop < scrollPosition) {
      section.classList.add('visible');
    }
  });
});
