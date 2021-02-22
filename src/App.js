import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Form from "./components/Form";
import questions from "./questions";

class App extends Component {
  constructor() {
    super();
      this.state = {
        currentQuestion: questions[0],
        selectedOption: "",
        answeredQuestions: [],
        upcomingQuestions: [...questions],
        counter: 20,
      };
      this.timer = 0;
      this.activeTimer = false;
  }

  selectOption = selectedOption => this.setState({ selectedOption });

  submitAnswer = (source) => {
    // update answeredQuestions array
    let answeredQuestions = this.state.answeredQuestions;
    answeredQuestions.push({
      ...this.state.currentQuestion,
      selectedAnswer: this.state.selectedOption ? this.state.selectedOption : "Unanswered"
    });

    // update upcomingQuestions array
    let upcomingQuestions = this.state.upcomingQuestions;
    const currentQuestionIndex = upcomingQuestions.findIndex(
      question => question.id === this.state.currentQuestion.id
    );
    upcomingQuestions.splice(currentQuestionIndex, 1);
    
    if(this.state.selectedOption || source){
      clearInterval(this.timer);
      this.activeTimer = false;
      this.setState({counter: 20});
    }

    // reset state
    this.setState({
      currentQuestion: upcomingQuestions[0],
      selectedOption: "",
      answeredQuestions,
      upcomingQuestions,
    });

    
    
  };
  countDown(timer) {
    let seconds = this.state.counter - 1;
    this.setState({counter: seconds});
      
    if (seconds == 0) { 
      clearInterval(this.timer);
      this.activeTimer = false;
      this.submitAnswer();
      this.setState({counter: 20});
    }
  }
  startTimer(){
    this.timer = this.state.counter > 0 && setInterval(() =>
    {
      this.countDown(this.timer);
    }, 1000);
    this.activeTimer = true;
  }
  componentDidMount(){
    this.startTimer();
  }
  componentDidUpdate(){
    if(this.state.upcomingQuestions.length > 0 && this.state.counter == 20 && this.activeTimer == false){
      this.startTimer();
    }
  }

  render() {
    const {
      currentQuestion,
      selectedOption,
      answeredQuestions,
      upcomingQuestions,
      counter
    } = this.state;

    return (
      <div className="App">
        <div className="container">
          <Navbar
            current={currentQuestion ? currentQuestion.id : questions.length}
            length={questions.length}
            timer={counter}
            upcomingQuestions={upcomingQuestions}
          />
          <Form
            currentQuestion={currentQuestion}
            selectedOption={selectedOption}
            answeredQuestions={answeredQuestions}
            upcomingQuestions={upcomingQuestions}
            selectOption={this.selectOption}
            submitAnswer={this.submitAnswer}
            current={currentQuestion ? currentQuestion.id : questions.length}
            length={questions.length}
          />
        </div>
      </div>
    );
  }
}

export default App;
