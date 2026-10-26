
document.addEventListener("DOMContentLoaded", () => {

  // MENÚ PARA TELÉFONOS
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");
  const enlaces = document.querySelectorAll("#nav a");

  function cerrarMenu() {
    nav.classList.remove("activo");
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Abrir menú");
  }

  menuBtn.addEventListener("click", () => {
    const abierto = nav.classList.toggle("activo");

    menuBtn.textContent = abierto ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", String(abierto));
    menuBtn.setAttribute(
      "aria-label",
      abierto ? "Cerrar menú" : "Abrir menú"
    );
  });

  // CERRAR MENÚ AL ELEGIR UNA SECCIÓN
  enlaces.forEach(enlace => {
    enlace.addEventListener("click", cerrarMenu);
  });

  // CERRAR MENÚ CON ESCAPE
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
      cerrarMenu();
    }
  });

  // ACTUALIZAR EL AÑO AUTOMÁTICAMENTE
  const anio = document.getElementById("anio");

  if (anio) {
    anio.textContent = new Date().getFullYear();
  }

});
