// JavaScript Document
/*$(document).ready(function(){
	jQuery(elem) // элемент html
		.method()
		.method()
		.method();
//	$("#elem_id") все как в Css файле
//	$(".class-name")
//	$("p, ul")
//	$("#id > ul > li")
	
//	var div = document.getElementById("elem_id"); запись в переменную
//	$("#elem_id") тоже самое
});*/

/*$.ajax({
	url: "tst_ajax.js",
	data: {key: val},
	type: "POST", // GET
	success: function(data) {
		
	},
	
	error: function(data) {
		
	},
	async: false, // запрос станет синхронным и пользователь не сможет ничего делать пока не загрузится
	beforeSend: function() { // функция отработает до отправки
		
	},
	
	dataType: "xml, json, script, or html"
	
	
});*/

/*document.getElementById('ajax').addEventListener('click', function() {
	$ajax({
		url: "tst_ajax.js",
		dataType: "script",
		success: function(data) {
			
		}
	});
});*/


$('#ajax').load('tst_ajax.html');





