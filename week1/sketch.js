// change the quotes in this array. Be mindful of the quotation marks!
// this is the only part of the file you need to edit!

const quotes = [
  { text: "aesthically pleasing with emotional impact", source: "Southern Methodist University" },
  { text: "unique and memorable brand experience", source: "Laura Valtere" },
  { text: "bridging the gap between technologists and artists", source: "Ahmad Moussa" },
  { text: "creative dialogue with the computer", source: "Tim Rodenbroeker" },
  { text: "the paintbrush and the computer is the canvas", source: "University of York" },
  { text: "about wonder, about exploration, about learning", source: "Axelle van Wynsberghe" },
  { text: "an act of curiosity - an ongoing conversation with the unknown", source: "Patrik Hubner" },
  { text: "the world of computers and code to everyday experience", source: "Johnathan Minard" }
];
// no need to edit anything below this line! 
// if you have made an error, you can check your history to see what might have gone wrong

// a variable that holds the current quote
let current = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Seed with millis() so each page load gives a different quote.
  randomSeed(millis());
  textSize(32);
  fill(10, 255, 10);
  // calls the function to pick a quote
  pickQuote();
}

function pickQuote() {
  // take a random number and use that to identify what quote to use
  current = quotes[floor(random(quotes.length))];
}

function draw() {
  background(255, 20, 250); // set the background color
  drawQuote();  // draw the quote on screen
}

function drawQuote() {   // draw text
  textAlign(CENTER, CENTER);
  text("Creative Coding is.....", width / 2, height / 2 - 48);
  textStyle(BOLD);
  text("'" + current.text + "'", width / 2, height / 2);
  textAlign(RIGHT, CENTER);
  text("-" + current.source, width - 100, height - 100);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function newQuote() {
  pickQuote();
  redraw();
}

function mousePressed() {
  newQuote();
}