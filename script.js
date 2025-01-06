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
}

function updateDOM() {
	let boardEl = document.querySelector(".board");
	boardEl.querySelector("#a0").textContent = newPlayer["a"][0];
	boardEl.querySelector("#a1").textContent = newPlayer["a"][1];
	boardEl.querySelector("#a2").textContent = newPlayer["a"][2];
	boardEl.querySelector("#b0").textContent = newPlayer["b"][0];
	boardEl.querySelector("#b1").textContent = newPlayer["b"][1];
	boardEl.querySelector("#b2").textContent = newPlayer["b"][2];
	boardEl.querySelector("#c0").textContent = newPlayer["c"][0];
	boardEl.querySelector("#c1").textContent = newPlayer["c"][1];
	boardEl.querySelector("#c2").textContent = newPlayer["c"][2];
}

function playTurn(place, user, e) {
	let placeArr = place.split("");
	newPlayer[placeArr[0]][Number(placeArr[1])] = user;
	if (currentPlayer == "player1") {
		currentPlayer = "player2";
	} else if (currentPlayer == "player2"){
		currentPlayer = "player1";
	}
}

function endGame(result, user) {
	console.log(result);
	console.log(user);
	if (result == "Game Over" && user == "player1") {
		msgEl.textContent = user2Name + " Wins!";
	} else if (result == "Game Over" && user == "player2") {
		msgEl.textContent = user1Name + " Wins!";
	} else {
		msgEl.textContent = "It's a Tie";
	}
	currentPlayer = "";
}		
	
let currentPlayer = "";
let newPlayer, user1, user2, user1Name, user2Name, result;

const newGameButton = document.querySelector(".newGame");
const modal = document.querySelector("dialog");
const selectButton = document.querySelector(".choice");
const msgEl = document.querySelector(".result");


newGameButton.addEventListener("click", () => modal.showModal());

selectButton.addEventListener("click", (e) => {
			user1Name = document.querySelector(".p1").value;
			user2Name = document.querySelector(".p2").value;
			if (user1Name.length = 0) {
				user1Name = "Player 1";
			}
			if (user2Name.length = 0) {
				user1Name = "Player 2";
			}
		
			if (e.target.textContent == "x") {
				modal.close();
				newGame("x");
				msgEl.textContent = user1Name + "'s turn"
			} else if (e.target.textContent == "o") {
				modal.close();
				newGame("o");
				msgEl.textContent = user1Name + "'s turn"
			}
			currentPlayer = "player1";
			updateDOM()
});

const gameBoard = document.querySelector(".board");
gameBoard.addEventListener("click", (e) => {
	if (currentPlayer.length > 1 && 
		e.target.textContent.length == 0) {
			if (msgEl.textContent == user1Name + "'s turn") {
				msgEl.textContent = user2Name + "'s turn";
			} else {
				msgEl.textContent = user1Name + "'s turn";
			}	
			if (currentPlayer == "player1") {
				playTurn(e.target.id, user1, e);
				checkGame(newPlayer, user1);
			} else if (currentPlayer == "player2") {
				playTurn(e.target.id, user2, e);
				checkGame(newPlayer, user2);
			}
		}
	updateDOM();
	});
		
			






})();
