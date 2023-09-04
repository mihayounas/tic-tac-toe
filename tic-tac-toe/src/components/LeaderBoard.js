import React, { Component } from 'react';
import "../Leaderboard.css"

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: [], // Initialize scores as an empty array
    };
  }

  render() {
    return (
      <div className="leaderboard-container">
        <h2>Leaderboard</h2>
        <ul>
          {this.state.scores.map((score, index) => (
            <li key={index}>{score}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Leaderboard;
