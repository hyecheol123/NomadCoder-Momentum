const h1 = document.querySelector("div.hello:first-child h1");

h1.addEventListener("click", () => {console.log("title has clicked")});
h1.addEventListener("mouseenter", () => {console.log("Mouse is here")});
h1.addEventListener("mouseleave", () => {console.log("Mouse left")});

window.addEventListener("resize", () => {document.body.style.backgroundColor = "tomato";});
window.addEventListener("copy", () => {alert("Copied!!")});
window.addEventListener("offline", () => {alert("SOS no WIFI")});
window.addEventListener("online", () => {alert("ALL GOOD")});
