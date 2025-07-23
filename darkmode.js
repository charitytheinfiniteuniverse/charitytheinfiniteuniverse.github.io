// darkmode.js
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const btn = document.getElementById("modeToggle");
  if (document.body.classList.contains("dark-mode")) {
    btn.textContent = "🌙";
  } else {
    btn.textContent = "☀️";
  }
}
