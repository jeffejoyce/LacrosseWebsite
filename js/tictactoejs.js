//Global Variables
var userturn = 1;
var usercharacter = XorO();
//Adding to userturn every time an option is selected
var add = (function () {return function () {return userturn += 1;}})();
//Button functions
function topLeft() {
	document.getElementById("topLeftValv").innerText = usercharacter;
	add();
	usercharacter = XorO();
	//alert(usercharacter);
}
function topCenter() {
	document.getElementById("topCenterValv").innerText = usercharacter;
	add();
	usercharacter = XorO();
	//alert(usercharacter);
}
function topRight() {
	document.getElementById("topRightValv").innerText = usercharacter;
	add();
	usercharacter = XorO();
	//alert(usercharacter);
}
function midLeft() {
	document.getElementById("midLeftValv").innerText = usercharacter;
	add();
	usercharacter = XorO();
	//alert(usercharacter);
}
function midCenter() {
	document.getElementById("midCenterValv").innerText = usercharacter;
	add();
	usercharacter = XorO();
	//alert(usercharacter);
}
function midRight() {
	document.getElementById("midRightValv").innerText = usercharacter;
	add();
	usercharacter = XorO();
	//alert(usercharacter);
}
function bottLeft() {
	document.getElementById("bottLeftValv").innerText = usercharacter;
	add();
	usercharacter = XorO();
	//alert(usercharacter);
}
function bottCenter() {
	document.getElementById("bottCenterValv").innerText = usercharacter;
	add();
	usercharacter = XorO();
	//alert(usercharacter);
}
function bottRight() {
	document.getElementById("bottRightValv").innerText = usercharacter;
	add();
	usercharacter = XorO();
	//alert(usercharacter);
}
//If userturn is divisible by 2 return 0
function XorO () {
	var option;
	//alert(userturn);
	if(userturn % 2 === 0) {
		option = "O"
	}
	else {
		option = "X"
	}
	return option;
}

