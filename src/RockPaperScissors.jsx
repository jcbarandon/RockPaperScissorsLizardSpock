const OUTCOME_CATCHPHRASES = {
  win: "Bazinga!",
  lose: "That's my spot.",
  draw: "Fascinating.",
};

const OUTCOME_MESSAGES = {
  win: "You win!",
  lose: "You lose!",
  draw: "It's a draw!",
};

function RockPaperScissors({ userChoice, computerChoice, choices, outcome, onPlayAgain }) {
  const iconFor = (id) => choices.find((choice) => choice.id === id)?.icon;

  return (
    <div className={`result-box result-${outcome}`}>
      <div className="result-versus">
        <div className="result-side">
          <span className="result-icon">{iconFor(userChoice)}</span>
          <span className="result-side-label">You</span>
        </div>
        <span className="result-vs">VS</span>
        <div className="result-side">
          <span className="result-icon">{iconFor(computerChoice)}</span>
          <span className="result-side-label">Computer</span>
        </div>
      </div>

      <p className="result-catchphrase">{OUTCOME_CATCHPHRASES[outcome]}</p>
      <p className="result-message">{OUTCOME_MESSAGES[outcome]}</p>

      <button className="play-again-button" onClick={onPlayAgain}>
        Play Again
      </button>
    </div>
  );
}

export default RockPaperScissors;
