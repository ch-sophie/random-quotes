// ****** Variable for quotes: in array ****** //
var q = [
    "Showing off is the fool\'s idea of glory.  Bruce Lee",
    "It\' not whether you get knocked down, it\'s whether you get up.  Vince Lombardi",
    "Believe you can and you're halfway there.  Theodore Roosevelt",
    "Let your hopes, not your hurts, shape your future.  Robert H. Schuller",
    "One who knows all the answers has not been asked all the questions.  Confucius",
    "Time is relative.  Albert Einstein",
    "At the end of the day, we can endure much more than we think we can.  Frida Kahlo",
    "I can accept failure, everyone fails at something. But I cannot accept not trying.  Michael Jordan",
    "In any given moment we have two options: to step forward into growth or back into safety.  Abraham Maslow",
    "Challenges are what make life interesting and overcoming them is what makes life meaningful.  Joshua J. Marine"

]
// change quote when clicked //
function newQuote() {
    var randomQuote = Math.floor(Math.random() * (q.length));
    document.getElementById("quoteDisplay").innerHTML = q[randomQuote];
}


