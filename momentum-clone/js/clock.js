// HTML Elements
const clock = document.querySelector("h2#clock");

// Function to generate clock
function getClock() {
  const date = new Date();

  // Format numbers
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");

  clock.innerText = `${hour}:${minute}:${second}`;
}

// Load clock as soon as the website loads, and then load clock for every second.
getClock();
setInterval(getClock, 1000);
