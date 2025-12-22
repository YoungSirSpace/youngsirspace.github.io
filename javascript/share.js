document.addEventListener('DOMContentLoaded', function() {
  var twitterBtn = document.getElementById('share-twitter');
  var facebookBtn = document.getElementById('share-facebook');

  twitterBtn.addEventListener('click', function(e) {
    e.preventDefault();
    var currentUrl = encodeURIComponent(window.location.href);
    var currentTitle = encodeURIComponent(document.title);
    var shareUrl = 'https://twitter.com/intent/tweet?text=' + currentTitle + '&url=' + currentUrl;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  });

  facebookBtn.addEventListener('click', function(e) {
    e.preventDefault();
    var currentUrl = encodeURIComponent(window.location.href);
    var shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + currentUrl;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  });
});
