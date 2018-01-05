// JavaScript Document

//---------------------Модальные окна
(function)() {
	'use strict';
	//var arr = [2, 5, 8, 'str', 45];
	//arr.includes('45'); // определяет, есть ли значение в массиве
	// alert('message);
	// console.log("after alert")
	// promt("title", "text") ответ польз-ля
	//confirm() true fault
	var promtRes = promt("Enter SMTh", " ");
	console.log("promptRes", promptRes, typeof promptRes );
	// prompt возвращает то что ввел пользовавтель, либо null
	var num = +"34"; // перевод в число
	
	var str = "12.6m 78 s";
	parseInt();//
	parseFloat();
	
	
	//---------------------СТРОКИ
	
	
	(function)() {
	'use strict';
		
		var str = "String";
		str ="Str \"hunior\"  ing";
		str = "Str with \n";
		
		// методы и свойства строкж
		// 1 stringName.lenght - длина строки
		str = "Stringt";
		console.log("длина строки str = ", str.lenght);
		// str.charAt оьращение к символу
		console.log("str.charAt(3)", str.charAt(3));
		console.log("str.[3]", str.[3]);
		// stringName.indexOf(searchvalue,start); позиция символа
		console.log(indexOf("t", 3));
		// stringName.toUpperCase();
		// stringName.toULoverCase();
		console.log(str.toLowerCase(), str);
		console.log(str[3].toUpperCase(), str);
		
		//взятие подстроки
		// stringName.substr(start_index [, lenght]) вернет строку из lenght начиная со start
		str = "Stringt";
		console.log(str.substr(-2, 3));
		// stringName.substring(start_index [, end]) вернет строку от и до. Не раб с отриц значениями
		
		// stringName.slice(start [, end]) 
		
		// сравнение строк
		// stringName.l
		str ="Stringt";
		var str1 = 'Str';
		console.log(str.localeCompare(str1));
		// 1
		// -1
		// 0
		
	}());
	
	
	
	
		