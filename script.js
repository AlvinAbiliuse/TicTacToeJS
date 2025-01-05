(function() {

const createBoard = () => {
	return { "a": ["O", "X", "O"],
			 "b": ["O", "X", ""],
			 "c": ["O", "", "O"] }
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
			console.log(board)
			console.log("Game Over");
		} else if (	board["a"][i].length == 1 && 
				board["a"][i] == board["b"][i] &&
				board["b"][i] == board["c"][i]){
			console.log(board)
			console.log("Game Over");
		}
	}
	if (board["a"][0].length == 1 && 
		board["a"][0] == board["b"][1] && 
		board["b"][1] == board["c"][2]) {
		console.log(board)
		console.log("Game Over");
	}

	if (board["a"][2].length == 1 && 
		board["a"][2] == board["b"][1] && 
		board["b"][1] == board["c"][0]) {
		console.log(board)
		console.log("Game Over");
	}
}

function newGame() {
	let newPlayer = createBoard();
	let user1 = "X"/*window.prompt("X or O");*/
	let user2;
	if (user1 == "X") {
		user2 = "O";
	} else {
		user2 = "X";
	}
	

	checkGame(newPlayer, user1);

	
			
}

newGame();






})();
