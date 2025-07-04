import React from 'react';
import { FieldLayout } from './FieldLayout';
import styles from './Field.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

export const Field = () => {
	const dispatch = useDispatch();
	const field = useSelector((state) => state.board);

	const handleClick = (index) => {
		dispatch({ type: 'MAKE_MOVE', payload: { index } });
	};

	return (
		<div className={styles.app}>
			<FieldLayout field={field} handleClick={handleClick} />
		</div>
	);
};

Field.propTypes = {
	filed: PropTypes.array,
	handleClick: PropTypes.func,
};
