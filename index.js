var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomDiceImg = "dice" + randomNumber1 + ".png";

var randomImgSrc = "images/" + randomDiceImg;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute('src', randomImgSrc);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImg1 = "dice" + randomNumber2 + ".png";

var randomImgSrc1 = "images/" + randomDiceImg1;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute('src', randomImgSrc1);
if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Hola! It's Draw"
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Won";
}else{
    document.querySelector("h1").innerHTML = "Player2 Won";
}
