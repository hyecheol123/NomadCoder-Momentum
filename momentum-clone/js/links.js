// HTML Element
const linkWrapper = document.querySelector("#link-wrapper");
const linkButton = document.querySelector("#link-button");

linkButton.addEventListener("click", () => {
  if(linkWrapper.style.display === "flex") {
    linkWrapper.style.display = "none";
  } else {
    linkWrapper.style.display = "flex";
  }
});
