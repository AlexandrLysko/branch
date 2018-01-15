/*Задание на субботу (9.12.2017):
Создать объект slider, в нем будут два метода:
1. init : получение элемента (по id), в который и будут вставляться слайды
2. add: добавление картинок в слайдер ( метод на вход принимает путь до картинки и alt, создает img, добавляет необходимые атрибуты и классы, и добавляет созданный элемент в элемент, который получили в методе init )
Внутри объекта пользуйтесь this*/



var slider = {};
slider.init = function(id) {
	this.tag = document.getElementById(id); 
},

slider.add = function(url, alt) {
	let img = document.createElement("img");
	img.setAttribute("src", url);
	img.setAttribute("alt", alt);
	this.tag.appendChild(img); 
};

slider.init("slider");
slider.add("img1.jpg", "alt1 ");
slider.add("img2.jpg", "alt2 ");
slider.add("img3.jpg", "alt3 ");

