var card1 = "queen";
var card2 = "king";
var card3 = "king";
var card4 = "queen";

var select1 = card2;
var select2 = card1;
var cardsMatch;

if(select1 === select2){
    cardsMatch = true;
}else{
    cardsMatch = false;
}

if(cardsMatch){
    alert("you've found matching cards, yay! :)");
}else{
    alert("sorry, those cards don't match :(")
}