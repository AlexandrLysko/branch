// в 6-м js, приватности нет, все побличное
class ClassName {
	constructor(name) { // вызывается в момент создания объекта
		this.name = name; // все свойства описываются ltcm, если нет то null
		this.val = null;
	}
	showInfo() { // описание методов
		console.log("showInfo", this);
		
	}
	
	// сеттер
	set setGetVal(val) {
		this.val = val;
		
	}
	// геттер
	get setGetVal() {
		return this.val;
		
	}
	
	static staticMethodName(val) { // делаем статич объект
		this.val = val;
		console.log("staticMethodName", val + 90);
		
	} 

}

let obj = new ClassName ();
	obj.showInfo();
	obj.setGetVal = "12";	// сеттер
	console.log("obj", obj.setGetVal); // геттер

ClassName.staticMethodName(34); // вызов статич объекта

class SomeClass extends ClassName { // наследование
		constructor(name) {
		super(name); // вызов конструктора родительского класса
		this.id = 9;
	}
	
}

var someClass = new SomeClass("someClass");
console.log(someClass);


	