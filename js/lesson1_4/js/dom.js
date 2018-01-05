// JavaScript Document
(function() {
 'use strict';
 document.getElementById('div');
	
	var div = 
		document.getElementById('div');
	console.log("div", div);
	
	var divs = document.getElementsByTagName('div');
	console.log("divs", divs);
	
	var divsByClassName = document.getElementsByClassName('div-class');
	console.log("div-class", divsByClassName);
	
	var querySelector = document.querySelectorA('li a');//1 эл-т
	
	var querySelectorAll = document.querySelectorAll('li a');// все
	
	var divChildren = document.getElementById('div').children;
	console.log("divChildren", divChildren);
	
	div.remove(); // удал div из html
	
	div.hasAttribute('id');
	console.log(div.hasAttribute('id'));
	
	div.setAttribute("id", "div_id");
	
	div.getAttribute("id");
	console.log(div.div.getAttribute("id"));
	
	div.removeAttribute("id");
	
	div.style.color = "red";
	
	div.classList.add("css class name");
	div.classList.remove("css class name");
	div.classList.toggle("css class name");// добавл если не существует, удал существующие
	

 }());