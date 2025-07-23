function toggleDarkMode() {
  const body = document.body;
  const button = document.getElementById("modeToggle");

  body.classList.toggle("dark-mode");

  // Save mode preference
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("mode", "dark");
    button.textContent = "🌙";
  } else {
    localStorage.setItem("mode", "light");
    button.textContent = "☀️";
  }
}

// Load saved mode on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("mode");
  const button = document.getElementById("modeToggle");

  if (savedMode === "dark") {
    document.body.classList.add("dark-mode");
    button.textContent = "🌙";
  } else {
    button.textContent = "☀️";
  }
});
