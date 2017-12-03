// JavaScript Document
"use strict";
/*1.Написать функцию calc(a, b, operator), которая в зависимости от оператора будет складывать, умножать, вычитать или делить.
Не забывайте про проверку типа введенных данных, и про деление на 0 (на 0 делить нельзя)*/


function calc (a, b, operator){
	if (typeof a !== "number" && typeof b !== "number") {
		console.log("Error");
		
	} else if (operator === '+') {
		var result = a + b;
		console.log("Cумма");
				
	} else if (operator === '-') {
		var result = a - b;
		console.log("Вычитаем");
		
		
	} else if (operator === '*') {
		var result = a * b;
		console.log("Умножаем");
		
		
	} else if (operator === '/' && operator !== 0) {
		var result = a / b;
		console.log("Делим");
		
	}
	
	console.log(result); 
		return;
}

calc(5, 2, '-');


/*2. Дано целое число n. Вычислите сумму его цифр. Использовать только рекурсию.*/


function digit (n) {
  var cif = "" + n
  var sum = 0
  for (var i = 0; i < cif.length; i++) 
    sum += +cif[i]
  console.log(sum); 
}

digit(255)



/*3. (на замыкание)
Написать функцию, которая возвращает новую функцию, которая увеличивает/уменьшает переданное число на указанный при карировании шаг.*/


var a = 10; // число
    var create = function(name) {
       return function() {
          console.log(a + name);
       }
    }
    var result = create (2); // шаг
    result();


