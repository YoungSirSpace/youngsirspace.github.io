document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(e) {
        var twitterBtn = e.target.closest('#share-twitter');
        
        if (twitterBtn) {
            e.preventDefault();
            var currentUrl = encodeURIComponent(window.location.href);
            var currentTitle = encodeURIComponent(document.title);
            var shareUrl = 'https://twitter.com/intent/tweet?text=' + currentTitle + '&url=' + currentUrl;
            window.open(shareUrl, '_blank', 'width=600,height=400');
            return;
        }
        var facebookBtn = e.target.closest('#share-facebook');
        
        if (facebookBtn) {
            e.preventDefault();
            
            var currentUrl = encodeURIComponent(window.location.href);
            var shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + currentUrl;
            
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
    });
});
