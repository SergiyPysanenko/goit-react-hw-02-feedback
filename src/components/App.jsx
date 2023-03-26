import React from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    this.setState(prevState => {
      const { name } = e.target;
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    let total = this.countTotalFeedback();
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
          fontSize: 25,
          color: '#010101',
          padding: 30,
          gap: 20,
        }}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options="good"
            onFeedbackButtonClick={this.onLeaveFeedback}
          />
          <FeedbackOptions
            options="neutral"
            onFeedbackButtonClick={this.onLeaveFeedback}
          />
          <FeedbackOptions
            options="bad"
            onFeedbackButtonClick={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percent={this.countPositiveFeedbackPercentage()}
            />
          ) : null}
          {total ? null : <Notification message="No feedback given" />}
        </Section>
      </div>
    );
  }
}

export default App;









