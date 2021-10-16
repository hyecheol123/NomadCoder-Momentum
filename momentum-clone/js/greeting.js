// Constants
const HIDDEN_CLASS_NAME = "hidden";
const USERNAME_KEY = "username";

// HTML Elements
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// When submit event occurs
loginForm.addEventListener("submit", (submitEvent) => {
  // Prevent refresh
  submitEvent.preventDefault(); // Blocks default behaviors of the event

  // Hide form and show greeting message
  loginForm.classList.add(HIDDEN_CLASS_NAME); // Hide form
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); // Save Username
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASS_NAME); // Show greting message
  loginInput.value = "";
});

function loadGreeting() {
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  if (savedUsername === null) {
    // If saved username does not exist, loginForm should display
    // Show the loginForm
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    greeting.classList.add(HIDDEN_CLASS_NAME);
  } else {
    // Display greeting message with saved username
    greeting.innerText = `Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASS_NAME);
    loginForm.classList.add(HIDDEN_CLASS_NAME);
  }
}

loadGreeting();
