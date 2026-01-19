/* bookphoto.js အပိုင်း အစ */
const wrapper = document.getElementById('sliderWrapper');
let startX = 0;
let currentIndex = 0;

// လက်စတင်ထိတွေ့မှုကို မှတ်သားခြင်း
wrapper.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

// လက်လွှတ်လိုက်တဲ့အခါ ဘယ်ဘက်/ညာဘက် ဆွဲသလား စစ်ဆေးခြင်း
wrapper.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50) {
        // ဘယ်ဘက်ကိုဆွဲလျှင် (နောက်တစ်ပုံသွား)
        currentIndex++;
    } else if (diff < -50) {
        // ညာဘက်ကိုဆွဲလျှင် (ရှေ့ပုံပြန်သွား)
        currentIndex--;
    }

    // Infinity (ပုံ ၂ ပုံတည်းမို့ ၁ ကနေ ၂၊ ၂ ကနေ ၁ ပြန်ပတ်ခြင်း)
    if (currentIndex > 1) currentIndex = 0;
    if (currentIndex < 0) currentIndex = 1;

    // ပုံကို နေရာရွှေ့ပေးခြင်း
    wrapper.style.transform = `translateX(${currentIndex * -100}%)`;
});
/* bookphoto.js အပိုင်း အဆုံး */
