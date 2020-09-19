class Token {
	constructor (index, owner) {
		this.owner = owner;
		this.id = `token-${index}-${owner.id}`;
		this.dropped = false;
		this.columnLocation = 0;
	}

	/**
	 * Gets associated htmlToken
	 * @return {element}	HTML element associated with token object
	 */

	get htmlToken () {
		return document.getElementById(this.id);
	}

	/**
	 * Gets left offset of HTML element
	 * @return {number}	Left offset of token object's htmlToken
	 */

	get offsetLeft () {
		return this.htmlToken.offsetLeft;
	}

	/**
	 * Draws new HTML token
	 */

	drawHTMLToken () {
		const token = document.createElement('div');
		document.getElementById('game-board-underlay').appendChild(token);
		token.setAttribute('id', this.id);
		token.setAttribute('class', 'token');
		token.style.backgroundColor = this.owner.color;
	}

	/**
	 * Moves token one column left
	 */

	moveLeft () {
		if (this.columnLocation > 0) {
			this.htmlToken.style.left = `${this.offsetLeft - 76}px`;
			this.columnLocation -= 1;
		}
	}

	/**
	 * Moves token one column right
	 */

	moveRight (columns) {
		if (this.columnLocation < columns - 1) {
			this.htmlToken.style.left = `${this.offsetLeft + 76}px`;
			this.columnLocation += 1;
			console.log('right');
		}
	}

	/**
	 * Drops token to bottom of current column
	 * @param {Object}		target - Targeted space for dropped token
	 * @param {function}	reset - The reset function to call after drop animation
	 */
	// prettier-ignore
	drop (target, reset) {
		this.dropped = true;

		$(this.htmlToken).animate({
			top: (target.y * target.diameter)
		}, 750, 'easeOutBounce', reset);
	}
}
