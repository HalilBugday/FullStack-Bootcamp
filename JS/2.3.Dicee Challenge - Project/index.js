
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //from dice1.png to dice6.png

var randomImageSource = "images/" + randomDiceImage; //from images/dice1.png to images/dice6.png (path)

var image1 = document.querySelectorAll("img")[0]; //bu img classı (<button> gibi html'de <img> var) bir önceki örnekteki gibi
                                                    //0. fotoyu seçti
image1.setAttribute("src", randomImageSource); // src özelliğini değiştirdik


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
