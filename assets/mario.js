var MarioGame = {};

var container = document.getElementById("container");
var foreground = document.getElementById("foreground")
var plants = document.getElementById("plants");
var moutains  = document.getElementById("moutains");
var clouds  = document.getElementById("clouds");
var mario = document.getElementById("mario");
var items = document.getElementById("items");
var runningRight = 0;
var runningLeft = 0;
var score = 0;
var coins = 0;
var dead = 0;

setInterval(function(){
	if(runningRight == 1){
		move(foreground, -40);
		move(items, -40);
		move(plants, -23);
		move(moutains, -6);
		move(clouds, -4);
		mario.classList.remove("lookingLeft");
		mario.classList.add("lookingRight");
		mario.classList.add("runningRight");
	}
}, 10);


setInterval(function(){

	if (parseInt(foreground.style.left) > 150  && dead == 0) {
		audio = new Audio('die.wav');
		audio.play(); 
		dead = 1;
		music.pause();
	}

}, 10)

setInterval(function(){
	if(runningLeft == 1){
		move(foreground, 40);
		move(items, 40);
		move(plants, 23);
		move(moutains, 6);
		move(clouds, 4);
		mario.classList.remove("lookingRight");
		mario.classList.add("lookingLeft");
		mario.classList.add("runningLeft");
	}
}, 10);

function updateScore(value) {
	score += value;
	coins += 1;
	document.getElementById("updateCoins").innerHTML = "0" + coins;
	document.getElementById("bottomline-score").innerHTML = "000" + score;
}

var timeLeft = 0;
window.setInterval(
	function () {
		timeLeft += 1;
		document.getElementById("timeLeft").innerHTML = "00" + timeLeft;

	}, 1000);



var music = new Audio('assets/overworld.mp3');
music.play();
document.addEventListener("keydown", function() {
	keyReturn(event);
});
document.addEventListener("keyup", noMove);

function noMove() {
	runningRight = 0;
	runningLeft = 0;
	mario.classList.remove("runningLeft");
	mario.classList.remove("runningRight");
}

function keyReturn(e){

	if (event.keyCode == 37) {
		runningLeft = 1;
	}

	if (event.keyCode == 39) {
		runningRight = 1;						
	}

	if (event.keyCode == 38) {
		jumping = 1;
		mario.classList.add("jumping");
		audio = new Audio('assets/jump.wav');
		audio.play(); 

		setTimeout(function(){
			mario.classList.remove("jumping")
		}, 500);
		if (parseInt(foreground.style.left) < -645 &&  parseInt(foreground.style.left) > -710) {
			console.log("coin!");
			audio = new Audio('assets/coin.mp3');
			setTimeout(function() {
				audio.play(); 
				updateScore(100);
				document.getElementById("coin").classList.add("active");
				setTimeout(function(){
					document.getElementById("coin").classList.remove("active");
				}, 400)
			}, 200);
			
		}

	}
}


function move(element, speed) {
	oldPosition = window.getComputedStyle(element);
	checkStyle = oldPosition.getPropertyValue("left");
	newPosition = parseInt(checkStyle) + speed;
	element.style.left = newPosition + "px";
}




