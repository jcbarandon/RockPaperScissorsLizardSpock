import React from "react";

function RockPaperScissors({ userChoice, computerChoice }) {
  const getResult = (user, computer) => {
    if (user === computer) return "It's a draw!";
    if (
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissors" && computer === "paper")
    ) {
      return "You win!";
    }
    return "You lose!";
  };

  const result = getResult(userChoice, computerChoice);

  return (
    <div className="result-box">
      <h2 className="result-title">Your Result</h2>
      <p className="result-detail">
        You chose: <strong>{userChoice}</strong>
      </p>
      <p className="result-detail">
        Computer chose: <strong>{computerChoice}</strong>
      </p>
      <p className="result-message">{result}</p>
    </div>
  );
}

export default RockPaperScissors;
