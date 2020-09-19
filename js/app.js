const game = new Game();

const beginGameButton = document.getElementById('begin-game');
const playArea = document.getElementById('play-area');

/**
 * Listens for click on `#begin-game`
 * Calls startGame() on game object
 */

beginGameButton.addEventListener('click', function () {
	game.startGame();

	this.style.display = 'none';
	playArea.style.opacity = '1';
});

/**
 * Listens for keyDown to move and drop token
 * Calls handleKeydown() on game object
 */

document.addEventListener('keydown', (e) => {
	game.handleKeydown(e);
});
