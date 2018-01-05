// JavaScript Document
(function() {
	'use strict';
	var obj ={};
	var user = {};
	user.login = "user1";// создается св-во login со значением user1
	console.log(user.login);
	user.email = "user1@email.ru";
	console.log(user.email);
	//delete user.email; // удаляет свойство
	console.log(user.email);
	
	//in для проверки свойства в объекте
	
	if ("email" in user) {
		console.log("user.email", user.email);
	}
	
}());

// обращение к свойству через []
console.log(user['login']);
var propName = 'login';
console.log(user[propName]);

user = {
	имя_свойства: значение,
	имя_свойства: значение,
	имя_свойства: значение,
};


var size = 9;
var otherSize =size;
console.log("size=", size, "otherSize=", otherSize);

var horse = {
	size: 'big'
}
var pony = horse; {
	size: 'big'
}

user = {
	login: "user1",
	introdusing: function() {
		console.log("this", this);
		console.log(this.name);
	}
}
user.introdusing();
