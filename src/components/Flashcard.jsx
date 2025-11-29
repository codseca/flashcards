import React, { useState } from "react";
import "./Flashcard.css"; // optional if you want styling

function Flashcard({ flashcard }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(prev => !prev);
  };

  return (
    <div 
      className={`flashcard ${flipped ? "flipped" : ""}`} 
      onClick={handleFlip}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <h3>Question</h3>
          <p>{flashcard.question}</p>
          <small>(click to see answer)</small>
        </div>
        <div className="flashcard-back">
          <h3>Answer</h3>
          <p>{flashcard.answer}</p>
          <small>(click to see question)</small>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
