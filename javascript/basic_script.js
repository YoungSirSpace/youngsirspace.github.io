document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("siteHeader");
  if (!header) return;

  const scrollTarget =
    document.querySelector(".main-column") || window;

  const getScrollTop = () =>
    scrollTarget === window
      ? window.scrollY
      : scrollTarget.scrollTop;

  scrollTarget.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", getScrollTop() > 100);
  });
});

  updateHeader();
  window.addEventListener("scroll", updateHeader);
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.post-card');
    
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            const link = card.querySelector('a');
            if (link && e.target !== link) {
                window.location.href = link.href;
            }
        });
    });
});
