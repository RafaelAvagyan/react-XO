import React from 'react';
import { InformationLayout } from './InformationLayout';
import PropTypes from 'prop-types';

export const Information = ({
	isDraw,
	isGameEnded,
	currentPlayer,
	winner,
	resetGame,
}) => {
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
