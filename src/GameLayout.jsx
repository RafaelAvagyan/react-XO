import React from 'react';
import { Field } from './components/field/Field';
import { Information } from './components/information/Information';
import PropTypes from 'prop-types';

export const GameLayout = ({
	filed,
	isDraw,
	isGameEnded,
	handleClick,
	currentPlayer,
	winner,
	resetGame,
}) => {
	return (
		<>
			<Field filed={filed} handleClick={handleClick} />
			<Information
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
				winner={winner}
				resetGame={resetGame}
			/>
		</>
	);
};

GameLayout.propTypes = {
	filed: PropTypes.array,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	handleClick: PropTypes.func,
	currentPlayer: PropTypes.string,
	winner: PropTypes.string,
	resetGame: PropTypes.func,
};
