(function() {
 'use strict';
	document.getElementById("start_btn").addEventListener("click", startGame);
	function getDataFromUser() {
		var player_name = "Player";
		var enemy_name = "Enemy";
		var field_size = "3";
		
		return {
			player_name: player_name,
			enemy_name: enemy_name,
			field_size: field_size
		}
		
	}
	
	function startGame() {
		var data = getDataFromUser() {
			drawField(data.field_size);
		}
		
		function drawField(field_size) {
			
		}
	}
 
 }());