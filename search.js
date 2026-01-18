/* --- SEARCH JS FULL START (ရှာဖွေမှု လုပ်ဆောင်ချက် အစ) --- */

/* ၁။ Overlay ပွင့်/ပိတ် လုပ်ဆောင်ချက် အစ */
function toggleSearchOverlay() {
    const overlay = document.getElementById('searchOverlay');
    const input = document.getElementById('searchInput');
    
    overlay.classList.toggle('active');
    
    // ပွင့်လာလျှင် စာရိုက်ရန် အဆင်သင့်ဖြစ်အောင် cursor ချပေးခြင်း
    if (overlay.classList.contains('active')) {
        setTimeout(() => input.focus(), 300);
    } else {
        input.value = ''; // ပိတ်လိုက်လျှင် ရိုက်ထားသော စာများဖျက်ရန်
        applySearch(); // List ကို မူလအတိုင်း ပြန်ပြရန်
    }
}
/* ၁။ Overlay ပွင့်/ပိတ် လုပ်ဆောင်ချက် အဆုံး */


/* ၂။ တကယ့် ရှာဖွေမှု ပြုလုပ်သော လုပ်ဆောင်ချက် အစ */
function applySearch() {
    let searchValue = document.getElementById('searchInput').value.toLowerCase();
    // class="search-item" ပေးထားသော ခလုတ်များကို လိုက်ရှာမည်
    let items = document.getElementsByClassName('search-item');

    for (let i = 0; i < items.length; i++) {
        let text = items[i].textContent.toLowerCase();
        
        if (text.includes(searchValue)) {
            items[i].style.display = ""; // စာသားတူရင် ပြမည်
        } else {
            items[i].style.display = "none"; // မတူရင် ဖျောက်မည်
        }
    }
}
/* ၂။ တကယ့် ရှာဖွေမှု ပြုလုပ်သော လုပ်ဆောင်ချက် အဆုံး */

/* --- SEARCH JS FULL END (ရှာဖွေမှု လုပ်ဆောင်ချက် အဆုံး) --- */
