/*Ко вторнику (12.12.2017):
1. События клавиатуры keydown, keyup, keypress
Написать функцию обработчик события так, чтобы вводимая пользователем инфоромация сразу же отображалась в textarea или любом другом месте
<input type="text"> - поле для ввода текста пользователем
<textarea></textarea> - поле для отображения вводимого пользователем текста*/


var text1 = document.getElementById("text");
var text2 = document.getElementById("textarea")

text1.addEventListener("keyup", copytext);

function copytext() {
	text2.setAttribute("value", text1.value); 
} 



/*(function () {
	"use strict";

	// ЗАДАЧА 1
	// keydown, keyup, keypress

	var input = document.createElement('input');
	input.setAttribute('type', 'text');
	input.setAttribute('value', '');
	input.setAttribute('placeholder', 'start type something');

	var textarea = document.createElement('textarea');

	document.getElementById('container').appendChild(input);
	document.getElementById('container').appendChild(textarea);

	input.addEventListener('keydown', copyText);
	input.addEventListener('keypress', copyText);
	input.addEventListener('keyup', copyText);
	function copyText() {
		textarea.value = input.value;
}
*/

/*2. Написать по одной любой функции-обработчику на следующие события:
DOMContentLoaded
beforeunload
onload на отдельный элемент*/