import React from "react";
import PropTypes from "prop-types";

import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const btnNames = Object.keys(options);
  return (
    <ul className={styles.list}>
      {btnNames.map((btnName) => (
        <li key={btnName}>
          <button
            className={styles.btn}
            name={btnName}
            onClick={onLeaveFeedback}
          >
            {btnName}
          </button>
        </li>
      ))}
    </ul>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
