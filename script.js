// Menú móvil y filtros de la página Comunidad.
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    });
  }

  const filterButtons = document.querySelectorAll("[data-filter]");
  const reviewCards = document.querySelectorAll(".review-card[data-category]");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      reviewCards.forEach((card) => {
        card.hidden = filter !== "all" && card.dataset.category !== filter;
      });
    });
  });

  // Añade aquí el enlace real de Instagram del fandom cuando esté definido.
  const instagramUrl = "";
  document.querySelectorAll(".instagram-link").forEach((link) => {
    if (instagramUrl) {
      link.href = instagramUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Añade el enlace real de Instagram del fandom en script.js para activar este botón.");
      });
    }
  });
});
