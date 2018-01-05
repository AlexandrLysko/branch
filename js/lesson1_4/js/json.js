// JavaScript Document
(function() {
 'use strict';
	
	//json текстовый формат обмена данными
	
//	массивы
//	объекты
//	строки в ""
//	числа
//	true/false
//	null
	
//	JSON.parse - читает объекты из строки формата JSON
//	JSON.stringify - превращает объекты json в строку
	
//	'{"name": "Ivan"}'
	
//	{
//		name: "Ivan"
//	}
// 
//	JSON.parse (str[reviever])
	var jsonStr = '{"name": "Ivan"}';
	var res = JSON.parse(jsonStr);
	console.log(res);
	
	var jsonStr = '{"name": "Ivan", "login": "user"}';
	var obj =JSON.parse(jsonStr, function(key, value) {
		if(key === "login") {
			return "new login";
		} else {
			return value;
		}
	});
	
	var data ={
	name: "Oleg"
};
//	deta = 4;
//	data =true;
//	data "Str";
//	data [45, 90, 23];
	
var jsonRes = JSON.stringify(data);
console.log(jsonRes);
	
	data = {
	name: "Oleg",
		login: "user"
	};
	
	jsonRes = JSON.stringify(data, ["login", "name"]);
		console.log(jsonRes);
	
	
	
 }());




