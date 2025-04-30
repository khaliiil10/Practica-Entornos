document.addEventListener("DOMContentLoaded", function () {
    const filtro = document.getElementById("filtro-productos");
    const productos = document.querySelectorAll(".producto");

    if (!filtro || productos.length === 0) {
        console.error("Error: No se encontró el filtro o no hay productos.");
        return;
    }

    filtro.addEventListener("change", function () {
        const categoriaSeleccionada = filtro.value;

        productos.forEach(producto => {
            const categoria = producto.dataset.categoria; // Acceso optimizado a data-categoria

            producto.style.display = (categoriaSeleccionada === "todos" || categoria === categoriaSeleccionada) 
                ? "block" 
                : "none";
        });
    });
});
