import React from "react";
import PropTypes from "prop-types";
import Notification from "../Notification";
import styles from "./Statistics.module.css";

const Statistics = (props) => {
  const propNames = Object.keys(props);

  return props.total ? (
    <ul className={styles.list}>
      {propNames.map((propName) => (
        <li className={styles.item} key={propName}>
          {propName}: <span>{props[propName]}</span>
        </li>
      ))}
    </ul>
  ) : (
    <Notification message="No feedback given" />
  );
};

export default Statistics;

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  props: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  }),
};
