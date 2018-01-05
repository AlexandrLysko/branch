// JavaScript Document


//родительские функции - конструкторы
function FuncObjParent () {
	this.name = "FuncObjParent";
	this.parentFunc = function() {
		console.log("parentFunc FuncObjParent");
	}
}


function FuncObjParent () {
	this.name = "ProtoObjParent";

}

ProtoObjParent.prototype.parentFunc = function() {
	console.log("parentFunc ProtoObjParent");
	
}

// дочерние функции- конструкторы

function FuncObj () { // ф-ция конструктор
	FuncObjParent.call(this); // наследование в функ. стиле
	this.show = function() {
		console.log("show from funcObj");
	}
	
} // тчк зпт не ставится

function ProtoObj () {


}

ProtoObj.prototype = Object.create(ProtoObjParent);

var funcObj = new FuncObj();
var protoObj = new ProtoObj();

var funcObj2 = new FuncObj(); // добавляем еще один метод

console.log("funcObj", funcObj);
console.log("protoObj", protoObj);

funcObj.show = function () {
	console.log("show from funcObj");
};


ProtoObj.prototype.show = function () { // созд метода в прототипном стиле
	console.log("show from funcObj");
	
};

console.log("funcObj", funcObj);
console.log("protoObj", protoObj);

funcObj.parentFunc();
protoObj.parentFunc();
//funcObj.show ();
//protoObj.show ();

// 1 имя игрока обязательно(инпут имя)
// 2 размер поля по умолч 3х3
// 3 выбор противника (др. игрок (имя по умолч), компьютер)
// нажали старт все скрылось, появилось поле
// Сверстать страницу html, получ полей и отрисовка поля
// 4 


