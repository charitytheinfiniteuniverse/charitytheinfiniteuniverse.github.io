//အဆုံးမရှိဆွဲ ဘေးတိုက် အစနေရာ
const scrollContainer = document.getElementById('infinite-scroll');

scrollContainer.addEventListener('scroll', () => {
    // အကယ်၍ အဆုံးထိ ဆွဲသွားရင် (ညာဘက်ဆုံး ရောက်သွားရင်)
    if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1) {
        // အစကို ချက်ချင်း ပြန်ပို့မယ်
        scrollContainer.scrollLeft = 1;
    }
    // အကယ်၍ ဘယ်ဘက်ဆုံး ရောက်သွားရင်
    else if (scrollContainer.scrollLeft <= 0) {
        // အဆုံးကို ပြန်ပို့မယ်
        scrollContainer.scrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth - 1;
    }
});
//အဆုံးမရှိဆွဲ ဘေးတိုက် အဆုံးနေရာ

