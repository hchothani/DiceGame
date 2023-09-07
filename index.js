var randomNum1 = Math.random();
randomNum1 = Math.floor((randomNum1*6)+1);
document.querySelector("img").setAttribute("src", "images/dice" + randomNum1 + ".png");

var randomNum2 = Math.random();
randomNum2 = Math.floor((randomNum2*6)+1);
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNum2 + ".png");

if(randomNum1>randomNum2){
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNum1<randomNum2){
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
