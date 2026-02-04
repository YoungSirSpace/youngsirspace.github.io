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
      // 1. 将 Markdown 转换为 HTML 并插入
      article.innerHTML = marked.parse(md);

      // 标题同步
      const h1 = article.querySelector("h1");
      if (h1) {
        document.title = `${h1.innerText} | YoungSirSpace`;
      }

      // 2. 代码高亮
      if (window.Prism) { // 建议加个判断防止报错
         Prism.highlightAll();
      }

      // 3. TOC 目录
      if (typeof initTOC === "function") {
        initTOC();
      }

      // === 新增代码：手动触发 MathJax 渲染 ===
      // 检查 MathJax 是否加载完成，如果加载了，就让它渲染 article 里的内容
      if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise([article]).then(() => {
            console.log('MathJax rendering complete');
        }).catch((err) => console.log('MathJax rendering failed: ' + err.message));
      }
      // =====================================

    })
    .catch(err => {
      console.error(err);
      article.innerHTML =
        "<p style='color:#888;'>Failed to load post.</p>";
    });
});
