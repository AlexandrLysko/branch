'use strict'
/*Задание 1
1.1. создать 2 объекта sity1 и sity2 со следующими свойствами:
name, population, mayor
двумя разными способами (первый объект одним способом, второй другим)
1.2. sity1 добавить метод, который позволяет забирать какую-то часть населения sity2 (и соответственно добавлять к своему)

1.3. Написать функцию (вне этих объектов), которая показывает мэра города (в зависимости от объекта, переданного ей в качестве аргумента)

1.4. Создать объект president c методом changeCountryMayor(), благодаря которому он сможет менять мэра города (в зависимости от объекта, переданного в качестве аргумента)*/

var city1 = {};

	city1.name = "SPb";
	city1.population = 100000;
	city1.mayor = "Ivanoff";
		
	var city2 = {
	name: 'Moskow',
	population: 150000,
	mayor: 'Petroff',
	};
var populationMinus = city2.population - 50000;
console.log("Добавляем популяцию:", city1.population + populationMinus);


/*	function showMayor(obj) {
		console.log(obj.mayor);
	}
	showMayor(sity2);*/


// вызов функции
/*showMayor.call(city2, "New Name");
showMayor.call(city1, ["New Name", "..", ".."]);*/


function changeMayor (new_val) {
	this.mayor = new_val;
	console.log(this.mayor);

	}

// привязка контекста
var changeCity1 = changeMayor.bind(city1, "Новый мэр SPb Иван");
var changeCity2 = changeMayor.bind(city2, "Новый мэр Moskow Петр");
changeCity2();

var president = {changeCountryMayor: function(city, new_name){
	city.mayor = new_name;
}
	
};
	//president.changeCountryMayor(city2, "m name");		 
				  
	


/*Задание 2
Написать функцию, которая на вход принимает строку и подстроку и ищет ВСЕ вхождения подстроки в строку*/

var str = "qwertyqwertyqwertyqwert";
var substr = str.substring(0, 6); //qwerty
function searchString (str, substr) {
var position = 0;
var n = 0;
	while (true) {
		var foundPosition = str.indexOf(substr, position);
		if (foundPosition == -1) break;
		position = foundPosition + 1;
		n++;
		console.log(foundPosition);// позиции вхождения qwerty
		
	}
	return n;
			
}
console.log(substr, "Встречается в ", str, searchString (str, substr), "раз");




/*Задание 3 : написать функцию runCalculator():
1)уточняет у пользователя, действительно ли он хочет запустить программу:
2) в случае положительного ответа:
2.1)получат данные из функции getDataFromUser(), вида [+a, operator, +b], например [1, "+", 5]
2.2)разбивает массив на отдельные переменные
2.3)вызывает функцию operations(a, operator, b), передавая в качестве аргументов, переменные из п.2)
2.4)результат работы operations выводит пользователю (для вывода использовать alert)
3) в случае отрицательного прощается с пользователем
*/


function runCalculator(){

	var run  = confirm("Запустить программу?");
	
function getDataFromUser(){
	
 	var arr = [2, "/", 3];
	return arr;
}

		if (run === true) {
			
			var arr2 = getDataFromUser();
			var a = arr2[0];
			var znak= arr2[1];
			var b = arr2[2];
			
			alert(operations(a, znak, b));

	} else {
		
		alert("До новых встреч!");
	}


function operations(a, znak, b) {
	
	if (znak === '+') {
		
		return a + b;

		} else if (znak === '-') { 
		return a - b; 

		} else if (znak === '*') { 
		return a * b; 

		} else if (znak === '/') {
			

			if (b !== 0) {

				return a / b;
			}

			return ('Делить на ноль нельзя');
	} 
}


}

runCalculator();