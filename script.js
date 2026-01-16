/* --- LocalStorage & Themes အစ --- */
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// သိမ်းထားတဲ့ preference ကို ပြန်ခေါ်မယ်
const currentTheme = localStorage.getItem('theme') || 'reading-mode';
body.classList.add(currentTheme);

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('reading-mode')) {
        body.classList.replace('reading-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.classList.replace('dark-mode', 'reading-mode');
        localStorage.setItem('theme', 'reading-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});
/* --- LocalStorage & Themes အဆုံး --- */

/* --- Greeting & Dhamma Quote အစ --- */
function updateGreeting() {
    const hour = new Date().getHours();
    const greetingMsg = document.getElementById('greetingMsg');
    const quotes = [
        "အတ္တာ ဟိ အတ္တနော နာထော (မိမိကိုယ်သာ ကိုးကွယ်ရာ)",
        "သဗ္ဗေ သင်္ခါရာ အနိစ္စာ (သင်္ခါရတရားတို့သည် မမြဲ)",
        "အပ္ပမာဒေန သမ္ပာဒေထ (မမေ့မလျော့သော သတိဖြင့် နေထိုင်ပါ)"
    ];
    
    if (hour < 12) greetingMsg.innerText = "မင်္ဂလာနံနက်ခင်းပါ။";
    else if (hour < 18) greetingMsg.innerText = "မင်္ဂလာညနေခင်းပါ။";
    else greetingMsg.innerText = "မင်္ဂလာညချမ်းပါ။";
    
    document.getElementById('dhammaQuote').innerText = quotes[Math.floor(Math.random() * quotes.length)];
}
updateGreeting();
/* --- Greeting & Dhamma Quote အဆုံး --- */

/* --- Infinite Carousel & Auto-Scroll အစ --- */
const carousels = document.querySelectorAll('.auto-scroll .infinite-carousel');

carousels.forEach(carousel => {
    // Content ကို ပွားလိုက်ခြင်းဖြင့် infinite ဖြစ်အောင်လုပ်မယ်
    carousel.innerHTML += carousel.innerHTML; 
    
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => isDown = false);
    carousel.addEventListener('mouseup', () => isDown = false);
    
    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });
});

function scrollToStart(id) {
    document.getElementById(id).scrollTo({ left: 0, behavior: 'smooth' });
}

function scrollToEnd(id) {
    const el = document.getElementById(id);
    el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
}
/* --- Infinite Carousel & Auto-Scroll အဆုံး --- */

/* --- Search & Spelling Suggestions အစ --- */
const searchInput = document.getElementById('searchInput');
const suggestions = document.getElementById('searchSuggestions');
const dataItems = ["စာမူ", "စာတမ်း", "စစ်တမ်း", "ဗီဒီယို", "အကြောင်းအရာ"];

searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    suggestions.innerHTML = "";
    if (value.length > 0) {
        const filtered = dataItems.filter(item => 
            item.toLowerCase().includes(value) || 
            levenshteinDistance(value, item.toLowerCase()) <= 1 // spelling အမှားပြင်ခြင်း
        );
        filtered.forEach(item => {
            const div = document.createElement('div');
            div.innerText = item;
            div.onclick = () => { searchInput.value = item; suggestions.innerHTML = ""; };
            suggestions.appendChild(div);
        });
    }
});

// Levenshtein Distance (Simple spelling correction logic)
function levenshteinDistance(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i-1) === a.charAt(j-1)) matrix[i][j] = matrix[i-1][j-1];
            else matrix[i][j] = Math.min(matrix[i-1][j-1]+1, matrix[i][j-1]+1, matrix[i-1][j]+1);
        }
    }
    return matrix[b.length][a.length];
}
/* --- Search & Spelling Suggestions အဆုံး --- */

/* --- Scroll Reveal & Lazy Load အစ --- */
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.tagName === 'IMG') {
                entry.target.classList.add('loaded');
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal, img').forEach(el => observer.observe(el));
/* --- Scroll Reveal & Lazy Load အဆုံး --- */

/* --- Scroll Buttons အစ --- */
document.getElementById('scrollTop').onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
document.getElementById('scrollBottom').onclick = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
/* --- Scroll Buttons အဆုံး --- */

/* --- Pull to Refresh အစ --- */
let touchStart = 0;
window.addEventListener('touchstart', e => { touchStart = e.touches[0].pageY; });
window.addEventListener('touchmove', e => {
    const touchMove = e.touches[0].pageY;
    if (window.scrollY === 0 && touchMove > touchStart + 100) {
        document.getElementById('pull-to-refresh').style.display = 'block';
        setTimeout(() => location.reload(), 1000);
    }
});
/* --- Pull to Refresh အဆုံး --- */
