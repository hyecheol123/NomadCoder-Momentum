// HTML Elements
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Constant
const SAVED_QUOTE_NAME = "quote";
const QUOTE_API_URL = "https://type.fit/api/quotes";

// Download Quotes
fetch(QUOTE_API_URL).then((response) => {
  if (response.ok) {
    // When request success (download success)
    return response.json();
  } else {
    throw new Error("Quote Download Error");
  }
})
.then((quotesArray) => {
  // Randomly select the quote from the array
  const selectedQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];

  // Display the quote
  quote.innerText = selectedQuote.text;
  author.innerText = selectedQuote.author;

  // Save it to the local storage
  localStorage.setItem(SAVED_QUOTE_NAME, JSON.stringify(selectedQuote));
})
.catch((error) => {
  // When error occurred (Network Error / Server Timeout / etc.)
  console.log(error);
  // Check Local Storage (quote is stored as JSON format) / Use saved quote
  const savedQuote = localStorage.getItem(SAVED_QUOTE_NAME);
  if(savedQuote !== null) {
    // If saved quote exists, display the quote
    const quoteObj = JSON.parse(savedQuote);

    quote.innerText = quoteObj.text;
    author.innerText = quoteObj.author;
  }
});
