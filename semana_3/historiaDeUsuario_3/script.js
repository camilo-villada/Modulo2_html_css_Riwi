
document.addEventListener("DOMContentLoaded", () => {

    // Mensaje de bienvenida
    const mensajeBienvenida = document.getElementById("mensaje-bienvenida");
    mensajeBienvenida.textContent = "👋 Bienvenido a mi portafolio";

    // Cambiar texto en "Sobre mí"
    const btnCambiarTexto = document.getElementById("btn-cambiar-texto");
    const textoSobreMi = document.getElementById("texto-sobre-mi") 
        || document.querySelector("#sobre-mi p");

    btnCambiarTexto.addEventListener("click", () => {
        textoSobreMi.textContent =
            "Soy un desarrollador en formación, enfocado en aprender buenas prácticas, crear interfaces limpias y seguir creciendo profesionalmente.";
    });

    // Mostrar / ocultar contenido extra
    const btnToggle = document.getElementById("btn-toggle");
    const contenidoExtra = document.getElementById("contenido-extra");

    btnToggle.addEventListener("click", () => {
        if (contenidoExtra.style.display === "none" || contenidoExtra.style.display === "") {
            contenidoExtra.style.display = "block";
            btnToggle.textContent = "Ocultar proyectos";
        } else {
            contenidoExtra.style.display = "none";
            btnToggle.textContent = "Ver más proyectos";
        }
    });

});
