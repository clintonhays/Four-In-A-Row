class Player {
	constructor (name, id, color, active = false) {
		this.name = name;
		this.id = id;
		this.color = color;
		this.active = active;
		this.tokens = this.createTokens(21);
	}

	/**
     * 
     * @param {integer} num - number of tokens created for each player
     * @returns {array}  tokens - an array of new token objects
     */

	createTokens (num) {
		const tokens = [];
		for (let i = 0; i < num; i++) {
			let token = new Token(i, this);
			tokens.push(token);
		}
		return tokens;
	}

	/**
	 * @returns {array}	tokens with false in dropped property
	 */

	get unusedTokens () {
		return this.tokens.filter((token) => !token.dropped);
	}

	/**
	 * gets first unused token from unusedToken array
	 */

	get activeToken () {
		return this.unusedTokens[0];
	}

	/**
	 * Check if a player has any undropped tokens left
	 * @return {Boolean} 
	 */

	checkTokens () {
		return this.unusedTokens.length == 0 ? false : true;
	}
}
