// Load saved mode if exists
if (localStorage.getItem('mode') === 'dark') {
  document.body.classList.add('dark');
  document.getElementById('modeToggle').textContent = '🌙';
}

function toggleDarkMode() {
  const body = document.body;
  const btn = document.getElementById('modeToggle');

  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    btn.textContent = '🌙';
    localStorage.setItem('mode', 'dark');
  } else {
    btn.textContent = '☀️';
    localStorage.setItem('mode', 'light');
  }
}
