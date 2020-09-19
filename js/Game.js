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
				// Move token left
			}
			else if (e.key === 'ArrowRight') {
				// Move token right
			}
			else if (e.key === 'ArrowDown') {
				// Drop token
			}
		}
	}
}
