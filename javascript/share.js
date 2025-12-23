document.addEventListener('DOMContentLoaded', function() {
    
    document.body.addEventListener('click', function(e) {
        var currentUrl = window.location.href;
        var encodedUrl = encodeURIComponent(currentUrl);
        var currentTitle = encodeURIComponent(document.title);

        if (e.target.closest('#share-twitter')) {
            e.preventDefault();
            var shareUrl = 'https://twitter.com/intent/tweet?text=' + currentTitle + '&url=' + encodedUrl;
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }

        else if (e.target.closest('#share-facebook')) {
            e.preventDefault();
            var shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodedUrl;
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }

        else if (e.target.closest('#share-wechat')) {
            e.preventDefault();
            
            var modal = document.getElementById('wechat-qr-modal');
            var qrImg = document.getElementById('wechat-qr-img');
            
            qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodedUrl;
            
            modal.style.display = 'flex';
        }
        
        else if (e.target.closest('#close-qr') || e.target.id === 'wechat-qr-modal') {
            e.preventDefault();
            document.getElementById('wechat-qr-modal').style.display = 'none';
        }

        else if (e.target.closest('#share-discord') || e.target.closest('#share-instagram')) {
            e.preventDefault();
            
            navigator.clipboard.writeText(currentUrl).then(function() {
                alert('Link copied to clipboard! You can now paste it in Discord or Instagram.');
            }).catch(function(err) {
                console.error('Could not copy text: ', err);
                alert('Failed to copy link. Please copy the URL from the address bar.');
            });
        }
    });
});
