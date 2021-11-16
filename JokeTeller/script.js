import VOICE_API_KEY from "./voiceApiKey.js";

const audioEl = document.getElementById("audio");
const button = document.getElementById("btn");
const apiKey = VOICE_API_KEY;
// VoiceRSS Javascript SDK

///////////////////////////////

// Disable/Enable a button
function toggleButton() {
  button.disabled = !button.disabled;
}

// Passing Joke to VoiceRSS API
function tellMe(joke) {
  VoiceRSS.speech({
    key: apiKey,
    src: joke,
    hl: "en-us",
    r: "0",
    c: "mp3",
    f: "8khz_8bit_mono",
    ssml: false,
  });
}

// Get Jokes from Joke API
async function getJokes() {
  let joke = "";
  const apiUrl = `https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    // Text-to-speech
    tellMe(joke);
    // Disable Button
    toggleButton();
  } catch (err) {
    //Catch error
    console.log("Woops", err);
  }
}

// Event Listeners
button.addEventListener("click", getJokes);
audioEl.addEventListener("ended", toggleButton);
