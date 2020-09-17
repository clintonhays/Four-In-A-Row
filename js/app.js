const game = new Game();

const beginGameButton = document.getElementById('begin-game');
const playArea = document.getElementById('play-area');

/**
 * Listens for click on `#begin-game` and calls startGame() on game object
 */

beginGameButton.addEventListener('click', function () {
	game.startGame();

	this.style.display = 'none';
	playArea.style.opacity = '1';
});
