// Change welcome message on click
document.getElementById("welcome").addEventListener("click", function () {
  this.textContent = " Take care of your mind and body!";
});

// Mood tracker
const moodButtons = document.querySelectorAll(".mood-btn");
const moodResponse = document.getElementById("mood-response");

moodButtons.forEach(button => {
  button.addEventListener("click", () => {
    moodResponse.textContent = `You are feeling: ${button.textContent}. Remember, it's okay to feel this way. 💡`;
  });
});

// Toggle daily tip
document.getElementById("toggle-tip").addEventListener("click", function () {
  const tip = document.getElementById("tip");
  tip.style.display = (tip.style.display === "none") ? "block" : "none";
});

// Journal form validation
document.getElementById("journal-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const entry = document.getElementById("entry").value.trim();
  const message = document.getElementById("form-message");

  if (name === "" || entry === "") {
    message.textContent = " Please fill in all fields before submitting.";
    message.style.color = "red";
  } else {
    message.textContent = `Thank you ${name}, your thoughts have been saved.`;
    message.style.color = "green";
    this.reset();
  }
});
