/*Ко вторнику (12.12.2017):
1. События клавиатуры keydown, keyup, keypress
Написать функцию обработчик события так, чтобы вводимая пользователем инфоромация сразу же отображалась в textarea или любом другом месте
<input type="text"> - поле для ввода текста пользователем
<textarea></textarea> - поле для отображения вводимого пользователем текста*/

elem.onclick = function() {
	elem.onkeydown="this.nextSibling.innerHTML = event.keyCode";

};


/*2. Написать по одной любой функции-обработчику на следующие события:
DOMContentLoaded
beforeunload
onload на отдельный элемент*/