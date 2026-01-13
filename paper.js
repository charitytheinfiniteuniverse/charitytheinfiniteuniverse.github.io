// ၁။ မာတိကာ (Table of Contents) အဖွင့်အပိတ် လုပ်ဆောင်ချက်
// Overlay ကို ပိတ်တဲ့အခါမှာပါ ပိုပြီး ချောမွေ့အောင် Logic ထည့်ထားပါတယ်
const tocToggle = document.getElementById('toc-toggle');
const tocOverlay = document.getElementById('toc-overlay');

function toggleTOC() {
    if (tocOverlay) {
        const isVisible = tocOverlay.style.display === 'block';
        tocOverlay.style.display = isVisible ? 'none' : 'block';
    }
}

if (tocToggle) {
    tocToggle.addEventListener('click', toggleTOC);
}

// ၂။ စာလုံးအကြီးအသေး ချိန်ညှိရန် (Font Size Resizer)
// အနိမ့်ဆုံး 14px နဲ့ အမြင့်ဆုံး 32px ကြားပဲ ထားလို့ရအောင် ကန့်သတ်ပေးထားပါတယ်
let currentFontSize = 19;
const contentArea = document.getElementById('reading-content');

function changeFontSize(action) {
    if (!contentArea) return;

    if (action === 'large' && currentFontSize < 32) {
        currentFontSize += 2;
    } else if (action === 'small' && currentFontSize > 14) {
        currentFontSize -= 2;
    }
    
    contentArea.style.fontSize = currentFontSize + 'px';
    
    // User ရွေးထားတဲ့ size ကို မှတ်ထားစေချင်ရင် (Optional)
    localStorage.setItem('userFontSize', currentFontSize);
}

// စာမျက်နှာစဖွင့်ချိန်မှာ အရင်ရွေးထားတဲ့ size ရှိရင် ပြန်ဖတ်ဖို့
window.onload = function() {
    const savedSize = localStorage.getItem('userFontSize');
    if (savedSize && contentArea) {
        currentFontSize = parseInt(savedSize);
        contentArea.style.fontSize = currentFontSize + 'px';
    }
};

// ၄။ ဖတ်လက်စစာမျက်နှာကို မှတ်ထားပေးရန် (Last Read Feature)

// စာမျက်နှာ စဖွင့်တာနဲ့ လက်ရှိစာမျက်နှာရဲ့ အမည် (သို့မဟုတ်) Title ကို မှတ်မယ်
function saveCurrentPage() {
    const pageTitle = document.title; // စာမျက်နှာရဲ့ Title ကို ယူမယ်
    const pageUrl = window.location.href; // လက်ရှိ Link ကို ယူမယ်
    
    localStorage.setItem('lastReadTitle', pageTitle);
    localStorage.setItem('lastReadUrl', pageUrl);
}

// စာမျက်နှာ ဖွင့်လိုက်တိုင်း သိမ်းခိုင်းမယ်
saveCurrentPage();

// ၅။ ပြန်လည်ဖတ်ရှုရန် ခလုတ်ပြသခြင်း
// ဒါက index.html မှာ "ဖတ်လက်စသို့ ပြန်သွားရန်" ဆိုတဲ့ ခလုတ်လေး ပေါ်လာအောင် လုပ်တာပါ
function showLastReadLink() {
    const lastTitle = localStorage.getItem('lastReadTitle');
    const lastUrl = localStorage.getItem('lastReadUrl');
    const lastReadContainer = document.getElementById('last-read-container');

    // လက်ရှိရောက်နေတဲ့ page က last saved page နဲ့ တူနေရင် ခလုတ်မပြဘူး
    if (lastTitle && lastUrl && window.location.href !== lastUrl && lastReadContainer) {
        lastReadContainer.innerHTML = `
            <div style="background: #222; border: 1px solid #FFC107; padding: 10px; margin: 10px; border-radius: 8px;">
                <p style="color: #eee; font-size: 14px; margin-bottom: 5px;">သင်နောက်ဆုံး ဖတ်လက်စအပိုင်း -</p>
                <a href="${lastUrl}" style="color: #FFC107; font-weight: bold; text-decoration: none;">
                   📖 ${lastTitle} သို့ ပြန်သွားရန်
                </a>
            </div>
        `;
    }
}

// စာမျက်နှာ Load ဖြစ်ပြီးရင် ခလုတ်လေး ရှိမရှိ စစ်မယ်
window.addEventListener('load', showLastReadLink);
