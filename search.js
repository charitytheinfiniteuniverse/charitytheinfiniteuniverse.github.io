/* --- SEARCH JS FULL START (လုပ်ဆောင်ချက် အစ) --- */

/* ၁။ Search Bar အဖွင့်/အပိတ် လုပ်ဆောင်ချက် အစ */
function toggleSearchOverlay() {
    const container = document.querySelector('.search-container');
    const input = document.getElementById('searchInput');
    
    // Bar ကို ပေါ်လာအောင် (active class) လုပ်ခြင်း
    container.classList.toggle('active');
    
    if (container.classList.contains('active')) {
        // ပွင့်လာရင် စာရိုက်ရန် cursor တန်းချပေးမည်
        setTimeout(() => input.focus(), 400);
    } else {
        // ပိတ်လိုက်ရင် ရိုက်ထားသော စာများဖျက်ပြီး အကုန်ပြန်ပြမည်
        input.value = '';
        applySearch(); 
    }
}
/* ၁။ Search Bar အဖွင့်/အပိတ် လုပ်ဆောင်ချက် အဆုံး */


/* ၂။ ရှာဖွေမှု ပင်မလုပ်ဆောင်ချက် အစ */
function applySearch() {
    let searchValue = document.getElementById('searchInput').value.toLowerCase();
    let items = document.getElementsByClassName('search-item');

    for (let i = 0; i < items.length; i++) {
        let text = items[i].textContent.toLowerCase();
        
        if (text.includes(searchValue)) {
            items[i].style.display = "block"; // စာသားတူလျှင် ပြမည်
        } else {
            items[i].style.display = "none"; // မတူလျှင် ဖျောက်မည်
        }
    }
}
/* ၂။ ရှာဖွေမှု ပင်မလုပ်ဆောင်ချက် အဆုံး */

/* --- SEARCH JS FULL END (လုပ်ဆောင်ချက် အဆုံး) --- */
