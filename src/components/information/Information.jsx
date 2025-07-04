import React from 'react';
import { InformationLayout } from './InformationLayout';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

export const Information = () => {
	const dispatch = useDispatch();
	const board = useSelector((state) => state.board);
	const winner = useSelector((state) => state.winner);
	const currentPlayer = useSelector((state) => state.currentPlayer);

	const isDraw = !board.includes('') && !winner;
	const isGameEnded = !!winner;

	const resetGame = () => {
		dispatch({ type: 'RESET_GAME' });
	};
	return (
		<>
			<InformationLayout
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
				winner={winner}
				resetGame={resetGame}
			/>
		</>
	);
};

Information.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	winner: PropTypes.string,
	resetGame: PropTypes.func,
};
