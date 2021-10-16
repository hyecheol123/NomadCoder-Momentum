// Constant
// Weather API --> using the API key defined in weather.js / "temp-unit"
// greeting.js --> Use constants HIDDEN_CLASS_NAME and USERNAME_KEY
const SELECTED_CLASS_NAME = "selected";

// HTML Elements
const setupIcon = document.querySelector("#setup-wrapper #setup-icon");
const setupBox = document.querySelector("#setup-wrapper #setting-box");
const changeUsernameButton = document.querySelector("#setup-wrapper #setting-box #change-username");
const removeAllToDoButton = document.querySelector("#setup-wrapper #setting-box #remove-all-tasks");
const celciusButton = document.querySelector("#setup-wrapper #setting-box #temp-button #metric");
const fahrenheitButton = document.querySelector("#setup-wrapper #setting-box #temp-button #imperial");

// Color Unit by using saved preferrence
let unit = localStorage.getItem("temp-unit");
if(unit === null) {
  unit = "metric";
  localStorage.setItem("temp-unit", unit);
}
if(unit === "metric") {
  celciusButton.classList.add(SELECTED_CLASS_NAME);
} else {
  fahrenheitButton.classList.add(SELECTED_CLASS_NAME);
}

// Setup icon clicked
setupIcon.addEventListener("click", () => {
  if(setupBox.style.display === "flex") {
    setupBox.style.display = "none";
  } else {
    setupBox.style.display = "flex";
  }
})

// Change Username Button Clicked
changeUsernameButton.addEventListener("click", () =>{
  // Delete saved username
  localStorage.removeItem("username");

  // Call function to reload greeting;
  loadGreeting(); // greeting.js
});

// Remove All Task Button Clicked
removeAllToDoButton.addEventListener("click", () => {
  // Remove Saved TODO list
  localStorage.removeItem("todos");

  // Clear list of ToDos
  toDoArray = [];

  // Clear the list
  document.querySelector("#todo-list").innerHTML = "";
})

// Change Unit
celciusButton.addEventListener("click", () => {
  // Reset the preference
  unit = "metric";
  localStorage.setItem("temp-unit", unit);

  // Change display on setting panel
  celciusButton.classList.add("selected");
  fahrenheitButton.classList.remove("selected");

  // Recall the weather API to get updated temperature
  getWeather(); // defined in weather.js
});
fahrenheitButton.addEventListener("click", () => {
  // Reset the preference
  unit = "imperial";
  localStorage.setItem("temp-unit", unit);

  // Change display on setting panel
  celciusButton.classList.remove(SELECTED_CLASS_NAME);
  fahrenheitButton.classList.add(SELECTED_CLASS_NAME);

  // Recall the weather API to get updated temperature
  getWeather(); // defined in weather.js
});
