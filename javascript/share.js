document.addEventListener('DOMContentLoaded', function() {
    
    document.body.addEventListener('click', function(e) {
        
        var modal = document.getElementById('wechat-qr-modal');
        var qrImg = document.getElementById('wechat-qr-img');
        
        var isWeChatBtn = e.target.closest('#share-wechat');
        var isInsideModal = e.target.closest('#wechat-qr-modal'); 
        var isCloseBtn = e.target.closest('#close-qr');

        if (isWeChatBtn) {
            e.preventDefault();
            
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
            } else {
                var currentUrl = encodeURIComponent(window.location.href);
                qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + currentUrl;

                modal.style.display = 'block';

                var btnRect = isWeChatBtn.getBoundingClientRect();
                var shareArea = isWeChatBtn.parentElement;
                var shareRect = shareArea.getBoundingClientRect();

                var centerX = (btnRect.left - shareRect.left) + (btnRect.width / 2);

                modal.style.left = centerX + 'px';
            }
            return;
        }

        if (isInsideModal) {
            if (isCloseBtn) {
                e.preventDefault();
                modal.style.display = 'none';
            }
            return;
        }
        
        if (modal && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
 
        var currentUrl = window.location.href;
        var encodedUrl = encodeURIComponent(currentUrl);
        var currentTitle = encodeURIComponent(document.title);

        if (e.target.closest('#share-twitter')) {
            e.preventDefault();
            var shareUrl = 'https://twitter.com/intent/tweet?text=' + currentTitle + '&url=' + encodedUrl;
            window.open(shareUrl, '_blank', 'width=800,height=600');
        }

        else if (e.target.closest('#share-facebook')) {
            e.preventDefault();
            var shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodedUrl;
            window.open(shareUrl, '_blank', 'width=800,height=600');
        }

        else if (e.target.closest('#share-discord') || e.target.closest('#share-instagram')) {
            e.preventDefault();
            navigator.clipboard.writeText(currentUrl).then(function() {
                alert('Link copied to clipboard!');
            }).catch(function(err) {
                console.error('Failed to copy: ', err);
            });
        }
    });
});
