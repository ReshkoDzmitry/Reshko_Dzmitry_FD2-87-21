"use strict";

var arrayInfoFields = [];

function dynForm(array, nameOfForm) {

	var myForm = document.forms[nameOfForm];
	var field = "<table>";

	for (var i = 0; i < array.length; i++) {
		
		switch(array[i].type) {

			case "text":
				field += "<tr><td><label>" + array[i].label + "</label></td>";

				if (array[i].width) {
					field += "<td><input type='" + array[i].type + "' name='" + array[i].name + "' style='width:" + array[i].width + "px'><span id='" + array[i].name + "' style='color: red; font-style: italic' ></span></td></tr>";
				} else {
					field += "<td><input type='" + array[i].type + "' name='" + array[i].name + "'><span id='" + array[i].name + "' style='color: red; font-style: italic' ></span></td></tr>";
				}

				break;

			case "url":
				field += "<tr><td><label>" + array[i].label + "</label></td>";

				if (array[i].width) {
					field += "<td><input type='" + array[i].type + "' name='" + array[i].name + "' style='width:" + array[i].width + "px'><span id='" + array[i].name + "' style='color: red; font-style: italic' ></span></td></tr>";
				} else {
					field += "<td><input type='" + array[i].type + "' name='" + array[i].name + "'><span id='" + array[i].name + "' style='color: red; font-style: italic' ></span></td></tr>";
				}

				break;

			case "date":
				field += "<tr><td><label>" + array[i].label + "</label></td>";

				if (array[i].width) {
					field += "<td><input type='" + array[i].type + "' name='" + array[i].name + "' style='width:" + array[i].width + "px'><span id='" + array[i].name + "' style='color: red; font-style: italic' ></span></td></tr>";
				} else {
					field += "<td><input type='" + array[i].type + "' name='" + array[i].name + "'><span id='" + array[i].name + "' style='color: red; font-style: italic' ></span></td></tr>";
				}

				break;

			case "number":
				field += "<tr><td><label>" + array[i].label + "</label></td>";

				if (array[i].width) {
					field += "<td><input type='" + array[i].type + "' name='" + array[i].name + "' style='width:" + array[i].width + "px'><span id='" + array[i].name + "' style='color: red; font-style: italic' ></span></td></tr>";
				} else {
					field += "<td><input type='" + array[i].type + "' name='" + array[i].name + "'><span id='" + array[i].name + "' style='color: red; font-style: italic' ></span></td></tr>";
				}

				break;

			case "email":
				field += "<tr><td><label>" + array[i].label + "</label></td>";

				if (array[i].width) {
					field += "<td><input type='" + array[i].type + "' name='" + array[i].name + "' style='width:" + array[i].width + "px'><span id='" + array[i].name + "' style='color: red; font-style: italic' ></span></td></tr>";
				} else {
					field += "<td><input type='" + array[i].type + "' name='" + array[i].name + "'><span id='" + array[i].name + "' style='color: red; font-style: italic' ></span></td></tr>";
				}

				break;

			case "select":
				field += "<tr><td><label>" + array[i].label + "</label></td>";
				field += "<td><select name='" + array[i].name + "'>";

				var keys = Object.keys(array[i].option);

				keys.forEach(function(val, ind, arr) {
					var temporary;

					if (ind === (arr.length - 1)) {
						temporary = "<option value=" + ind + " selected>" + arr[ind] + "</option>";
					} else {
						temporary = "<option value=" + ind + ">" + arr[ind] + "</option>";
					}

					field += temporary;
				});
				
				field += "</select><span id='" + array[i].name + "' style='color: red; font-style: italic' ></span></td></tr>";
				break;

			case "radio":
				field += "<tr><td><label>" + array[i].label + "</label></td>";
				field += "<td>";

				var keys = Object.keys(array[i].radioLabel);

				keys.forEach(function(val, ind, arr) {
						var temporary = "<input type='" + array[i].type + "' name='" + array[i].name + "' value='" + (ind + 1) + "'>" + arr[ind];

					field += temporary;
				});

				field += "<span id='" + array[i].name + "' style='color: red; font-style: italic'></span></td></tr>";
				break;

			case "checkbox":
				field += "<tr><td><label>" + array[i].label + "</label></td>";
				field += "<td><input type='" + array[i].type + "' name='" + array[i].name + "' checked><span id='" + array[i].name + "' style='color: red; font-style: italic' ></span></td></tr>";
				break;

			case "textarea":
				field += "<tr><td colspan='2'><label>" + array[i].label + "</label><br>";

				if (array[i].width) {
					if (array[i].height) {
						field += "<textarea name='" + array[i].name + "' style='width:" + array[i].width + "px; height:" + array[i].height + "px'>" + "</textarea><span id='" + array[i].name + "' style='color: red; font-style: italic' ></span></td></tr>";
					} else {
						field += "<textarea name='" + array[i].name + "' style='width:" + array[i].width + "px'>" + "</textarea><span id='" + array[i].name + "' style='color: red; font-style: italic' ></span></td></tr>";
					}
					
				} else {
					field += "<textarea name='" + array[i].name + "'>" + "</textarea><span id='" + array[i].name + "' style='color: red; font-style: italic' ></span></td></tr>";
				}

				break;

			case "submit":
				field += "<tr><td><input type='" + array[i].type + "' name='" + array[i].name + "' value='" + array[i].label + "'><span id='" + array[i].name + "' style='color: red; font-style: italic' ></span></td></tr>";
				break;

			default:
				field += "<br><label>" + array[i] + "</label><br><br>";
		}
	}

	field += "</table>";
	myForm.innerHTML = field;
}

function infAboutFields(type, inputName, label, widthOfField, heightOfField) {
	return {
		type: type,
		name: inputName,
		label: label,
		width: widthOfField,
		height: heightOfField
	};
}


arrayInfoFields.push("Для внесения вашего сайта в каталог, заполните форму:");
arrayInfoFields.push(infAboutFields("text", "developers", "Разработчики:", 450));
arrayInfoFields.push(infAboutFields("text", "nameOfSite", "Название сайта:", 450));
arrayInfoFields.push(infAboutFields("url", "url", "URL сайта:"));
arrayInfoFields.push(infAboutFields("date", "date", "Дата запуска сайта:"));
arrayInfoFields.push(infAboutFields("number", "visit", "Посетителей в сутки:"));
arrayInfoFields.push(infAboutFields("email", "email", "E-mail для связи:"));
arrayInfoFields.push({type: "select", name: "catalogou", label: "Рубрика каталога:", option: {"здоровье": true, "домашний уют": true, "бытовая техника": true}});
arrayInfoFields.push({type: "radio", name: "radioPlacement", label: "Размещение:", radioLabel: {"бесплатное": true, "платное": true, "VIP": true}});
arrayInfoFields.push(infAboutFields("checkbox", "checkbox", "Разрешить отзывы:"));
arrayInfoFields.push(infAboutFields("textarea", "descriptionOfTheSite", "Описание сайта:", 600, 150));
arrayInfoFields.push(infAboutFields("submit", "submit", "Опубликовать"));


dynForm(arrayInfoFields, "formForSite");