document.addEventListener("DOMContentLoaded", () => {
  const article = document.getElementById("post-body");
  if (!article) {
    console.error("[loadPost] #post-body not found");
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const post = params.get("post");

  if (!post) {
    article.innerHTML = "<p style='color:#888;'>No post specified.</p>";
    return;
  }

  fetch(`/posts/${post}.md`)
    .then(res => {
      if (!res.ok) throw new Error("Post not found");
      return res.text();
    })
    .then(md => {
      article.innerHTML = marked.parse(md);

      // 标题同步
      const h1 = article.querySelector("h1");
      if (h1) {
        document.title = `${h1.innerText} | YoungSirSpace`;
      }

      // 高亮
      Prism.highlightAll();

      // TOC
      if (typeof initTOC === "function") {
        initTOC();
      }
    })
    .catch(err => {
      console.error(err);
      article.innerHTML =
        "<p style='color:#888;'>Failed to load post.</p>";
    });
});
