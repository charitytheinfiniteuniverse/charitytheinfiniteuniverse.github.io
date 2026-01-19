/* bookphoto.js အပိုင်း အစ */
const wrapper = document.getElementById('sliderWrapper');
const box = document.getElementById('sliderBox');
let startX = 0;
let currentIndex = 0;
let isDragging = false;

// Touch (ဖုန်းအတွက်)
box.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

box.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    const endX = e.changedTouches[0].clientX;
    handleSwipe(startX, endX);
    isDragging = false;
});

// Mouse (Desktop စမ်းသပ်ရန်)
box.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    isDragging = true;
});

window.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    handleSwipe(startX, e.clientX);
    isDragging = false;
});

function handleSwipe(s, e) {
    const diff = s - e;
    if (Math.abs(diff) > 50) { // ၅၀ ပစ်ဇယ်ထက်ပိုဆွဲမှ အလုပ်လုပ်မည်
        if (diff > 0) currentIndex++; // ဘယ်ဘက်ဆွဲ (ရှေ့တိုး)
        else currentIndex--; // ညာဘက်ဆွဲ (နောက်ဆုတ်)

        // Infinity Loop (၀ မှ ၁၊ ၁ မှ ၀ တစ်လှည့်စီပတ်ရန်)
        if (currentIndex > 1) currentIndex = 0;
        if (currentIndex < 0) currentIndex = 1;

        wrapper.style.transform = `translateX(${currentIndex * -100}%)`;
    }
}
/* bookphoto.js အပိုင်း အဆုံး */
