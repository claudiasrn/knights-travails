function knightMoves(start, end) {
	let queue = [[start]];
	let visited = new Set();
	visited.add(start.toString());

	while (queue.length > 0) {
		let path = queue.shift();
		let current = path[path.length - 1];

		if (current[0] === end[0] && current[1] === end[1]) {
			return path;
		}

		let moves = getPossibleMoves(current);

		for (let move of moves) {
			if (!visited.has(move.toString())) {
				visited.add(move.toString());
				let newPath = [...path, move];
				queue.push(newPath);
			}
		}
	}

	function getPossibleMoves(square) {
		let possibleMoves = [];

		if (square[0] - 1 >= 0) {
			if (square[1] - 2 >= 0) {
				possibleMoves.push([square[0] - 1, square[1] - 2]);
			}

			if (square[1] + 2 <= 7) {
				possibleMoves.push([square[0] - 1, square[1] + 2]);
			}

			if (square[0] - 2 >= 0) {
				if (square[1] - 1 >= 0) {
					possibleMoves.push([square[0] - 2, square[1] - 1]);
				}

				if (square[1] + 1 <= 7) {
					possibleMoves.push([square[0] - 2, square[1] + 1]);
				}
			}
		}

		if (square[0] + 1 <= 7) {
			if (square[1] - 2 >= 0) {
				possibleMoves.push([square[0] + 1, square[1] - 2]);
			}

			if (square[1] + 2 <= 7) {
				possibleMoves.push([square[0] + 1, square[1] + 2]);
			}

			if (square[0] + 2 <= 7) {
				if (square[1] - 1 >= 0) {
					possibleMoves.push([square[0] + 2, square[1] - 1]);
				}

				if (square[1] + 1 <= 7) {
					possibleMoves.push([square[0] + 2, square[1] + 1]);
				}
			}
		}

		return possibleMoves;
	}
}

function printKnightPath(start, end) {
    const path = knightMoves(start, end);
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    path.forEach((square) => console.log(square));
}

printKnightPath([0, 0], [1, 2]);
printKnightPath([0, 0], [3, 3]);
printKnightPath([3, 3], [0, 0]);
printKnightPath([0, 0], [7, 7]);