// documento.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Simula el envío del formulario (puedes integrar tu lógica de backend aquí)
    alert('Formulario enviado correctamente.');

    // Redirige a la página gracias.html después de un breve mensaje
    window.location.href = 'gracias.html';
});
