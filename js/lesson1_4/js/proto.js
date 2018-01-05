function Farm(name, human_name) { //функция конструктор
	this.name = name; //public
	this.human = new Human(human_name);
}
 function Human(name) {
	this.name = name;

}
 function AnimalsHotel() {
	 this.animals_count =[]; // k-vo animals
	 this.max_count = 3;
	 this.addAnimals = function(animal) {
		 if (this.animals.length < this.max_count) {
			 this.animals.push(animal);
			 console.log(this.animals);
		 } else {
			 console.log("Нет свободных мест");
		 }

 }

}

function Animal() {
	this.name = null;
}

function DomasticAnimal(name) {
	Animal.call(this); // наследование
	this.name = name;
}
 
var farm = new Farm("Ферма", "Human");
console.log(farm);

var cat = new DomasticAnimal("кошка");
var animalHotel = new AnimalsHotel();
animalHotel.addAnimals(cat);
console.log("animalHotel", animalHotel);

var donkey = new DomasticAnimal("Ослик");
animalHotel.addAnimals(donkey);
console.log("animalHotel", animalHotel);
