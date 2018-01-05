// JavaScript Document
//'use strict';
console.log("Функции");


// именованые функции
/*function имяФункции (параметр1, параметр2...) {
	код... ;
	return выражение;
}

имяФункции();*/ // вызов функции

function printFunction () {
	console.log("printFunction", printFunction);
}

printFunction();

function helloUser (user_name, arg2) {
	console.log("Hello ", user_name, arg2);
}
helloUser ("Вася", "Петр");


/*function showAllUsers() {
	for (var i = 0; i < arguments.lenght; i++) {
		console.log('user' + (i+1), arguments[i]);
	}
	
}

showAllUsers("вася", "Петя", "Гриша");*/


function printUserInfo(name, surname) {
	surname = surname || "фамилия не известна"; // знач по умолчанию
	console.log(name, surname);
}

printUserInfo("Ivan");


function summIt(a, b) {
	console.log(a+b);
	
}
summIt(6, 2);


function checkType (a, b){
	if (typeof a !== "number" && typeof b !== "number") { // ПРОВЕРКА ЧИСЛО ИЛИ ТЕКСТ
		console.log("Error");
		
	} else {
		console.log("Num");
		return; // конец функции
	}
}
checkType("kjhgkg", ",JKJK");

var a = 21;
var b = 178;
if (typeof a === "number" && typeof b === "number") {
	result = a + b;
} else {
	result = "что-то не число"
}
var result = a + b;
console.log(result);




// анонимные функции

/*var имяПеременной = function (параметр1, параметр2...) {
	код... ;
	return выражение;
}*/



var evenNum = function(num) {
	if (num%2 === 0) {
		return 'четное';
	} else {
		return 'нечетное';
	}
}
console.log(evenNum(9));




function pow(x, n){
	if (n !== 1) {
	return x * pow(x, n-1)
	} else {
		return x;
	}
	
}
console.log(pow(5, 3)); // 8 в 3 степени
console.log(pow(2, 3)); // 2 в 3 степени


// замыкание

/*function имяФункции (аргумент) {
	var имяПеременной;
	function имяФункции2() {
		имеет доступ и к параметру 1 и к переменной
	}
}*/

function counter() {
	var num = 0;
	return function() {
		return num++; //+1 и запоминает число
	}
}
var count = counter();

console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());




// Контекст вызова

var user_name = 'John';
function showName() {
	console.log(this.user_name);
	this.name = "new name";
	console.log(this.name)
}
showName();



// самовызывающаяся функция

(function() {
	'use strict';
	
	//код
	
	
}();

