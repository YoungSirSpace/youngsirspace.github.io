document.addEventListener("DOMContentLoaded", () => {
  const pageUrl = encodeURIComponent(window.location.href);
  const pageTitle = encodeURIComponent(document.title);

  const twitterBtn = document.getElementById("share-twitter");
  const facebookBtn = document.getElementById("share-facebook");

  if (twitterBtn) {
    const twitterUrl =
      `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`;
    twitterBtn.setAttribute("href", twitterUrl);
  }
});

  if (facebookBtn) {
      const facebookUrl =
        `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
      facebookBtn.setAttribute("href", facebookUrl);
    });
  }
});
