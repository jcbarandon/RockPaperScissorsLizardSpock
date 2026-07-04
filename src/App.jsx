import { useState } from "react";
import RockPaperScissors from "./RockPaperScissors";
import './App.css';

const CHOICES = [
  { id: "rock", label: "Rock", icon: "✊" },
  { id: "paper", label: "Paper", icon: "✋" },
  { id: "scissors", label: "Scissors", icon: "✌️" },
  { id: "lizard", label: "Lizard", icon: "🦎" },
  { id: "spock", label: "Spock", icon: "🖖" },
];

const BEATS = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
};

function getOutcome(user, computer) {
  if (user === computer) return "draw";
  return BEATS[user].includes(computer) ? "win" : "lose";
}

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [score, setScore] = useState({ win: 0, lose: 0, draw: 0 });

  const handleUserChoice = (choice) => {
    const computer = CHOICES[Math.floor(Math.random() * CHOICES.length)].id;
    const outcome = getOutcome(choice, computer);
    setUserChoice(choice);
    setComputerChoice(computer);
    setScore((prev) => ({ ...prev, [outcome]: prev[outcome] + 1 }));
  };

  const handlePlayAgain = () => {
    setUserChoice(null);
    setComputerChoice(null);
  };

  return (
    <div className="page">
      <div className="bg-decor" aria-hidden="true">
        <span className="decor-formula decor-formula-1">E = mc²</span>
        <span className="decor-formula decor-formula-2">iħ ∂ψ/∂t = Ĥψ</span>
        <span className="decor-formula decor-formula-3">42</span>
        <svg className="decor-atom decor-atom-1" viewBox="0 0 64 64" fill="none">
          <g stroke="currentColor" strokeWidth="2">
            <ellipse cx="32" cy="32" rx="28" ry="11" />
            <ellipse cx="32" cy="32" rx="28" ry="11" transform="rotate(60 32 32)" />
            <ellipse cx="32" cy="32" rx="28" ry="11" transform="rotate(120 32 32)" />
          </g>
          <circle cx="32" cy="32" r="5" fill="currentColor" />
        </svg>
        <svg className="decor-atom decor-atom-2" viewBox="0 0 64 64" fill="none">
          <g stroke="currentColor" strokeWidth="2">
            <ellipse cx="32" cy="32" rx="28" ry="11" />
            <ellipse cx="32" cy="32" rx="28" ry="11" transform="rotate(60 32 32)" />
            <ellipse cx="32" cy="32" rx="28" ry="11" transform="rotate(120 32 32)" />
          </g>
          <circle cx="32" cy="32" r="5" fill="currentColor" />
        </svg>
      </div>

      <div className="app-container">
        <p className="game-eyebrow">The Sheldon Cooper Approved Edition</p>
        <h1 className="game-title">
          Rock, Paper, Scissors,
          <br />
          Lizard, Spock
        </h1>
        <p className="game-subtitle">Pick your move and see who wins</p>

        <div className="scoreboard">
          <div className="score-item score-win">
            <span className="score-value">{score.win}</span>
            <span className="score-label">Wins</span>
          </div>
          <div className="score-item score-draw">
            <span className="score-value">{score.draw}</span>
            <span className="score-label">Draws</span>
          </div>
          <div className="score-item score-lose">
            <span className="score-value">{score.lose}</span>
            <span className="score-label">Losses</span>
          </div>
        </div>

        <div className="choices-container">
          {CHOICES.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => handleUserChoice(id)}
              className={`choice-button${userChoice === id ? " selected" : ""}`}
            >
              <span className="choice-icon">{icon}</span>
              {label}
            </button>
          ))}
        </div>

        {userChoice && computerChoice && (
          <RockPaperScissors
            userChoice={userChoice}
            computerChoice={computerChoice}
            choices={CHOICES}
            outcome={getOutcome(userChoice, computerChoice)}
            onPlayAgain={handlePlayAgain}
          />
        )}
      </div>
    </div>
  );
}

export default App;
