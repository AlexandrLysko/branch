// es6

let name ="User";
// область видимости {}

name ="New Value";

// константа- нельзя переопределить значение
// значение присваивается в момент объявл. перем.
// 
const USER = 4;
const USER = {
	id:4,
	login: "rewaf"
};

// параметры функции по умолчанию
function summ(a, b=5) {
	return a+b;
}
console.log(summ(6));

//стрелочные функции

//(аргументы) => тело функции
let summ = (a, b) => a + b;
console.log(sum2(2,6));

//... spred / rest
// spread - разбивает итерируемый объект на отдельные элементы

let arr = [1, 3, [8, 3]];
console.log(...arr); // разбивает массив

function(arr[0], arr[1], arr[2]); // то же самое что ...arr

inArr(1, 6, [7, 9], "ewafw", null);

function getUserData() {
	let user_id = 9;
	let login = "user";
	let pwd = "7657";
	let type = "admin";
	let phone = "7876765765"
	
	return {
		user_id,//user_id: user_id
		login,// login:login
		type,
		phone,
		["admin" + login]: "value"// вычисляемое св-во
	}
}
let userData = getUserData();
console.log(userData);
//userData.user_id

