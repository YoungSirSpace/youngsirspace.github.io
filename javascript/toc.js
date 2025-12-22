document.addEventListener("DOMContentLoaded", () => {
  const toc = document.getElementById("toc");
  const content = document.getElementById("postContent");

  if (!toc || !content) return;

  const headers = content.querySelectorAll("h2, h3");
  if (!headers.length) return;

  const ul = document.createElement("ul");

  headers.forEach((h, i) => {
    if (!h.id) h.id = "heading-" + i;

    const li = document.createElement("li");
    li.classList.add(h.tagName.toLowerCase());

    const a = document.createElement("a");
    a.href = "#" + h.id;
    a.textContent = h.textContent;

    li.appendChild(a);
    ul.appendChild(li);
  });

  toc.appendChild(ul);

  const links = toc.querySelectorAll("a");

  window.addEventListener("scroll", () => {
    let currentId = null;

    headers.forEach(h => {
      if (h.getBoundingClientRect().top < 140) {
        currentId = h.id;
      }
    });

    links.forEach(a => {
      a.classList.toggle(
        "active",
        a.getAttribute("href") === "#" + currentId
      );
    });
  });
});
