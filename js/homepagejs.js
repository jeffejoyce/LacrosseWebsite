var today = new Date()
var hour = today.getHours();
var morningWelcome = "Good Morning";
var nightWelcome = "Good Afternoon";
if(hour < 12) {
	document.getElementById("welcome").innerHTML = morningWelcome;
} else {
	document.getElementById("welcome").innerHTML = nightWelcome;
}