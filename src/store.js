import { createStore } from 'redux';

const initialState = {
	board: Array(9).fill(null),
	currentPlayer: 'X',
	winner: null,
};

function gameReducer(state = initialState, action) {
	switch (action.type) {
		case 'MAKE_MOVE': {
			const { index } = action.payload;
			if (state.board[index] || state.winner) return state;

			const newBoard = [...state.board];
			newBoard[index] = state.currentPlayer;

			const winner = calculateWinner(newBoard);

			return {
				...state,
				board: newBoard,
				currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
				winner,
			};
		}

		case 'RESET_GAME': {
			return initialState;
		}

		default:
			return state;
	}
}

export const store = createStore(gameReducer);

function calculateWinner(board) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let [a, b, c] of lines) {
		if (board[a] && board[a] === board[b] && board[a] === board[c]) {
			return board[a];
		}
	}

	return null;
}
