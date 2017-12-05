//If user selects Rock
function userRock() {
	//Create an array. Create a random number. Select value from array with random number
	var gamearrayrock = ["", "rock", "paper", "sciss"];
	var randomnumrock = Math.floor((Math.random() * 3) + 1);
	var randomselectrock = gamearrayrock[randomnumrock];
	//If statements to determine what was selected by random generator
	if (randomselectrock == "paper") {
		alert("You lose. I selected Paper");
		return false;
	}
	if (randomselectrock == "sciss") {
		alert("Yon win. I selected Scissors.");
		return false;
	}
	else {
		alert("Tie. I selected Rock");
		return true;
	}
}
//If user selects Paper
function userPaper() {
	//Create an array. Create a random number. Select value from array with random number
	var gamearraypaper = ["", "rock", "paper", "sciss"];
	var randomnumpaper = Math.floor((Math.random() * 3) + 1);
	var randomselectpaper = gamearraypaper[randomnumpaper];
	//If statements to determine what was selected by random generator
	if (randomselectpaper == "sciss") {
		alert("You lose. I selected Scissors");
		return false;
	}
	if (randomselectpaper == "rock") {
		alert("Yon win. I selected Rock.");
		return false;
	}
	else {
		alert("Tie. I selected Paper");
		return true;
	}
}
//If user selects Scissor
function userSciss() {
	//Create an array. Create a random number. Select value from array with random number
	var gamearraysciss = ["", "rock", "paper", "sciss"];
	var randomnumsciss = Math.floor((Math.random() * 3) + 1);
	var randomselectsciss = gamearraysciss[randomnumsciss];
	//If statements to determine what was selected by random generator
	if (randomselectsciss == "rock") {
		alert("You lose. I selected Rock");
		return false;
	}
	if (randomselectsciss == "paper") {
		alert("Yon won. I selected Paper.");
		return false;
	}
	else {
		alert("Tie. I selected Scissors");
		return true;
	}
}