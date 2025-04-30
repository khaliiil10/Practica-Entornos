// Reto de Flexiones
let contadorFlexiones = 0;
let tiempoFlexiones = 30;
let intervalFlexiones;
const botonFlexiones = document.getElementById("boton-flexiones");
const contadorElemento = document.getElementById("contador");
const tiempoElemento = document.getElementById("tiempo-restante");

botonFlexiones.addEventListener("click", () => {
    if (tiempoFlexiones > 0) {
        contadorFlexiones++;
        contadorElemento.textContent = contadorFlexiones;
        if (!intervalFlexiones) {
            intervalFlexiones = setInterval(() => {
                tiempoFlexiones--;
                tiempoElemento.textContent = `Tiempo restante: ${tiempoFlexiones}s`;
                if (tiempoFlexiones <= 0) clearInterval(intervalFlexiones);
            }, 1000);
        }
    }
});

// Desafío de Saltos
let contadorSaltos = 0;
let tiempoSaltos = 20;
let intervalSaltos;
const botonSaltos = document.getElementById("boton-saltos");
const contadorSaltosElemento = document.getElementById("contador-saltos");
const tiempoSaltosElemento = document.getElementById("tiempo-saltos");

botonSaltos.addEventListener("click", () => {
    if (tiempoSaltos > 0) {
        contadorSaltos++;
        contadorSaltosElemento.textContent = contadorSaltos;
        if (!intervalSaltos) {
            intervalSaltos = setInterval(() => {
                tiempoSaltos--;
                tiempoSaltosElemento.textContent = `Tiempo restante: ${tiempoSaltos}s`;
                if (tiempoSaltos <= 0) clearInterval(intervalSaltos);
            }, 1000);
        }
    }
});
