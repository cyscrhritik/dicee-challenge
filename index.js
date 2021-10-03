var n=Math.floor(Math.random()*6)+1;
var randomDiceimage="dice" + n + ".png";
var randomSourceimage= "images/" + randomDiceimage;
document.querySelectorAll("img")[0].setAttribute("src",randomSourceimage);
var n1=Math.floor(Math.random()*6)+1;
var randomDiceimage1="dice" + n1 + ".png";
var randomSourceimage1= "images/" + randomDiceimage1;
document.querySelectorAll("img")[1].setAttribute("src",randomSourceimage1);
if(n>n1)
{
  document.querySelector("h1").innerHTML= "Player1 wins!";
}
else if (n<n1) {
  document.querySelector("h1").innerHTML= "Player2 Wins";
}
else{
  document.querySelector("h1").innerHTML= "Draw";
}
