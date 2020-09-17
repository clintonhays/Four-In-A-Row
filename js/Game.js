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
}
