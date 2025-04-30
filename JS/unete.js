document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("registroForm");

    formulario.addEventListener("submit", function(event) {
        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();

        // Expresión regular para validar el correo
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nombre === "" || email === "" || mensaje === "") {
            alert("❌ Todos los campos son obligatorios.");
            event.preventDefault(); // Evita el envío del formulario
            return;
        }

        if (!emailRegex.test(email)) {
            alert("❌ Introduce un correo electrónico válido.");
            event.preventDefault();
            return;
        }

        alert("✅ ¡Formulario enviado correctamente!");
    });
});
