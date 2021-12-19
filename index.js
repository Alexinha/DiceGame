let heading = document.querySelector("h1");
let randomNumber1 = (Math.floor(Math.random() * 6)) + 1; //remember it's not Math.round() jeez
let randomNumber2 = (Math.floor(Math.random() * 6)) + 1;
let dice1 = document.querySelector(".img1"); // or document.querySelectorAll("img")[0];
let dice2 = document.querySelector(".img2");
let diceRandomSrc1 = "images/dice" + randomNumber1 + ".png";
let diceRandomSrc2 = "images/dice" + randomNumber2 + ".png";
dice1.setAttribute("src", diceRandomSrc1); //no need to "" when it's a variable
dice2.setAttribute("src", diceRandomSrc2);

if (randomNumber1 === randomNumber2) {
  heading.innerHTML = "Draw!"
} else if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "Player 1 Wins!"
} else {
  heading.innerHTML = "Player 2 wins!"
}
