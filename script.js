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

function addToDom(board, result) {

}

function newGame() {
	let newPlayer = createBoard();
	let result = "";
	let user1 = "x"/*window.prompt("X or O");*/
	let user2, tt;
	if (user1 == "x") {
		user2 = "o";
	} else {
		user2 = "x";
	}

	function playTurn(place, user) {
		let placeArr = place.split(" ");
		newPlayer[placeArr[0]][Number(placeArr[1])] = user;
	}

	/*
	while (true) {
		playTurn(window.prompt("user1 turn"), user1);
		tt = checkGame(newPlayer, user1);
		if (tt != undefined) {
			console.log(tt);
			return false;
		}
	
		playTurn(window.prompt("user2 turn"), user2);
		tt = checkGame(newPlayer, user2);
		if (tt != undefined) {
			console.log(tt);
			return false;
		}
	} */
}

const newButton = document.querySelector(".newGame");
const modal = document.querySelector("dialog");
newButton.addEventListener("click", () => modal.showModal());
newGame();






})();
