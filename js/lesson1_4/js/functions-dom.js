// JavaScript Document
"use strict";
/*1.Написать функцию calc(a, b, operator), которая в зависимости от оператора будет складывать, умножать, вычитать или делить.
Не забывайте про проверку типа введенных данных, и про деление на 0 (на 0 делить нельзя)*/

function calc (a, b, operator){
	var result;
	var metod;
	if (typeof a !== "number" && typeof b !== "number") {
		console.log("Error");
		
	} else if (operator === '+') {
		result = a + b;
		metod = "(Cумма)";
				
	} else if (operator === '-') {
		result = a - b;
		metod = "(Вычитаем)";
		
		
	} else if (operator === '*') {
		result = a * b;
		metod = "(Умножаем)";
		
		
	} else if (operator === '/' && operator !== 0) {
		result = a / b;
		metod = "(Делим)";
		
	} 
	
	console.log("Задание 1: " + result + " " + metod); 
		
}

calc(5, 2, '-');


/*2. Дано целое число n. Вычислите сумму его цифр. Использовать только рекурсию.*/

var digit = "125";
digit.split(1);
var a = digit[0] + digit[1];
console.log(a);

/*function sum(digit) {
	var a = digit[0] + digit[1];
	digit.splice(0, 1);
	
	if (digit.length > 0) {
		sum(digit);
	}
}  console.log(sum);
   sum(125);*/

/*function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

alert( sumTo(100) );*/


/*3. (на замыкание)
Написать функцию, которая возвращает новую функцию, которая увеличивает/уменьшает переданное число на указанный при карировании шаг.*/

var a = 14; // число
var create = function(x) {
   return function() {
	  console.log(a + x);
   }
}
var result = create (2); // шаг
result();


