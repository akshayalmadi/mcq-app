import React from "react";

export default function Navbar(props) {
  const {
    current,
    length,
    timer,
    upcomingQuestions,
  } = props;
  return (
    <div>
      <div className="row flex-nowrap justify-content-between align-items-center header-row">
        <a href="/" className="header-logo text-dark">
          MCQ
        </a>
        {upcomingQuestions.length > 0 ?
          <p className="header-progress text-dark">
            Time Remaining : {timer}
          </p>
          :
          null
        }
        <p className="header-progress text-dark">
          Question {current} of {length}
        </p>
      </div>
      <div className="progress" style={{ height: "2px" }}>
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin="0"
          aria-valuemax={length}
          style={{ width: `${(current / length) * 100}%` }}
        />
      </div>
    </div>
  );
}
