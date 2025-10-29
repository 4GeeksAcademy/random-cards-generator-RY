function generateCard() {
  let suits = ["♦", "♥", "♠", "♣"];
  let suitClasses = ["diamond", "heart", "spade", "club"];
  let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  let suitIndex = Math.floor(Math.random() * suits.length);
  let valueIndex = Math.floor(Math.random() * values.length);

  let suit = suits[suitIndex];
  let value = values[valueIndex];
  let suitClass = suitClasses[suitIndex];

  let card = document.getElementById("card");
  let topSuit = document.getElementById("top-suit");
  let bottomSuit = document.getElementById("bottom-suit");
  let cardValue = document.getElementById("card-value");

  card.className = `card ${suitClass}`;
  topSuit.textContent = suit;
  bottomSuit.textContent = suit;
  cardValue.textContent = value;
}

window.onload = () => {
  generateCard();
  setInterval(generateCard, 10000); 
};

document.getElementById("newCardBtn").addEventListener("click", generateCard);

