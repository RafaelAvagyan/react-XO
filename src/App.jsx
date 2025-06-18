import { useState } from 'react';
import './App.css';
import { GameLayout } from './GameLayout';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function App() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);
	const [winner, setWinner] = useState(null);

	const checkWinner = (field) => {
		for (const pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (field[a] && field[a] === field[b] && field[a] === field[c]) {
				setIsGameEnded(true);
				setWinner(field[a]);
				return;
			}
		}

		if (!field.includes('')) {
			setIsDraw(true);
		}
	};

	const handleCellClick = (index) => {
		if (!isGameEnded && field[index] === '') {
			const copyField = [...field];
			copyField[index] = currentPlayer;
			setField(copyField);

			checkWinner(copyField);

			if (!isGameEnded && !isDraw) {
				setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
			}
		}
	};

	const resetGame = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
		setWinner(null);
	};

	return (
		<>
			<GameLayout
				filed={field}
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				handleClick={handleCellClick}
				currentPlayer={currentPlayer}
				winner={winner}
				resetGame={resetGame}
			/>
		</>
	);
}

export default App;
