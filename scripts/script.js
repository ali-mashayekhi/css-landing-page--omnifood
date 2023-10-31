const headerEl = document.querySelector("header");

headerEl.querySelector(".btn-mobile-nav").addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});
