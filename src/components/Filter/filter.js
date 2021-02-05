import React from "react";
import PropTypes from "prop-types";
import styles from './filter.module.css';

export default function Filter({ value, onChangeFilter }) {
  return (
    <div className={styles.filter}>
      Find contacts by name :
      <p></p>
      <input
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onchangeFilter: PropTypes.func.isRequired,
};