import React, { useState } from "react";
import RockPaperScissors from "./RockPaperScissors";
import './App.css';

function App() {
  const choices = ["rock", "paper", "scissors"];
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    setComputerChoice(choices[Math.floor(Math.random() * choices.length)]);
  };

  return (
    <div className="app-container">
      <h1 className="game-title">Rock, Paper, Scissors</h1>

      <div className="choices-container">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handleUserChoice(choice)}
            className="choice-button"
          >
            {choice.charAt(0).toUpperCase() + choice.slice(1)}
          </button>
        ))}
      </div>

      {userChoice && computerChoice && (
        <RockPaperScissors
          userChoice={userChoice}
          computerChoice={computerChoice}
        />
      )}
    </div>
  );
}

export default App;
