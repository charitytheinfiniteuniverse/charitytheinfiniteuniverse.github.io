/* --- SEARCH JS FULL START (အစ) --- */

/* ၁။ Overlay ပွင့်/ပိတ် လုပ်ဆောင်ချက် အစ */
function toggleSearchOverlay() {
    const overlay = document.getElementById('searchOverlay');
    const input = document.getElementById('searchInput');
    const mainContent = document.querySelector('main');
    
    overlay.classList.toggle('active');
    
    if (overlay.classList.contains('active')) {
        // Overlay ပွင့်လာရင် Main ကို Overlay ရဲ့အပေါ်ကို နည်းနည်းတင်ပေးမှ လင့်တွေကို နှိပ်လို့ရမှာပါ
        mainContent.style.position = "relative";
        mainContent.style.zIndex = "1600"; 
        setTimeout(() => input.focus(), 300);
    } else {
        // ပိတ်လိုက်ရင် မူလအတိုင်း ပြန်ထားမယ်
        mainContent.style.zIndex = "";
        input.value = ''; 
        applySearch(); 
    }
}
/* ၁။ Overlay ပွင့်/ပိတ် လုပ်ဆောင်ချက် အဆုံး */

/* ၂။ ရှာဖွေမှု ပင်မလုပ်ဆောင်ချက် အစ */
function applySearch() {
    let searchValue = document.getElementById('searchInput').value.toLowerCase();
    let items = document.getElementsByClassName('search-item');

    for (let i = 0; i < items.length; i++) {
        let text = items[i].textContent.toLowerCase();
        
        if (text.includes(searchValue)) {
            items[i].style.display = "block"; 
        } else {
            items[i].style.display = "none"; 
        }
    }
}
/* ၂။ ရှာဖွေမှု ပင်မလုပ်ဆောင်ချက် အဆုံး */

/* --- SEARCH JS FULL END (အဆုံး) --- */
