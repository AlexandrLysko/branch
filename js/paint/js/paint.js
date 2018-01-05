// JavaScript Document
/*В js файле создать объект handlers со следующими методами:
startDraw
endDraw
drawing
erase

на canvas повесить следующие обработчики:
'mousedown' - метод handlers - startDraw
'mouseup'- метод handlers - endDraw
'mouseout' - метод handlers - endDraw
'mousemove'- метод handlers - drawing

Проверьте, чтобы методы действительно отрабатывали. Во вторник будем делать из этого мини paint. Но можете попробовать реализовать его сами до вторника (надо будет почитать про рисование canvas)*/

(function(){
	'use strict';
	var canvas = document.getElementsByTagName('canvas')[0]; // ищем первый canvas
	var handlers = {};
	
	handlers.startDraw = function() {
		console.log("Начало рисования");
		this.isDrawing = true;
		
	};
	
	handlers.endDraw = function() {
		console.log("Конец рисования");
		this.isDrawing =false;
		
	};
	
	handlers.drawing = function(event) {
		if (this.isDrawing) {
		
		console.log("Рисование");
			var context = canvas.getContext('2d');
			context.beginPath();
		//	context.fillStyle // заливка
			context.strokeStyle = document.getElementById('paint_brush_color').
			value;
			context.arc(event.offsetX, event.offsetY, document.getElementById('paint_brush_size').value, 0, Math.PI*2, false);
			context.stroke();
				
			
		} else { 
		return;
		}
			
		
	};
	
	canvas.addEventListener('mousedown', handlers.startDraw);
	canvas.addEventListener('mousemove', handlers.drawing);
	canvas.addEventListener('mouseup', handlers.endDraw);
	
	
}());