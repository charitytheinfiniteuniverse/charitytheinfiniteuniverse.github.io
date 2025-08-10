// Dark Mode Toggle Script
const modeToggle = document.getElementById('modeToggle');

// Set initial emoji
function setEmoji() {
  modeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
}

// Load from localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark-mode');
}
setEmoji();

// Toggle mode on click
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // ✅ CSS variable အတွက် အလိုက်သင့်အောင် update
  const mode = document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled';
  localStorage.setItem('dark-mode', mode);

  setEmoji();
});

// Fix button at top-right
modeToggle.style.position = 'fixed';
modeToggle.style.top = '10px';
modeToggle.style.right = '10px';
modeToggle.style.zIndex = '9999';
modeToggle.style.fontSize = '1.5rem';
modeToggle.style.background = 'transparent';
modeToggle.style.border = 'none';
modeToggle.style.cursor = 'pointer';
