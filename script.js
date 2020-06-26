var body = document.querySelector("body");
var boardin = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
var boardout = [[null,null,null],[null,null,null],[null,null,null]];
var extra = document.querySelector(".extra");
var h3 = document.querySelector(".bottom");
// var btn = document.querySelector(".btn");
var count = 0;
for(var i = 0; i < 3; i++) {
	for(var j = 0; j < 3; j++) {
		boardout[i][j] = document.querySelectorAll(".int")[count];
		count++;
	}
}

var f = 0;



var ext = document.querySelector(".ext");

ext.addEventListener("click", function(event) {
	var tile = event.target;
	for(var i = 0; i < 3; i++) {
		for(var j = 0; j < 3; j++) {
			if(tile === boardout[i][j]) {
				a = i;
				b = j;
			}
		}
	}
	action(a, b);
})

function action(i, j) {
	if(!boardout[i][j].classList.contains("texty")) {
		if(f%2 === 0) {
		boardin[i][j] = "x";
		boardout[i][j].innerHTML = "X";
		} else {
		boardin[i][j] = "o";
		boardout[i][j].innerHTML = "O";
		}
		boardout[i][j].classList.add("texty");
		f++;
		// if(f === 9) {
		// 	exitGame();
		// } else {
		// 	check();
		// }
		check();
	}
}

function check() {
	for(var i = 0; i < 3; i++) {
		if(boardin[i][0] === boardin[i][1] && boardin[i][1] === boardin[i][2]) {
			addFinalClass(boardout[i][0], boardout[i][1], boardout[i][2], reset);
			// reset();
		} else if(boardin[0][i] === boardin[1][i] && boardin[1][i] === boardin[2][i]) {
			addFinalClass(boardout[0][i], boardout[1][i], boardout[2][i], reset);
			// reset();
		}
	}
	if(boardin[0][0] === boardin[1][1] && boardin[1][1] === boardin[2][2]) {
		addFinalClass(boardout[0][0], boardout[1][1], boardout[2][2], reset);
		// reset();
	} else if(boardin[0][2] === boardin[1][1] && boardin[1][1] === boardin[2][0]) {
		addFinalClass(boardout[0][2], boardout[1][1], boardout[2][0], reset);
		// reset();
	}
	if(f === 9) {
		tie(reset);
	}
}

function result(tile1) {
	if(tile1.innerHTML === "X") {
		h3.innerHTML = "PLAYER 1 WINS";
	} else {
		h3.innerHTML = "PLAYER 2 WINS";
	}
	h3.classList.add("h3style");
	f = 0;
}

function addFinalClass(tile1, tile2, tile3, callback) {
	// setTimeout(function() {
	tile1.classList.add("animate__animated", "animate__pulse");
	tile2.classList.add("animate__animated", "animate__pulse");
	tile3.classList.add("animate__animated", "animate__pulse");
	result(tile1);
	setTimeout(function() {
		callback();
	}, 2000);
}

function reset() {
	boardin = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
	for(var i=0;i<3;i++) {
		for(var j=0; j<3;j++) {
			boardout[i][j].innerHTML = "";
			boardout[i][j].classList.remove("animate__animated");
			boardout[i][j].classList.remove("animate__pulse");
			boardout[i][j].classList.remove("texty");
		}
	}
	h3.innerHTML = "";
	h3.classList.remove("h3style");
}

function tie(callback) {
	h3.innerHTML = "TIED";
	h3.classList.add("h3style");
	f = 0;
	setTimeout(function() {
		callback();
	}, 2000);
}
