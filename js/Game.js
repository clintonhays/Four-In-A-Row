class Game {
	constructor () {
		this.board = new Board();
		this.players = this.createPlayers();
		this.ready = false;
	}

	/**
	 * returns active player
	 * @returns {object} player - active player
	 */

	get activePlayer () {
		return this.players.find((player) => player.active);
	}

	/**
     * Create 2 player object
     * @return {Array}  An array of two Player objects
     */

	createPlayers () {
		const players = [ new Player('One', 1, '#e15258', true), new Player('Two', 2, '#e59a13') ];
		return players;
	}

	/**
	 * 
	 * Initializes game
	 */

	startGame () {
		this.board.drawHTMLBoard();
		this.activePlayer.activeToken.drawHTMLToken();
		this.ready = true;
	}

	/**
	 * Branches code dependent on user's key press
	 * @param {Object} e - Keydown event object
	 */

	handleKeydown (e) {
		if (this.ready) {
			if (e.key === 'ArrowLeft') {
				this.activePlayer.activeToken.moveLeft();
				console.log(e.key);
			}
			else if (e.key === 'ArrowRight') {
				this.activePlayer.activeToken.moveRight(this.board.columns);
				console.log(e.key);
			}
			else if (e.key === 'ArrowDown') {
				this.playToken();
				console.log(e.key);
			}
		}
	}

	playToken () {
		let spaces = this.board.spaces;
		let activeToken = this.activePlayer.activeToken;
		let targetColumn = spaces[activeToken.columnLocation];
		let targetSpace = null;

		for (let space of targetColumn) {
			if (space.token === null) {
				targetSpace = space;
			}
		}

		if (targetSpace !== null) {
			game.ready = false;
			activeToken.drop(targetSpace);
		}
	}
}
