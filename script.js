(function() {

const createBoard = () => {
	return { "a": ["", "", ""],
			 "b": ["", "", ""],
			 "c": ["", "", ""] }
}

function checkGame(board, user){
	let checkN = 0;
	for (i in ["a", "b", "c"]) {
		if board[i].includes("") checkN++;
	}	
	if (checkN != 2) return "It's a Tie!";
	
	for (i in ["a", "b", "c"]) {
		if (	board[i][0].length == 1 && 
				board[i][0] == board[i][1] && 
				board[i][1] == board[i][2]){
			return `${user} Wins!!`
		}
	}
	if (board["a"][0].length == 1 && 
		board["a"][0] == board["b"]{1] && 
		board["b"][1] == board["c"][2]]) {
		return `${user} Wins!`;
	}

	if (board["a"][2].length == 1 && 
		board["a"][2] == board["b"]{1] && 
		board["b"][1] == board["c"][0]]) {
		return `${user} Wins!`;
	}

}

function newGame() {
	let newPlayer = createBoard();
	console.log(newPlayer);
	newPlayer["a"][1]= "X";
	console.log(newPlayer); 
	let user1= window.prompt("X or O");
	let user2;
	if (user1 == "X") {
		user2 = "O";
	} else {
		user2 = "X";
	}

	
			
}

newGame();






})();
