/* --- Darkmode.js အစ --- */

const modeToggle = document.getElementById('modeToggle');

// လက်ရှိ Mode အလိုက် Emoji အမှန်ကို ပြသရန် Function
function setEmoji() {
  if (document.body.classList.contains('reading-mode')) {
    modeToggle.textContent = '📒';
  } else if (document.body.classList.contains('dark-mode')) {
    modeToggle.textContent = '🌙';
  } else {
    modeToggle.textContent = '☀️';
  }
}

// စာမျက်နှာ စဖွင့်ချိန်တွင် အရင်ရွေးထားသော Mode ရှိမရှိ စစ်ဆေးခြင်း
const savedTheme = localStorage.getItem('theme-mode');
if (savedTheme === 'reading') {
  document.body.classList.add('reading-mode');
} else if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
}
setEmoji();

// ခလုတ်နှိပ်သည့်အခါ Mode များ အလှည့်ကျပြောင်းလဲပုံ
modeToggle.addEventListener('click', () => {
  const body = document.body;

  if (!body.classList.contains('reading-mode') && !body.classList.contains('dark-mode')) {
    // ၁။ အဖြူရောင်မှ Reading Mode သို့ပြောင်းခြင်း
    body.classList.add('reading-mode');
    localStorage.setItem('theme-mode', 'reading');
  } 
  else if (body.classList.contains('reading-mode')) {
    // ၂။ Reading Mode မှ Dark Mode သို့ပြောင်းခြင်း
    body.classList.remove('reading-mode');
    body.classList.add('dark-mode');
    localStorage.setItem('theme-mode', 'dark');
  } 
  else {
    // ၃။ Dark Mode မှ အဖြူရောင် (Default) သို့ ပြန်သွားခြင်း
    body.classList.remove('dark-mode');
    localStorage.setItem('theme-mode', 'white');
  }

  setEmoji(); // Emoji ကို Update လုပ်ခြင်း
});

// Mode Toggle ခလုတ်၏ တည်နေရာနှင့် ပုံစံ (Top Right Fix)
Object.assign(modeToggle.style, {
  position: 'fixed',
  top: '10px',
  right: '10px',
  zIndex: '9999',
  fontSize: '1.5rem',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer'
});

/* --- Darkmode.js အဆုံး --- */
