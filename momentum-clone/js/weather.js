// Constants
const API_KEY = "606e399fe4f87fd1ae393ef61c3fba84";

// HTML Elements
const weatherDiv = document.querySelector("#weather");

// Get current location of the user
navigator.geolocation.getCurrentPosition((position) => {
  // When Function success
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  // Check localStorage to retrieve user's unit preferrence
  let unit = localStorage.getItem('temp-unit');
  if(unit === null || (unit !== "metric" && unit != "imperial")) {
    unit = "metric";
    localStorage.setItem("temp-unit", unit);
  }
  
  // Fetch Weather
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${unit}`;
  fetch(url).then((response) => {
    if(response.ok) {
      // When request success
      return response.json();
    } else {
      throw new Error("Weather API Not Working");
    }
  })
  .then((weatherInfo) => {
    // Show weather information on the page
    weatherDiv.querySelector("#city").innerText = weatherInfo.name;
    weatherDiv.querySelector("#description").innerText = weatherInfo.weather[0].main;
    if(unit === "metric") {
      weatherDiv.querySelector("#temp").innerText = `${weatherInfo.main.temp}°C`;
    } else if(unit === "imperial") {
      weatherDiv.querySelector("#temp").innerText = `${weatherInfo.main.temp}°F`;
    } else {
      weatherDiv.querySelector("#temp").innerText = weatherInfo.main.temp;
      console.log("ERROR: WEATHER UNIT ERROR");
    }
    // Icon
    const weatherIconCode = weatherInfo.weather[0].icon;
    fetch(`https://openweathermap.org/img/wn/${weatherIconCode}.png`).then((response) => {
      if(response.ok) {
        return response.blob();
      } else {
        throw new Error("Weather Icon API not working");
      }
    }).then((blob) => {
      const weatherIcon = weatherDiv.querySelector("#icon");
      weatherIcon.src = URL.createObjectURL(blob);
      weatherIcon.classList.remove("hidden");
    })
  })
  .catch((error) => {
    // When error occurred (Network Error / Server Timeout / etc.)
    console.log(error);
  })
}, (error) => {
  // When function error
  console.log(error);
  alert("No Location Information! No Whether Information given");
})
