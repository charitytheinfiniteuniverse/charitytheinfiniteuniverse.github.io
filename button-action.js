
document.addEventListener("DOMContentLoaded", function () {
  // ခလုပ်တွေကိုရွေး
  const buttons = document.querySelectorAll(".my-button");

  // ခလုပ်တိုင်းကို click event ထည့်
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Button clicked!");
    });
  });
});
