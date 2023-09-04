import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    background: '#ff99cc', // Pink background color
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    fontSize:'25px'
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background overlay
  },
};

const GameModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Game Details"
      ariaHideApp={false}
    >
      <h2>Welcome to Tic Tac Toe!</h2>
      <p>
        Immerse yourself in the timeless game of strategy. Take on your opponent on a captivating 3x3 grid,
        where cunning moves and strategic placement of symbols (X or O) are your keys to success.
        Will you triumph with clever tactics, or will it end in a thrilling draw?
      </p>
      <button onClick={closeModal}>Play Now</button>
    </Modal>
  );
};

export default GameModal;

