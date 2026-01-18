/* --- SEARCH JS FULL START (အစ) --- */

/* ၁။ Search ပွင့်/ပိတ် လုပ်ဆောင်ချက် အစ */
function toggleSearchOverlay() {
    const overlay = document.getElementById('searchOverlay');
    const container = document.querySelector('.search-container');
    const input = document.getElementById('searchInput');
    
    // Toggle လုပ်ခြင်း
    overlay.classList.toggle('active');
    container.classList.toggle('active');
    
    // ပွင့်လာရင် စာရိုက်ကွက်ကို focus လုပ်ခြင်း
    if (overlay.classList.contains('active')) {
        setTimeout(() => input.focus(), 300);
    } else {
        // ပိတ်လိုက်ရင် စာသားဖျက်ပြီး အကုန်ပြန်ပြခြင်း
        input.value = '';
        applySearch(); 
    }
}
/* ၁။ Search ပွင့်/ပိတ် လုပ်ဆောင်ချက် အဆုံး */


/* ၂။ တကယ့် ရှာဖွေမှု ပြုလုပ်သော လုပ်ဆောင်ချက် အစ */
function applySearch() {
    let searchValue = document.getElementById('searchInput').value.toLowerCase();
    let items = document.getElementsByClassName('search-item');

    for (let i = 0; i < items.length; i++) {
        let text = items[i].textContent.toLowerCase();
        
        if (text.includes(searchValue)) {
            items[i].style.display = "block"; // စာတူလျှင် ခလုတ်ကို ပြမည်
        } else {
            items[i].style.display = "none"; // မတူလျှင် ခလုတ်ကို ဖျောက်မည်
        }
    }
}
/* ၂။ တကယ့် ရှာဖွေမှု ပြုလုပ်သော လုပ်ဆောင်ချက် အဆုံး */

/* --- SEARCH JS FULL END (အဆုံး) --- */
