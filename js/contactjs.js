function validateForm() {

	var userfname = document.forms["contact"]["firstname"].value;
	var userlname = document.forms["contact"]["lastname"].value;
	var userzcode = document.forms["contact"]["zipcode"].value;
	var useremail = document.forms["contact"]["email"].value;
	var userdob = document.forms["contact"]["dob"].value;
	
	var fnamestyle = document.getElementById("fname");
	var lnamestyle = document.getElementById("lname");
	var zcodestyle = document.getElementById("zcode");
	var emailstyle = document.getElementById("useremail");
	var dobstyle = document.getElementById("datepicker");
	
	if ((userfname == null) || (userfname == "")) {
		alert("First name must be filled out");
		fnamestyle.style.borderColor = "red";
		return false;
	}
	if ((userlname == null) || (userlname == "")) {
		alert("Last name must be filled out");
		lnamestyle.style.borderColor = "red";
		return false;
	}
	if ((userzcode == null) || (userzcode == "")) {
		alert("Please check Zip Code");
		zcodestyle.style.borderColor = "red";
		return false;

	} 	
	if ((useremail == null) || (useremail == "")) {
		alert("Email must be filled out");
		emailstyle.style.borderColor = "red";
		return false;
	}
	if ((userdob == null) || (userdob == "")) {
		alert("Date of Birth must be filled correctly");
		datepicker.style.borderColor = "red";
		return false;
	} 
	else {
		return true;
	}
}

//Local Storage
//if (typeof(Storage) != "undefined") {
	
	//var localfname = document.getElementById("fname");
	
	//localfname.value = localStorage.getItem("fname");
	
	//localfname.addEventListener('input', function () {localStorage.setItem('localStorDis', localfname.value);}, false);
//}

