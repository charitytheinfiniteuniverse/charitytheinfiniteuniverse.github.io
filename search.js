/* --- SEARCH JS FULL START (အစ) --- */

/* ၁။ Search Bar အဖွင့်/အပိတ် လုပ်ဆောင်ချက် အစ */
function toggleSearchOverlay() {
    const container = document.querySelector('.search-container');
    const input = document.getElementById('searchInput');
    
    // Bar ကို ပေါ်လာအောင် (active class) ထည့်ခြင်း/ဖယ်ခြင်း
    container.classList.toggle('active');
    
    if (container.classList.contains('active')) {
        // ပွင့်လာလျှင် စာရိုက်ရန် Cursor တန်းချပေးမည်
        setTimeout(() => input.focus(), 400);
    } else {
        // ပိတ်လိုက်လျှင် ရိုက်ထားသောစာများဖျက်ပြီး အကုန်ပြန်ပြမည်
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
        
        // စာသားတူလျှင် ခလုတ်ကို ပြမည်၊ မတူလျှင် ဖျောက်မည်
        if (text.includes(searchValue)) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }
}
/* ၂။ ရှာဖွေမှု ပင်မလုပ်ဆောင်ချက် အဆုံး */

/* --- SEARCH JS FULL END (အဆုံး) --- */
