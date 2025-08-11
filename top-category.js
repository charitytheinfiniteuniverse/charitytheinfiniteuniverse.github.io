

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".top-category a");

  links.forEach(link => {
    link.addEventListener("click", event => {
      // Prevent default if needed
      // event.preventDefault();

      // Example: Highlight clicked link
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      // You can add more behavior here
      console.log(`Clicked on ${link.textContent}`);
    });
  });
});
