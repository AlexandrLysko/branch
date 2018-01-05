// JavaScript Document
//Массивы это объекты чтобы хранить пронумер. значения
var arrName = []; // пустой массив
var pictures = ['forest', 'sky', 'ocean'];
console.log('pictures', pictures);

var firstElem = pictures[0];
var secondElem = pictures[1];
var thirdElem = pictures[2];

console.log(firstElem, secondElem, thirdElem);

pictures[0] = "new picture";

pictures[5] = "new elem";

console.log('pictures', typeof pictures[4]);

var picturesLenght = pictures.lenght;
console.log ("picturesLenght", picturesLenght);

var lastElem = pictures.pop(); // удаляет посл элемент
pictures.push("new elem"); //добавл в конец массива
console.log('pictures', pictures);

pictures.shift(); // удал. первый элемент
pictures.unshift('new first elem'); // добавляет элемент

var str = "val1, val2, val3";
var arrFromStr = str.split(', ');
console.log('arrFromStr', arrFromStr);

pictures = ['forest', 'sky', 'ocean'];
//pictures.splice(index[, delCount, elem1...elemN]);

console.log(pictures.splice(1), pictures); //удаляет элем массива и возвращает его

var numArr = [1, 2, 3];
numArr.reverse(); // изм порядок массива наоборот
console.log(numArr);

/*var matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
	
];*/

var matrix = [1, 6, 3];
var matrix2 =	[4, 5, 6];
var matrix3 =matrix.concat(matrix2, matrix);
console.log(matrix3);


// \\ -or && -and ! -not

//var x = 8;
//var y = 2;
//(x<y) || (x === y)




/*let z;
if (x === 2) {
	z = x + y;
	console.log(z); }

else if (x === 7) {
	z = x - y;	
}
else {
	z = x * y;
}
console.log(x)*/




/*switch(x) {
	case val1:
		//code;
    case val2:
		//code;
    case val3:
		//code;
		
}*/

var str1 = "string";
switch(str1) {
	case "12121":
	console.log ("21212");
	case "string":
	console.log("string");
	case "not str":
	console.log("not string");
	break;
	default:
	console.log("default code");
}



var yearsTime;

var currentDate = new Date();
var currentMonth = currentDate.getMonth();

if ((currentMonth <= 1) || (currentMonth === 11)) {
	yearsTime = "wint";
	
} else if ((currentMonth <= 4) && (currentMonth >= 2))
	{
		yearsTime = "spr";
		
} else if ((currentMonth <= 7) && (currentMonth >= 5))
		
   { 
	   yearsTime = "sum";
	   
   } else {
	   
	   yearsTime = "auth";
	   
   }
console.log("yearsTime: ", yearsTime);

var  yearsTime;
var currentDate = new Date();
var currentMonth = currentDate.getMonth();

// Циклические операторы

// while (cond) {
//code;
//while cond == true;
//}

var pictures = 5;
while (pictures) {
	pictures--; // 5-1=4
	console.log("pictures", pictures);
}

var pictures = 1;
while (pictures < 6) {
	pictures++; //1+1=2
	console.log("pictures", pictures);
}

/*do {
	//code;
	//while cond == true
	
} while(cond);*/

var pictures = 10;

do {
	console.log("iter");
} while (0);

do {
	pictures--;
	console.log("pictures ", pictures);
	
} while (pictures);



var arr = [1, 3, 6, 7, 90];

var i = 0;

while (i < arr.lenght-1) {
	console.log(arr[i]);
	i++;
	
}

//for (;;) {
//code;
//while cond == true
//}


for (var j = 0; j < arr.lenght; j += 10) {
	 (arr[j] += 2);
	
}
console.log(arr);






