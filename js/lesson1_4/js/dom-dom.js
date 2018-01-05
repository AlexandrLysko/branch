/*Задание на субботу (9.12.2017):
Создать объект slider, в нем будут два метода:
1. init : получение элемента (по id), в который и будут вставляться слайды
2. add: добавление картинок в слайдер ( метод на вход принимает путь до картинки и alt, создает img, добавляет необходимые атрибуты и классы, и добавляет созданный элемент в элемент, который получили в методе init )
Внутри объекта пользуйтесь this*/

/*
var slider = {};
slider.init
slider.add =*/

/*window.onload = initAll;
function initAll () {
	document.getElementsByTagName("form")[0].onsubmit = addNode;
}
function addNode () {
	var inText = document.getElementById("textArea").value;
	var newText = document.createTextNode(inText);
	var newGraf = document.createElement(p");
	newGraf.appendChild(newText);
	var docBody = document.getElementsByTagName("body")[0];
	docBody.appendChild(newGraf);
	return false;
	
}*/

var add = new Image();
var init = document.getElementById('slider');

add.onload = function() {
  var link = document.createElement('a');
  link.href = this.src;
  link.appendChild(add);
  init.appendChild(link);
};

add.src ='https://webformyself.com/wp-content/uploads/2016/776/5.png';

