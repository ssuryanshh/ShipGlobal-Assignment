import React, { useState, useEffect } from "react";
import "./Game.css"; // Add any CSS styling here

const Game = () => {
  // List of words and their scrambled versions
  const words = [
    { word: "javascript", scrambled: "jvsairctp", hint: "A popular programming language for web development." },
    { word: "html", scrambled: "htlm", hint: "The standard markup language for creating web pages." },
    { word: "css", scrambled: "scs", hint: "A style sheet language used to describe the presentation of a document." },
    { word: "programming", scrambled: "mprgargoni", hint: "The process of writing instructions for computers." },
    { word: "scramble", scrambled: "csamrbel", hint: "To mix or rearrange letters to form a new word." },
    { word: "game", scrambled: "gmae", hint: "An activity for entertainment or competition." }
  ];
  

  // State variables for the current word, user input, feedback, and attempts
  const [currentWord, setCurrentWord] = useState({});
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [attempts, setAttempts] = useState(0);

  // Function to get a random word from the list
  const getRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  // Function to start or restart the game
  const startGame = () => {
    const newWord = getRandomWord();
    setCurrentWord(newWord);
    setUserInput("");
    setFeedback("");
    setAttempts(0);
  };

  // Function to check the user's answer
  const checkAnswer = () => {
    setAttempts(attempts + 1);
    if (userInput.trim().toLowerCase() === currentWord.word) {
      setFeedback(`Correct! The word was "${currentWord.word}".`);
    } else {
      setFeedback("Incorrect guess. Try again!");
    }
  };

  // Effect to start the game on component mount
  useEffect(() => {
    startGame();
  }, []);

  return (
    <div className="game-container">
      <p>Unscramble the word below:</p>
      <div className="word-box">
        {currentWord.scrambled}
      </div>
      <div className="hint">
        Hint: {currentWord.hint}
      </div>
      <input
        type="text"
        id="user-input"
        value={userInput}
        placeholder="Your guess"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={checkAnswer}>Submit Guess</button>
      <p id="feedback" className={feedback.includes("Correct") ? "correct" : "incorrect"}>
        {feedback}
      </p>
      <p>
        Attempts: <span id="attempts">{attempts}</span>
      </p>
      <button onClick={startGame}>New Word</button>
    </div>
  );
};

export default Game;
