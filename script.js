
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".mobile-toggle");
  const menu = document.querySelector(".menu");
  if(toggle && menu){
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", menu.classList.contains("open") ? "true" : "false");
    });
  }
  document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => menu?.classList.remove("open"));
  });
});
