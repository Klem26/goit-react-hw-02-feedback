import React, { Component, Fragment } from "react";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // incrementFeedbackHandler = (feedback) => () => {
  //   this.setState({[feedback]: this.state[feedback]+ 1})
  // };

  btnClickHandler = (e) => {
    const nameKey = e.currentTarget.name;
    this.setState((prevState) => {
      return {
        [nameKey]: prevState[nameKey] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = Math.round((good / totalFeedback) * 100);

    return positiveFeedback ? positiveFeedback : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage() + "% ";

    return (
      <Fragment>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.btnClickHandler}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        </Section>
      </Fragment>
    );
  }
}

export default App;
