import React from 'react';
import PropTypes from 'prop-types';

export const InformationLayout = ({
	isDraw,
	isGameEnded,
	currentPlayer,
	winner,
	resetGame,
}) => {
	let status;
	if (isDraw) {
		status = 'Ничья';
	} else if (isGameEnded) {
		status = `Победа: ${winner}`;
	} else {
		status = `Ходит: ${currentPlayer}`;
	}

	return (
		<div className="status">
			<p>{status}</p>
			{(isGameEnded || isDraw) && (
				<button onClick={resetGame}>Начать заново</button>
			)}
		</div>
	);
};

InformationLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	winner: PropTypes.string,
	resetGame: PropTypes.func,
};
