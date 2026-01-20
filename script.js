// --- JS အစ ---
const marquee = document.getElementById('marquee');

marquee.addEventListener('scroll', () => {
    // ပုံတစ်တွဲစာရဲ့ အရှည်ကို တွက်မယ်
    // ပုံ ၃ ပုံ + Gap ၃ ခု စုစုပေါင်း အကျယ်
    const itemWidth = 160 + 15; // ပုံအကျယ် + Gap
    const totalOriginalWidth = itemWidth * 3; // ပုံ ၃ ပုံစာ အရှည်

    // အကယ်၍ ဆွဲလိုက်လို့ မူလ ၃ ပုံစာ အရှည်ထက် ကျော်သွားရင်
    if (marquee.scrollLeft >= totalOriginalWidth) {
        // ချက်ချင်း မူလနေရာကို ပြန်ပို့ (ဒါပေမဲ့ ပုံတူတွေရှိနေလို့ ခုန်သွားတာကို မြင်ရမှာမဟုတ်ပါ)
        marquee.scrollLeft -= totalOriginalWidth;
    } 
    // ဘယ်ဘက်ကို အဆုံးထိ ဆွဲရင်လည်း Loop ပြန်ဖြစ်အောင်
    else if (marquee.scrollLeft <= 0) {
        marquee.scrollLeft += totalOriginalWidth;
    }
});
// --- JS အဆုံး ---
