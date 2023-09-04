import React, { Component } from 'react';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    // Initialize the component's state
    this.state = {
      currentPlayer: 'X',      // Current player ('X' or 'O')
      boardState: Array(9).fill(''), // cell state
      gameActive: true,        // game is still active ?
      winner: null,            // Stores the winner ('X', 'O') or null if no winner yet
    };
  }

  // Event handler for when a cell is clicked
  handleCellClick(index) {
    if (this.state.boardState[index] === '' && this.state.gameActive) {
      // Clone the current board state
      const newBoardState = [...this.state.boardState];
      newBoardState[index] = this.state.currentPlayer;

      // Check for winner
      const winner = this.checkWinner(newBoardState);
      // Determine if the game is still active 
      const gameActive = !winner && newBoardState.includes('');

      // Update the component's state
      this.setState({
        currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X',
        boardState: newBoardState,
        gameActive,
        winner,
      });
    }
  }

  // Function to check for a winner
  checkWinner(boardState) {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6],            // Diagonals
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      // Check if the cells in the pattern have the same symbol ('X' or 'O')
      if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
        return boardState[a]; // Return the winning symbol ('X' or 'O')
      }
    }

    return null; // winner not found
  }

  // Render a cell
  renderCell(index) {
    return (
      <div
        className="cell"
        onClick={() => this.handleCellClick(index)}
      >
        {this.state.boardState[index]}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <div className="board">
          {this.state.boardState.map((_, index) => this.renderCell(index))}
        </div>
        <div className="message">
          {this.state.winner
            ? `Player ${this.state.winner} wins!`
            : this.state.gameActive
            ? `Current Player: ${this.state.currentPlayer}`
            : 'It\'s a draw!'}
        </div>
        <button onClick={() => this.resetBoard()}>Reset Game</button>
      </div>
    );
  }

  // Reset the game board
  resetBoard() {
    this.setState({
      currentPlayer: 'X',
      boardState: Array(9).fill(''),
      gameActive: true,
      winner: null,
    });
  }
}

export default GameBoard;
