const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

loginForm.addEventListener("submit", (submitEvent) => {
  // Prevent refresh
  submitEvent.preventDefault(); // Blocks default behaviors of the event

  const username = loginInput.value;
  console.log(username);
});
