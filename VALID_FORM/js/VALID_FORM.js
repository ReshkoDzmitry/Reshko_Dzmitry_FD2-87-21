"use strict";

var formTag = document.forms["formForSite"];

var developersField = formTag.elements["developers"];
var nameOfSiteField = formTag.elements["nameOfSite"];
var urlField = formTag.elements["url"];
var dateField = formTag.elements["date"];
var visitField = formTag.elements["visit"];
var emailField = formTag.elements["email"];
var radioPlacementField = formTag.elements["radioPlacement"];
var checkboxField = formTag.elements["checkbox"];
var descriptionOfTheSiteField = formTag.elements["descriptionOfTheSite"];

function validateForm() {

	var arrayForQueue = [];

	try {
 
		var developersValue = developersField.value;
		var nameOfSiteValue = nameOfSiteField.value;
		var urlValue = urlField.value;		
		var dateValue = dateField.value;		
		var visitValue = visitField.value;
		var emailValue = emailField.value;
		var radioPlacementValue = radioPlacementField.value;
		var checkboxValue = checkboxField.checked;
		var descriptionOfTheSiteValue = descriptionOfTheSiteField.value;


		function checkField(nameOfField) {
			var temporary = document.getElementById(nameOfField.name);
			temporary.innerHTML = " * Обязательно!";
			nameOfField.focus();
		}

		function ifFieldEmpty(nameOfField) {
			if (nameOfField.value === "") {
				checkField(nameOfField);
				arrayForQueue.push(nameOfField);
			} else if (nameOfField.value !== "") {
				var temporary = document.getElementById(nameOfField.name);
				temporary.innerHTML = "";
			}
		}
	
		ifFieldEmpty(developersField);
		ifFieldEmpty(nameOfSiteField);
		ifFieldEmpty(urlField);
		ifFieldEmpty(dateField);
		ifFieldEmpty(visitField);
		ifFieldEmpty(emailField);

		if (radioPlacementField.value === "") {
			var temporary = document.getElementById("radioPlacement");
			temporary.innerHTML = " * Обязательно!";
			radioPlacementField[0].focus();
			arrayForQueue.push(radioPlacementField[0]);
		} else {
			var temporary = document.getElementById("radioPlacement");
			temporary.innerHTML = "";
		}

		if (checkboxValue === false) {
			checkField(checkboxField);
			arrayForQueue.push(checkboxField);
		} else if (checkboxValue !== false) {
			var temporary = document.getElementById(checkboxField.name);
			temporary.innerHTML = "";
		}

		ifFieldEmpty(descriptionOfTheSiteField);

		if (arrayForQueue.length !== 0) {
			console.log(arrayForQueue[0]);
			arrayForQueue[0].focus();
			return false; 
		}

		return true;
	}

	catch(Ex) {
		return false;
	}
}

function checkEveryField(field) {
	var temporary = document.getElementById(field.name);
	temporary.innerHTML = " * Обязательно!";
}

function onblurIfFieldEmpty(nameOfField) {
	nameOfField.onblur = function() {
		if (nameOfField.value === "") {
			checkEveryField(nameOfField);

			return false; 
		} else {
			var temporary = document.getElementById(nameOfField.name);
			temporary.innerHTML = "";
		}

		return true;
	}
}

onblurIfFieldEmpty(developersField);
onblurIfFieldEmpty(nameOfSiteField);
onblurIfFieldEmpty(urlField);
onblurIfFieldEmpty(dateField);
onblurIfFieldEmpty(visitField);
onblurIfFieldEmpty(emailField);

radioPlacementField.forEach(function (val, ind, arr) {
	arr[ind].onchange = function () {
		if (arr[ind].value === "") {
			var temporary = document.getElementById("radioPlacement");
			temporary.innerHTML = " * Обязательно!";

			return false;
		} else {
			var temporary = document.getElementById("radioPlacement");
			temporary.innerHTML = "";
		}
	}
});

checkboxField.onchange = function () {
		if (checkboxField.checked === false) {
			checkEveryField(checkboxField);

			return false;
		} else {
			var temporary = document.getElementById(checkboxField.name);
			temporary.innerHTML = "";
		}

		return true;
}

onblurIfFieldEmpty(descriptionOfTheSiteField);

formTag.onsubmit = validateForm;