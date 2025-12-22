document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("siteHeader");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
