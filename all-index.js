document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchBtn');
    const searchWrapper = document.getElementById('searchWrapper');
    const bookSearch = document.getElementById('bookSearch');

    // ခလုတ်နှိပ်လျှင် Search Box ပေါ်ရန်
    searchBtn.addEventListener('click', () => {
        searchWrapper.classList.toggle('hidden');
        if (!searchWrapper.classList.contains('hidden')) {
            bookSearch.focus();
        }
    });

    // စာအုပ်ရှာဖွေခြင်း (Real-time Search)
    bookSearch.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.book-card');
        
        cards.forEach(card => {
            const title = card.querySelector('h4').innerText.toLowerCase();
            card.style.display = title.includes(val) ? "block" : "none";
        });
    });
});
