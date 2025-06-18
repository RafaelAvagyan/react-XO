import React from 'react';
import { FieldLayout } from './FieldLayout';
import styles from './Field.module.css';
import PropTypes from 'prop-types';

export const Field = ({ filed, handleClick }) => {
	return (
		<div className={styles.app}>
			<FieldLayout field={filed} handleClick={handleClick} />
		</div>
	);
};

Field.propTypes = {
	filed: PropTypes.array,
	handleClick: PropTypes.func,
};
