document.addEventListener('DOMContentLoaded', () => {
    // ၁။ Scroll Reveal Animation
    const reveals = document.querySelectorAll('.scroll-reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                revealObserver.unobserve(entry.target); // တစ်ခါပဲ animate လုပ်ရန်
            }
        });
    }, { threshold: 0.1 }); // 10% မြင်ရရင် animate လုပ်ရန်

    reveals.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        revealObserver.observe(el);
    });

    // ၂။ Handle Mobile Nav Active State
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            document.querySelector('.nav-item.active').classList.remove('active');
            this.classList.add('active');
        });
    });
});
