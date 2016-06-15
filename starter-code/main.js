var card1 = "queen";
var card2 = "king";
var card3 = "king";
var card4 = "queen";

var gameBoard = document.getElementById('game-board');
var cardsInDeck = 4;

var createBoard = function(){
    for(var x = 0; x < cardsInDeck; x++){
        var newCard = document.createElement('div');
        newCard.className = 'card';
        gameBoard.appendChild(newCard);
        console.log(x);
    }
}
createBoard();


// //user selects two cards
// var select1 = card2;
// var select2 = card3;
// var cardsMatch;

// //compare cards
// if(select1 === select2){
//     cardsMatch = true;
// }else{
//     cardsMatch = false;
// }

// //notify user if cards do/do not match
// if(cardsMatch){
//     alert("you've found matching cards, yay! :)");
// }else{
//     alert("sorry, those cards don't match :(")
// }





// document.getElementsByClassName('board')[0].setAttribute('class', 'test');