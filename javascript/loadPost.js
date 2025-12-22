const params = new URLSearchParams(window.location.search);
const postName = params.get("post");

if (!postName) {
  document.getElementById("postContainer").innerHTML =
    "<p>Post not found.</p>";
} else {
  fetch(`/posts/${postName}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("postContainer").innerHTML = html;

      const h1 = document.querySelector(".post-title");
      if (h1) {
        document.title = `${h1.textContent} | YoungSirSpace`;
      }
    });
}
