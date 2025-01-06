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
	if (checkN == 0) console.log("It's a Tie!");
	
	for (i in ["a", "b", "c"]) {
		if (	board[Object.keys(board)[i]][0].length == 1 && 
				board[Object.keys(board)[i]][0] == board[Object.keys(board)[i]][1] && 
				board[Object.keys(board)[i]][1] == board[Object.keys(board)[i]][2]){
			return "Game Over" ;
		} else if (	board["a"][i].length == 1 && 
				board["a"][i] == board["b"][i] &&
				board["b"][i] == board["c"][i]){
			return "Game Over";
		}
	}
	if (board["a"][0].length == 1 && 
		board["a"][0] == board["b"][1] && 
		board["b"][1] == board["c"][2]) {
		return "Game Over";
	}

	if (board["a"][2].length == 1 && 
		board["a"][2] == board["b"][1] && 
		board["b"][1] == board["c"][0]) {
		return "Game Over";
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

function playTurn(place, user) {
	let placeArr = place.split("");
	newPlayer[placeArr[0]][Number(placeArr[1])] = user;
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

let currentPlayer = "user1";
let newPlayer, user1, user2, result;

const newGameButton = document.querySelector(".newGame");
const modal = document.querySelector("dialog");
const selectButton = document.querySelector(".choice");

newGameButton.addEventListener("click", () => modal.showModal());

selectButton.addEventListener("click", (e) => {
			if (e.target.textContent == "x") {
				modal.close();
				newGame("x");
			} else if (e.target.textContent == "o") {
				modal.close();
				newGame("o");
			}
});
			






})();
