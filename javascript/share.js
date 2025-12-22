document.addEventListener("DOMContentLoaded", () => {
  const pageUrl = encodeURIComponent(window.location.href);
  const pageTitle = encodeURIComponent(document.title);

  const twitter = document.getElementById("share-twitter");
  const facebook = document.getElementById("share-facebook");

  if (twitter) {
    twitter.href = `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`;
  }
  if (facebook) {
    facebook.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
  }
});
