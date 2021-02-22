import React, { Component } from "react";

class Result extends Component {
  render() {
    const { answeredQuestions } = this.props;

    return answeredQuestions.map(
      ({ id, question, answer, selectedAnswer, options }) => {
        const correctAnswer = selectedAnswer && selectedAnswer === answer.value;

        return (
          <div
            className={`alert alert-${correctAnswer ? "success" : selectedAnswer == "Unanswered" ? "unanswered" : "danger"}`}
            role="alert"
            key={id}
          >
            <h4 className="alert-heading">
              {correctAnswer ? "Well done!" : selectedAnswer == "Unanswered" ? "Not answered" : "Oops!"}
            </h4>
            <p>
              {id}. {question}
            </p>
            <hr />
            <ul>
              {options.map(option => (
                <li key={option.id}>
                  {option.value === answer.value ? (
                    <strong>{option.value}</strong>
                  ) : option.value === selectedAnswer ? (
                    // strikethrough if the user has selected an incorrect option
                    <del>{option.value}</del>
                  ) : (
                    option.value
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      }
    );
  }
}

export default Result;
