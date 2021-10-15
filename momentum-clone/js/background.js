// Constants
const IMAGE_CATEGORY = ["nasa", "water", "aviation", "tech", "food"];
const IMAGE_BASE_URL = "https://source.unsplash.com/daily";

// Choose image and download
fetch(`${IMAGE_BASE_URL}?${IMAGE_CATEGORY[Math.floor(Math.random() * IMAGE_CATEGORY.length)]}`)
.then((response) => {
  if (response.ok) {
    // When request success (Download success)
    return response.blob();
  } else {
    throw new Error("Image Download Error");
  }
})
.then((blob) => {
  // // Code from NomadCoder
  // // Create img element
  // const bgImage = document.createElement("img");
  // bgImage.src = URL.createObjectURL(blob);

  // document.body.appendChild(bgImage);


  // Changing background-image URL instead (Change CSS Properties of document)
  document.querySelector("html").style.backgroundImage = `URL('${URL.createObjectURL(blob)}')`;
})
.catch((error) => {
  // When error occurred (Network Error / Server Timeout / etc.)
  console.log(error);
})
