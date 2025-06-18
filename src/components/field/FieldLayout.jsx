import React from 'react';
import styles from './FiledLayout.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, handleClick }) => {
	return (
		<div className={styles.app}>
			{field.map((item, index) => (
				<div
					onClick={() => handleClick(index)}
					className={styles.field}
					key={index}
				>
					{item}
				</div>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleClick: PropTypes.func,
};
