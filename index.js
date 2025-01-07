// Función para hacer aparecer el contenido de la página con una transición suave
window.onload = function () {
  document.querySelector('.main-container').classList.add('visible');
}

document.addEventListener("DOMContentLoaded", function () {
  const countdownDate = new Date("February 1, 2025 00:00:00").getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Calcular el tiempo restante
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualizar los valores en la interfaz
    document.querySelector(".dias div").textContent = days < 10 ? `0${days}` : days;
    document.querySelector(".horas div").textContent = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".min div").textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seg div").textContent = seconds < 10 ? `0${seconds}` : seconds;

    // Si la cuenta regresiva ha llegado a 0
    if (distance < 0) {
      clearInterval(interval);
      document.getElementById("countdown").innerHTML = "¡El evento ha llegado!";
    }
  };

  // Actualizar la cuenta regresiva cada segundo
  const interval = setInterval(updateCountdown, 1000);
  updateCountdown(); // Llamar una vez inmediatamente para que se muestre el valor inicial
});


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



/*------------------------------------------
  = MUSIC
  -------------------------------------------*/
  try {
    var music = document.getElementById('music');
    var audioIsPlaying = false;
  

    var musicButton = document.getElementById('music-button');
  
    musicButton.addEventListener('click', function() {
      if (audioIsPlaying) {
        music.pause();
        audioIsPlaying = false;
      } else {
        music.play();
        audioIsPlaying = true;
      }
    });
  
  } catch (error) {
    console.error("Error al manejar la música:", error);
  }


  /* document.getElementById("confirmationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener los valores del formulario
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    const isAttending = document.getElementById("attendYes").checked; // Verifica si seleccionó "Sí"

    // Validar si el campo de nombre está vacío
    if (name === "") {
      alert("Por favor, ingresa tu nombre.");
      return;
    }

    // Crear el mensaje de WhatsApp basado en la elección
    let whatsappMessage = `Hola, soy ${name}, y `;
    if (isAttending) {
      whatsappMessage += "sí asistiré al evento.";
    } else {
      whatsappMessage += "no podré asistir al evento.";
    }

    // Si hay un mensaje adicional, agregarlo
    if (message) {
      whatsappMessage += ` ${message}`;
    }

    // Codificar el mensaje para que sea seguro para la URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Número de WhatsApp al que se enviará el mensaje (reemplazar con el número correcto)
    const phoneNumber = "+529991997958"; // Ejemplo de número de teléfono

    // Crear el enlace para WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirigir al enlace de WhatsApp
    window.open(whatsappUrl, "_blank");
  }); */




  

