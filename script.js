// --- JS အစ ---
// script.js ထဲက အဟောင်းတွေကို အကုန်ဖျက်ပြီး ဒါကိုပဲ ထည့်ပါ

const scrollContainer = document.getElementById('infinite-scroll');

// ၁။ ပုံတွေကို ပတ်ချာလည်ဖြစ်အောင် ပွားယူခြင်း (Cloning)
// ပုံ ၃ ပုံပဲရှိရင် ၆ ပုံဖြစ်သွားအောင် လုပ်ပေးတာပါ
const items = [...scrollContainer.children];
items.forEach(item => {
    let clone = item.cloneNode(true);
    scrollContainer.appendChild(clone);
});

// ၂။ ဆွဲနေစဉ် အဆုံးရောက်မရောက် စစ်ဆေးခြင်း
scrollContainer.addEventListener('scroll', () => {
    // ပုံတွေက နှစ်ဆဖြစ်သွားလို့ scroll ရဲ့ တစ်ဝက်နေရာ (maxScroll) ကို ရှာတာပါ
    let maxScroll = scrollContainer.scrollWidth / 2; 
    
    if (scrollContainer.scrollLeft >= maxScroll) {
        // အဆုံး (တစ်ဝက်) ရောက်ရင် အစကို ချက်ချင်းပြန်ပို့
        scrollContainer.scrollLeft = 0.5;
    } else if (scrollContainer.scrollLeft <= 0) {
        // ဘယ်ဘက်အစွန်းရောက်ရင် တစ်ဝက်နေရာကို ပြန်ပို့
        scrollContainer.scrollLeft = maxScroll - 0.5;
    }
});
// --- JS အဆုံး ---
