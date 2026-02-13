document.addEventListener("DOMContentLoaded", () => {
  // 1. 获取 Header 元素
  const header = document.getElementById("siteHeader");
  if (!header) return;

  // 2. 定义滚动监听函数
  const handleScroll = () => {
    // 获取当前滚动距离 (兼容不同浏览器)
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    // 设定阈值：滚动超过 50px 后触发效果
    // toggle(class, condition): 当条件为 true 添加类，为 false 移除类
    header.classList.toggle("scrolled", scrollTop > 50);
  };

  // 3. 监听滚动事件
  window.addEventListener("scroll", handleScroll);
  
  // 4. 初始化检查 (防止刷新页面时停留在中间，样式未加载)
  handleScroll();
});

// 下面是你原有的卡片点击逻辑，保持不变即可
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.post-card');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            const link = card.querySelector('a');
            if (link && e.target !== link) {
                window.location.href = link.href;
            }
        });
    });
});
