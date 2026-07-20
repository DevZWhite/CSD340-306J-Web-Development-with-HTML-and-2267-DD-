// Four JavaScript variables holding the string values for the blanked-out words
var word1 = "airbrush";
var word2 = "Eorzea";
var word3 = "Java";
var word4 = "resilience";

// Replaces the underscored blank with the correct word when its button is clicked
function revealWord(spanId, word, btn) {
  document.getElementById(spanId).textContent = word;
  btn.style.display = "none";
}

