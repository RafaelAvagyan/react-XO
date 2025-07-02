import './App.css';
import { GameLayout } from './GameLayout';

function App({ state, dispatch }) {
	const handleCellClick = (index) => {
		dispatch({ type: 'MAKE_MOVE', payload: { index } });
	};

	const resetGame = () => {
		dispatch({ type: 'RESET_GAME' });
	};

	return (
		<GameLayout
			filed={state.board}
			isDraw={!state.board.includes('') && !state.winner}
			isGameEnded={!!state.winner}
			handleClick={handleCellClick}
			currentPlayer={state.currentPlayer}
			winner={state.winner}
			resetGame={resetGame}
		/>
	);
}

export default App;
