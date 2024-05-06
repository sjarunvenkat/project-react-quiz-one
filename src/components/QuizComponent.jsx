import React, { Component } from "react";

export default class QuizComponent extends Component {
  render() {
    return (
      <>
        <div className="QuizPage">
          <h1>Question</h1>
          <div className="question-container">
            <div className="question-count">
              <span>1 of 15</span>
            </div>
            <h4>What is photosynthesis?</h4>
            <div className="choice">
              <button className="choice-btn" id="a">
                Option A
              </button>
              <button className="choice-btn" id="b">
                Option B
              </button>
              <button className="choice-btn" id="c">
                Option C
              </button>
              <button className="choice-btn" id="d">
                Option D
              </button>
            </div>

            <div className="navigation">
              <button id="prev">Previous</button>
              <button id="next">Next</button>
              <button id="quit">Quit</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
