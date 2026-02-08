// ၁။ မာတိကာ (Table of Contents) အဖွင့်အပိတ်
function toggleTOC() {
    const tocOverlay = document.getElementById('toc-overlay');
    if (tocOverlay) {
        const isVisible = tocOverlay.style.display === 'block';
        tocOverlay.style.display = isVisible ? 'none' : 'block';
    }
}

// ၂။ Setting Menu အဖွင့်အပိတ်
function toggleSetting() {
    const settingOverlay = document.getElementById('setting-overlay');
    if (settingOverlay) {
        const isVisible = settingOverlay.style.display === 'block';
        settingOverlay.style.display = isVisible ? 'none' : 'block';
    }
}

// ၃။ PDF ဖိုင်ဒေါင်းလော့ဆွဲရန် (အသစ်ထည့်လိုက်သည့်နေရာ)
function downloadPDF() {
    toggleSetting(); // Setting menu ကို အရင်ပိတ်ပါ (စာထဲမှာ မပေါ်စေရန်)
    setTimeout(() => {
        window.print(); // ၀.၅ စက္ကန့်လောက် စောင့်ပြီးမှ Print window ဖွင့်ပါ
    }, 500);
}

// ၄။ စာလုံးအကြီးအသေး ချိန်ညှိရန် (နံပါတ်ပြသခြင်းအပါအဝင်)
let currentFontSize = 19;

function changeFontSize(action) {
    const display = document.getElementById('font-size-display');
    const contentArea = document.getElementById('reading-content');
    if (!contentArea) return;

    if (action === 'large' && currentFontSize < 70) {
        currentFontSize += 1;
    } else if (action === 'small' && currentFontSize > 4) {
        currentFontSize -= 1;
    }
    
    // စာလုံးဆိုဒ်ကို ပြောင်းလဲခြင်း
    contentArea.style.fontSize = currentFontSize + 'px';
    
    // နံပါတ်ပြသသည့်နေရာရှိလျှင် Update လုပ်ခြင်း
    if (display) {
        display.innerText = currentFontSize;
    }
    
    localStorage.setItem('userFontSize', currentFontSize);
}

// ၅။ ဖတ်လက်စစာမျက်နှာကို မှတ်ထားပေးရန်
function saveCurrentPage() {
    localStorage.setItem('lastReadTitle', document.title);
    localStorage.setItem('lastReadUrl', window.location.href);
}

// ၆။ ပြန်လည်ဖတ်ရှုရန် ခလုတ်ပြသခြင်း
function showLastReadLink() {
    const lastTitle = localStorage.getItem('lastReadTitle');
    const lastUrl = localStorage.getItem('lastReadUrl');
    const lastReadContainer = document.getElementById('last-read-container');

    if (lastTitle && lastUrl && window.location.href !== lastUrl && lastReadContainer) {
        lastReadContainer.innerHTML = `
            <div style="background: #eadebc; border: 1px solid #443300; padding: 15px; margin: 10px; border-radius: 8px; text-align:center;">
                <p style="color: #443300; font-size: 14px; margin-bottom: 5px;">သင်နောက်ဆုံး ဖတ်လက်စအပိုင်း -</p>
                <a href="${lastUrl}" style="color: #443300; font-weight: bold; text-decoration: none;">
                   📖 ${lastTitle} သို့ ပြန်သွားရန်
                </a>
            </div>
        `;
    }
}

// စာမျက်နှာ Load ဖြစ်ချိန်တွင် အလုပ်လုပ်ရန် လုပ်ထားသည်
window.addEventListener('load', function() {
    const savedSize = localStorage.getItem('userFontSize');
    const contentArea = document.getElementById('reading-content');
    const display = document.getElementById('font-size-display');

    if (savedSize && contentArea) {
        currentFontSize = parseInt(savedSize);
        contentArea.style.fontSize = currentFontSize + 'px';
        if (display) {
            display.innerText = currentFontSize;
        }
    }

    saveCurrentPage();
    showLastReadLink();
});


function toggleReadingMode() {
    // Body မှာ focus-mode ဆိုတဲ့ class ကို အဖွင့်အပိတ် လုပ်ခြင်း
    document.body.classList.toggle('focus-mode');
    
    const fsBtn = document.getElementById('fs-btn');
    
    if (document.body.classList.contains('focus-mode')) {
        // Focus Mode ထဲရောက်ရင် ခလုတ်ပုံစံ ပြောင်းရန် (ဥပမာ - ပြန်ထွက်ဖို့ သင်္ကေတ)
        fsBtn.innerHTML = '✖'; 
        fsBtn.style.background = 'rgba(234, 222, 188, 0.2)'; // ပိုမှိန်သွားစေရန်
    } else {
        // ပုံမှန် Mode ပြန်ရောက်ရင်
        fsBtn.innerHTML = '⛶';
        fsBtn.style.background = 'rgba(234, 222, 188, 0.4)';
    }
}

// စာမျက်နှာ စဖွင့်တာနဲ့ အလုပ်လုပ်မည့်အပိုင်း
window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const tocLinks = document.querySelectorAll('.toc-list li a');

    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -70% 0px', // Screen ရဲ့ အပေါ်ပိုင်းနား ရောက်လာရင် ပိုသိသာစေရန်
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                tocLinks.forEach(link => {
                    link.classList.remove('active-chapter');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active-chapter');
                        localStorage.setItem('lastReadChapter', id);
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // အထူးပြင်ဆင်ချက် - စာမျက်နှာ အပေါ်ဆုံးရောက်နေရင် "နိဒါန်း" ကို Highlight ပြရန်
    window.addEventListener('scroll', () => {
        if (window.scrollY < 100) {
            tocLinks.forEach(link => link.classList.remove('active-chapter'));
            const introLink = document.querySelector('.toc-list li a[href="#intro"]');
            if (introLink) {
                introLink.classList.add('active-chapter');
                localStorage.setItem('lastReadChapter', 'intro');
            }
        }
    });

    // ဖတ်လက်စနေရာသို့ ပြန်သွားရန်
    const lastSavedChapter = localStorage.getItem('lastReadChapter');
    if (lastSavedChapter && lastSavedChapter !== 'intro') {
        setTimeout(() => {
            const targetElement = document.getElementById(lastSavedChapter);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500);
    }
});

