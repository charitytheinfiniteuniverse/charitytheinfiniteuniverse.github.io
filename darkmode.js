// Check localStorage for saved mode
if (localStorage.getItem('mode') === 'dark') {
  document.body.classList.add('dark');
  document.getElementById('modeToggle').textContent = '🌙';
}

function toggleDarkMode() {
  const body = document.body;
  const button = document.getElementById('modeToggle');

  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    button.textContent = '🌙';
    localStorage.setItem('mode', 'dark');
  } else {
    button.textContent = '☀️';
    localStorage.setItem('mode', 'light');
  }
}
