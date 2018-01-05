
// JavaScript Document
(function(global) {
	'use strict';
	var slider = {
		
		init: function(id) {
			this.elem = document.createElement('ul');// создаем ul
			document.getElementById(id).appendChild(this.elem);// вставляем его
			this.currentSlide = 0; // счеткик слайдов
			
		},
		
		addSlide: function(src, alt) {
			var li = document.createElement('li'); //создаем li
			var img = document.createElement('img');// создаем img
			img.setAttribute('src', src);// создаем src
			img.setAttribute('alt', alt);// создаем alt
			img.style.height = window.innerHeight + "px";// задаем высоту
			img.style.width = window.innerWidth + "px";// задаем ширину
			li.appendChild(img);
			this.elem.appendChild(li);
		},
		
		nextSlide: function() {
//			i = 0;
//			[li, li, li]
			if (this.curentSlide < this.allSlides.length-1) { 
			this.allSlides[this.curentSlide].classList.remove('active');// текущий актив слайд удаляем
			this.allSlides[this.curentSlide+1].classList.add('active');
			this.curentSlide++;
				
			} else {
				this.curentSlide = 0;
				this.allSlides[this.allSlides.length-1].classList.remove('active');
				this.allSlides[0].classList.add('active');
			}
		},	
		
		runSlider: function() {
			this.allSlides = document.querySelectorAll('#slider > ul > li'); // ищем нужные li создаем массив из li
			this.nextSlide();
			setInterval(this.nextSlide.bind(this), 3000); //через мс будет запускаться nextSlide
		},
		
		setSize: function() {
			var imgs = document.querySelectorAll('img');
			for(var i = 0; i < imgs.length; i++) {
				imgs[i].style.height = window.innerHeight + 'px';
				imgs[i].style.weight = window.innerWeight + 'px';
			}
			
		}
		
	};
 		slider.init('slider');
        slider.addSlide('img/1.jpg');
		slider.addSlide('img/2.jpg');
		slider.addSlide('img/3.jpg');
		slider.addSlide('img/4.jpg');
		slider.addSlide('img/5.jpg');
	    slider.runSlider();
		
		window.addEventListener('resize', slider.setSize);
	
		global.initSlider = slider.init;
		
}(window));