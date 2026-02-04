// MathJax 全局配置
window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true
    },
    options: {
        // 忽略这些标签里的内容，不进行公式转换
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
    }
};

/**
 * 提供一个全局函数，方便在异步加载内容后手动触发渲染
 */
window.renderMathInElement = function(elementId) {
    const target = document.getElementById(elementId);
    if (window.MathJax && window.MathJax.typesetPromise && target) {
        window.MathJax.typesetPromise([target])
            .catch((err) => console.error('MathJax rendering failed:', err));
    }
};
