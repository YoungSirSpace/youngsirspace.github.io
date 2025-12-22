const urlParams = new URLSearchParams(location.search);
    const post = urlParams.get("post") || "";
    if (post) {
      fetch(`/posts/${post}.html`)
        .then(res => res.text())
        .then(html => {
          document.getElementById("article-container").innerHTML = html;
          const titleElem = document.querySelector("#article-container .post-title");
          if (titleElem) {
            document.title = titleElem.innerText + " | YoungSirSpace";
            document.getElementById("page-title").innerText = document.title;
          }

          initTOC();
        });
    }
    
    function initTOC() {
      const toc = document.getElementById("toc");
      const content = document.getElementById("article-container");
      if (!toc || !content) return;

      const headers = content.querySelectorAll("h2, h3");
      if (!headers.length) {
        toc.innerHTML = "<p style='color:#888;font-size:0.9rem;'>No content outline</p>";
        return;
      }

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

      window.addEventListener("scroll", () => {
        let current;
        headers.forEach(h => {
          if (h.getBoundingClientRect().top < 140) {
            current = h.id;
          }
        });
        toc.querySelectorAll("a").forEach(a => {
          a.classList.toggle("active", a.getAttribute("href") === "#" + current);
        });
      });
    }
