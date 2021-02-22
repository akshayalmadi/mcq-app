import React, { Component } from "react";

import MCQ from "./MCQ";
import Result from "./Result";

class Form extends Component {
  render() {
    const {
      currentQuestion,
      selectedOption,
      answeredQuestions,
      upcomingQuestions,
      selectOption,
      submitAnswer
    } = this.props;

    return (
      <div className="form-container">
        {upcomingQuestions.length === 0 ? (
          <Result answeredQuestions={answeredQuestions} />
        ) : (
          <MCQ
            currentQuestion={currentQuestion}
            selectedOption={selectedOption}
            answeredQuestions={answeredQuestions}
            upcomingQuestions={upcomingQuestions}
            selectOption={selectOption}
            submitAnswer={submitAnswer}
          />
        )}
      </div>
    );
  }
}

export default Form;
