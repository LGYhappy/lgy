(function() {
    // 所有导航链接点击时平滑滚动到对应锚点
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    e.preventDefault();
                    targetEl.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            }
        });
    });

    // 小彩蛋：控制台输出
    console.log('%c 🐾 欢迎来到 LGY 的小世界！', 'font-size:16px; font-weight:600; color:#5B8DEF;');
    console.log('%c 一起玩耍吧 ~ ✨', 'font-size:13px; color:#4a5568;');
})();
