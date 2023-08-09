import React, { useState } from 'react';
import Result from './Result';
import './Game.css';

const choices = ['rock', 'paper', 'scissors'];

function Game() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const makeChoice = (choice) => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    calculateResult(choice, computerChoice);
  };

  const calculateResult = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      setResult("It's a tie!");
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('Computer wins!');
    }
  };

  return (
    <div className="Game">
      <h1>Rock Paper Scissors</h1>
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => makeChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>
      {playerChoice && computerChoice && <Result result={result} />}
    </div>
  );
}

export default Game;