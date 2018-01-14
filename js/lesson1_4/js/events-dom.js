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


/*2. Написать по одной любой функции-обработчику на следующие события:
DOMContentLoaded
beforeunload
onload на отдельный элемент*/

document.addEventListener('DOMContentLoaded', function(event) { // html страница загружена
	console.log("Успешная загрузка страницы");
});


window.onbeforeunload = function() {
    return "Изменения не сохранены. Покинуть страницу?";
};


window.addEventListener('load', function() { // Завершена загрузка всех элементов страницы
		console.log("Все файлы загружены!");
	});

var img = new Image();
img.onload = function() { alert('фото загружено'); }
img.src = '/img.gif';

