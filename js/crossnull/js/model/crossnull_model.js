/*function GameTable () {
	
}

var gameTable = new GameTable();
document.getElementById('id').addEventListener('click', gameTable.getUserInfo);


document.getElementById('start_game').addEventListener('click', getUserdata);


// getUserData
var user_name = document.getElementById('user_name').value;

var field_size = document.getElementById('checked').value;

field_size = 3;


for (var i = 0; i < cels_count; i++) {
	var sell = document.createElement('div');
	sell.classList.add('cells');
	document.getElementById.('field').appendChild(sell);
}*/


//Game
//start
//finish
////round
////finRound
//Player
//name
//symb (x | o);
//
//GameTable
//getUserInfo
//updateField


class Game {
	constructor(name) {
		this.player = null;
		this.enemy = null;
		this.field = null;
	}
	start() {
		let player_name = "Player";
		let enemy_name = "Enemy";
		let field_size = "3";
		
		this.player = new Player(player_name);
		this.enemy = new Player(enemy_name);
		this.field = new Field(field_size);
		
	}
}
	
	class Player {
		constructor(name) {
			this.name = name
		}
	}
class Field {
	
}

let game = new Game();
game.start();


