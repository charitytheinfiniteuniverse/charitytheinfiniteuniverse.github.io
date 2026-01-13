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

// ၃။ စာလုံးအကြီးအသေး ချိန်ညှိရန်
let currentFontSize = 19;
const contentArea = document.getElementById('reading-content');

function changeFontSize(action) {
    const contentArea = document.getElementById('reading-content');
    if (!contentArea) return;

    if (action === 'large' && currentFontSize < 50) {
        currentFontSize += 2;
    } else if (action === 'small' && currentFontSize > 14) {
        currentFontSize -= 2;
    }
    
    contentArea.style.fontSize = currentFontSize + 'px';
    localStorage.setItem('userFontSize', currentFontSize);
}

// ၄။ ဖတ်လက်စစာမျက်နှာကို မှတ်ထားပေးရန်
function saveCurrentPage() {
    localStorage.setItem('lastReadTitle', document.title);
    localStorage.setItem('lastReadUrl', window.location.href);
}

// ၅။ ပြန်လည်ဖတ်ရှုရန် ခလုတ်ပြသခြင်း
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

// စာမျက်နှာ Load ဖြစ်ချိန်တွင် အလုပ်လုပ်ရန်
window.addEventListener('load', function() {
    // သိမ်းထားသော font size ကို ပြန်ဖော်ရန်
    const savedSize = localStorage.getItem('userFontSize');
    const contentArea = document.getElementById('reading-content');
    if (savedSize && contentArea) {
        currentFontSize = parseInt(savedSize);
        contentArea.style.fontSize = currentFontSize + 'px';
    }

    // လက်ရှိစာမျက်နှာကို သိမ်းဆည်းရန်
    saveCurrentPage();
    
    // ဖတ်လက်စ link ရှိက ပြရန်
    showLastReadLink();
});
