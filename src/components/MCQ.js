import React, { Component } from "react";

class MCQ extends Component {
  renderOptions = () => {
    const { currentQuestion, selectedOption } = this.props;
    const getLetter = number => {
      let letter;
    
      switch (number) {
        case 0:
          letter = 'A.';
          break;
        case 1:
          letter = 'B.';
          break;
        case 2:
          letter = 'C.';
          break;
        case 3:
          letter = 'D.';
          break;
        default:
          letter = null;
          break;
      }
    
      return letter;
    };

    return currentQuestion.options.map((option, index) => (
      <div className="custom-answer custom-radio" key={option.id}>
        <input
          type="radio"
          id={`option${option.id}`}
          name={`question${currentQuestion.id}`}
          value={option.value}
          onChange={e => this.props.selectOption(e.target.value)}
          className="input-radio"
          checked={option.value === selectedOption}
        />
        <label className="input-label" htmlFor={`option${option.id}`}>
          {`${getLetter(index)} ${option.value}`}
        </label>
      </div>
    ));
  };

  render() {
    const { currentQuestion, selectedOption, submitAnswer } = this.props;
    return (
      <div className="mcq">
        <div className="question-container">
          {`Q.  ${currentQuestion.question}`}
        </div>
        <hr />
        <div className="answer-container">
          {this.renderOptions()}
        </div>
        <div>
          <button
            type="button"
            className="btn btn-outline-primary submit-button"
            onClick={submitAnswer}
            disabled={selectedOption === ""}
          >
            Submit Answer
          </button>
          <button
            type="button"
            className="btn btn-outline-primary submit-button"
            onClick={() => submitAnswer("Unanswered")}
            // disabled={selectedOption === ""}
            style={{marginLeft: "20px"}}
          >
            Skip Question
          </button>
        </div>
      </div>
    );
  }
}

export default MCQ;
