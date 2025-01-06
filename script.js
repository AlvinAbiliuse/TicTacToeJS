(function() {

const createBoard = () => {
	return { "a": ["", "", ""],
			 "b": ["", "", ""],
			 "c": ["", "", ""] }
}

function checkGame(board, user){
	let checkN = 0;
	for (i in ["a", "b", "c"]) {
		if (board[Object.keys(board)[i]].includes("")) checkN++;
	}
	if (checkN == 0) endGame("It's a Tie!", currentPlayer);
	
	for (i in ["a", "b", "c"]) {
		if (	board[Object.keys(board)[i]][0].length == 1 && 
				board[Object.keys(board)[i]][0] == board[Object.keys(board)[i]][1] && 
				board[Object.keys(board)[i]][1] == board[Object.keys(board)[i]][2]){
			endGame("Game Over", currentPlayer) ;
		} else if (	board["a"][i].length == 1 && 
				board["a"][i] == board["b"][i] &&
				board["b"][i] == board["c"][i]){
			endGame("Game Over", currentPlayer);
		}
	}
	if (board["a"][0].length == 1 && 
		board["a"][0] == board["b"][1] && 
		board["b"][1] == board["c"][2]) {
		endGame("Game Over", currentPlayer);
	}

	if (board["a"][2].length == 1 && 
		board["a"][2] == board["b"][1] && 
		board["b"][1] == board["c"][0]) {
		endGame("Game Over", currentPlayer);
	}
}

function newGame(user) {
	newPlayer = createBoard();
	user1 = user /* value passed from the event Listener */
	result = ""
	if (user1 == "x") {
		user2 = "o";
	} else {
		user2 = "x";
	}
	console.log(newPlayer);
	console.log(user1);
	console.log(user2);
	console.log(result);
}

function updateDOM() {


}

function playTurn(place, user, e) {
	let placeArr = place.split("");
	newPlayer[placeArr[0]][Number(placeArr[1])] = user;
	if (currentPlayer == "player1") {
		console.log(e.target.id);
		e.target.textContent = user;
	} else {
		console.log(e.target.id);
		e.target.textContent = user;
	}
}

/*
	let n = 0
	while (true) {
		let result = document.querySelector(".result");
		
		result.textContent = "Player 1 turn"
		playTurn(window.prompt("Player 1 turn"), user1);
		tt = checkGame(newPlayer, user1);
		if (tt != undefined) {
			if (tt == "Game Over") {
				result.textContent = "Player 1 Wins!"
			} else {
				result.textContent = tt;
			}
			return false;
		}
		result.textContent = "Player 2 turn"	
		playTurn(window.prompt("Player 2 turn"), user2);
		tt = checkGame(newPlayer, user2);
		if (tt != undefined) {
			if (tt == "Game Over") {
				result.textContent = "Player 2 Wins!"
			} else {
				result.textContent = tt;	
			}
			return false;
		}
	}
}

*/
function endGame(result, user) {
	console.log(result);
	console.log(user);
	if (result == "Game Over" && user == "player1") {
		result.textContent = "Player 1 Wins!";
	} else if (result == "Game Over" && user == "player2") {
		result.textContent = "Player 2 Wins!";
	} else {
		result.textContent = result;
	}
	currentPlayer = "";
}		
	
let currentPlayer = "";
let newPlayer, user1, user2, result;

const newGameButton = document.querySelector(".newGame");
const modal = document.querySelector("dialog");
const selectButton = document.querySelector(".choice");
const msgEl = document.querySelector(".result");


newGameButton.addEventListener("click", () => modal.showModal());

selectButton.addEventListener("click", (e) => {
			if (e.target.textContent == "x") {
				modal.close();
				newGame("x");
				msgEl.textContent = "Player 1 turn"
			} else if (e.target.textContent == "o") {
				modal.close();
				newGame("o");
				msgEl.textContent = "Player 1 turn"
			}
			currentPlayer = "player1";
});

const gameBoard = document.querySelector(".board");
gameBoard.addEventListener("click", (e) => {
	if (currentPlayer.length > 1 && 
		e.target.textContent.length == 0) {
			if (msgEl.textContent == "Player 1 turn") {
				msgEl.textContent = "Player 2 turn";
			} else {
				msgEl.textContent = "Player 1 turn";
			}	
			if (currentPlayer == "player1") {
				playTurn(e.target.id, user1, e);
				checkGame(newPlayer, user1);
				currentPlayer = "player2";
			} else if (currentPlayer == "player2") {
				playTurn(e.target.id, user2, e);
				checkGame(newPlayer, user2);
				currentPlayer = "player1";
			}
		}
	});
		
			






})();
