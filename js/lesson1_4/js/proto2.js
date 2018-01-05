// ссылка__proto__
var animals = {
	run: function() {
		console.log ("Run");
	},
	eat: function() {
	console.log("Eat");
},
	name: "animals",
}
var domastic = {
	sleep: function() {
		console.log("Sleep at home");
	}
}
domastic.__proto__ = animals;
//animals это прототип для domastic
// или domastic прототипно наследуется
domastic.run();
console.log("domastic", domastic);

//obj.hasOwnProperty(property)

for (var key in domastic) {
	if (domastic.hasOwnProperty(key)) {
	console.log("domastic has't prop", key);
	}
	console.log("domastic has't prop", key);
}

//animals.toString();
animals = Object.create(null); // создание объекта без свойств и методов
console.log(animals);

// создание классов с использованием прототипов
// 1. создать функцию конструктор(с описанными свойствами)
// 2. необходимые методы --> в prototype

function Car(price) {
	this.price = price;
	var color = "blue"; // не доступна из вне
	this._color = "blue"; // _условно приватное
}

Car.prototype.move = function() {
	console.log("move");
}

Car.prototype.changeColor = function(new_color) {
	this._color = nev_color;
	console.log("changeColor", this);
}

function LittleCar() {
	
}
LittleCar.prototype.sale = function() {
	console.log("sale");
}
var car = new Car(400500);
car.move();
console.log(car);

// наследование

LittleCar.prototype = Object.create(Car);
console.log(new LittleCar());