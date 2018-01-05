// комментарий
/*комментаоий*/
'use strict';
console.log("lesson1", "info"); //отладка для консоли
var varName; //Создание переменной
varName = 45; //присвоение значения переменной
varName = "new val"; //переопределение значения переменной
console.log(window);

let varName2 = "value"; // ver 6.0
let var1, var2, var3 = "value";

//data types простые
let str ="Строковой \n тип 'строка в кавычках' данных";
str = "56"
console.log("str:", str);

//логический тип
let boo = true;
let boo2 = false;
//К false преобразуются
//0
//""
//null
//undefined
// все остальное к true
//проверяем:
console.log(0 == false);
console.log(" " == false);
console.log("" == false);

//числа
//isNan(someVar);
//true - если значение является NaN или не может быть преобразовано в число
//false - если значение или число не может быть в него преобразовано
console.log("56", isNaN(56));
console.log("'56'", isNaN(56));
console.log("www", isNaN('www'));
console.log("false", isNaN(false));
console.log("true", isNaN(true));
console.log("", isNaN(""));

//null
//undefined

let nullVar = null;
let undefVar;
let someNum =78; //23.56576576

//typeof имя переменной
console.log("typeof str: ", typeof str);
console.log("typeof nullVar: ", typeof nullVar);

//операторы
// арифметические
//+- * / % - делегие по модулю (остаток от деления)
console.log("56" - 9);// преобр в число
console.log("wetw34t" - 9);
console.log("56" + 9); // склеивание
console.log("wetw34t" + "wetw34t");// склеивание
console.log("wetw34t" - "wetw34t");
console.log(4 ** 2);// степень
console.log("0.1 + 0.2 =", 0.1 + 0.2);
console.log(999999999999999);
// операторы присваивания
// = присваивание
// += -= *= /= %=
let a = 30;
a = a + 10;
// a=a+10; a +=10;

console.log(10%3); //1   10/3=9 остаток 1


// операторы сравнения
// == равенство
// != неравенство
// === идентичность
// !== неидентичность
console.log("==", 0 == false); // равно
console.log("===", 0 === false); // идентично
// >
// <
// >=
// <=
console.log(3 > 6);
// инкремент и декремент (увелич и уменьш число на 1)
//++a -префиксный инкремент
// a++ постфиксный инкремент

// --a префиксный декремент
// a-- постфиксный декремент

let x = 1;
let y = 9;
console.log (x++);
console.log (y++, y, ++y);

// тернарный оператор "?" условие ? значение1: значение2
//Если условие верно (true), вернет значение1, ксли не верно (false) -значение2

/*let x = 2;
let y = 9;
let result = x < y ? x - y : x + y;
console.log("result = ", result);*/

let now =new Date ();
console.log("now:", now);
let sec = now.getSeconds();
let month = now.getMonth();
console.log("month: ", month);
// месяцы с 0 начинаются

// в нач кажд часа в теч 3 мин зеленый, в теч 1мин желтый, и 1 мин красный и по кругу. 
//Какой цвет горит  в данный момент (сек)

/*
0 1 2 - ззеленый
3 -желтый
4 - красный
*/


/*let res = sec%5 >= 0 && sec%5 <3 ? "green" : sec%5 === 3 ? "yellow" :
"red";
console.log(sec, res);

console.log("%c%s", "color:red; font-size:18px;"res);*/












