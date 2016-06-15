
var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var board = document.getElementById('game-board');

function createBoard() {
  for (var i=0; i<cards.length; i++) {
    
    //create and configure new card element
    var newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.setAttribute('data-card', cards[i]);
    newCard.addEventListener('click', isTwoCards);
    //append card to board
    board.appendChild(newCard);
  }

}
function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
	
    // show card's image
	if (this.getAttribute('data-card') === 'king') {
		// this.innerHTML = "<img src='http://res.cloudinary.com/mrbrd/image/upload/v1466025294/Hearts_13_ikildb.png'>"; // king
        this.className += " king";
	} else {
        this.className += " queen";
		// this.innerHTML = "<img src='http://res.cloudinary.com/mrbrd/image/upload/v1466025294/Hearts_12_ddwgq5.png'>"; //queen
	}
    //check for match if two cards are in play
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard();
