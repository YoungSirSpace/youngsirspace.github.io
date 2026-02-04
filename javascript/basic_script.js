document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("siteHeader");
  if (!header) return;

  const mainColumn = document.querySelector(".main-column");

  const scrollTarget = mainColumn || window;

  const getScrollTop = () => {
    return scrollTarget === window
      ? window.scrollY
      : scrollTarget.scrollTop;
  };

  scrollTarget.addEventListener("scroll", () => {
    if (getScrollTop() > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
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
