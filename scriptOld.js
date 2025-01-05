const createBoard = () => {
	return { first: [ "X", "O", "O"],
			second: [ "O", "X", "O"],
			third:  [ "O", "X", "X"] }
}

const checkGame = (board) => {
	function result(arr) {
		if (arr[0] === arr[1] && arr[1] === arr[2]) {
			return 1;
		} else {
			return 0;
		}
	}
	for (i = 0; i < 3; i++) {
		let horizontalArr = new Array;
		let verticalArr = new Array;
		for (j = 0; j < 3; j++) {
			horizontalArr.push(board[Object.keys(board)[i]][j]);
			verticalArr.push(board[Object.keys(board)[j]][i]);
		}
		let tempArr = board[Object.keys(board)[i]]
		if (result(horizontalArr) == 1 ||
			 result(verticalArr) == 1) {
			console.log("Game Over");
		} else {
			console.log("continue");
		}
	}
	let firstDiagonal = new Array;
	let secondDiagonal = new Array;
	for (i = 0; i < 3; i++) {
		firstDiagonal.push(board[Object.keys(board)[i]][i]);
		secondDiagonal.push(board[Object.keys(board)[i]][[2,1,0][i]]);

	}
	if (result(firstDiagonal) == 1 ||
		 result(secondDiagonal == 1)) {
		console.log("Game Over");
		return "Game Over";
	} else {
		console.log("continue");
	}
	
}

let n = 0 	
while (n++ < 10) {
	let newGame = createBoard();
	let user1 = "X";
	let user2 = "O";
	console.log(checkGame(newGame));
}


