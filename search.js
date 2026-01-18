/* --- SEARCH JS FULL START (ရှာဖွေမှု လုပ်ဆောင်ချက် အစ) --- */

/* ၁။ Overlay ပွင့်/ပိတ် လုပ်ဆောင်ချက် အစ */
function toggleSearchOverlay() {
    const overlay = document.getElementById('searchOverlay');
    const input = document.getElementById('searchInput');
    
    // active class ကို အဖွင့်/အပိတ် လုပ်ခြင်း
    overlay.classList.toggle('active');
    
    // Overlay ပွင့်လာလျှင် စာရိုက်ရန် cursor တန်းချပေးခြင်း
    if (overlay.classList.contains('active')) {
        setTimeout(() => input.focus(), 300);
    } else {
        // ပိတ်လိုက်လျှင် စာများကိုဖျက်ပြီး list ကို မူလအတိုင်း ပြန်ပြခြင်း
        input.value = ''; 
        applySearch(); 
    }
}
/* ၁။ Overlay ပွင့်/ပိတ် လုပ်ဆောင်ချက် အဆုံး */


/* ၂။ တကယ့် ရှာဖွေမှု ပြုလုပ်သော ပင်မလုပ်ဆောင်ချက် အစ */
function applySearch() {
    // ရိုက်လိုက်တဲ့စာကို ယူပြီး အသေးစာလုံးပြောင်းခြင်း
    let searchValue = document.getElementById('searchInput').value.toLowerCase();
    
    // class="search-item" လို့ ပေးထားတဲ့ link အားလုံးကို ယူခြင်း
    let items = document.getElementsByClassName('search-item');

    for (let i = 0; i < items.length; i++) {
        let text = items[i].textContent.toLowerCase();
        
        // စာသား ပါဝင်မှု ရှိမရှိ စစ်ဆေးခြင်း
        if (text.includes(searchValue)) {
            // စာသားတူလျှင် သင့်ရဲ့ မူရင်း Button ပုံစံအတိုင်း display: block နဲ့ ပြန်ပြမည်
            items[i].style.display = "block"; 
        } else {
            // မတူလျှင် ဖျောက်ထားမည်
            items[i].style.display = "none"; 
        }
    }
}
/* ၂။ တကယ့် ရှာဖွေမှု ပြုလုပ်သော လုပ်ဆောင်ချက် အဆုံး */

/* --- SEARCH JS FULL END (ရှာဖွေမှု လုပ်ဆောင်ချက် အဆုံး) --- */
