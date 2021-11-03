const quoteContainer = document.querySelector(".quote__container");
const quoteText = document.querySelector(".quote");
const authorText = document.querySelector(".author");
const newQuoteBtn = document.querySelector(".new__quote");
const loader = document.querySelector(".loader");

let apiQuotes = [];

//Show new Quote
function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //check if author is known
    authorText.textContent = `- ${quote.author ? quote.author : "Unknown"}`;

    //Check quote length to determine font-size
    if (quote.text.length > 15) {
        quoteText.classList.add("long__quote");
    } else {
        quoteText.classList.remove("long__quote");
    }
    //Set Quote, Hide Loader
    quoteText.textContent = quote.text;
}

// Get Quotes from API
async function getQuotes() {
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) { }
}

newQuoteBtn.addEventListener("click", getQuotes);
getQuotes();
