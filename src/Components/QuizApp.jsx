import React, { useEffect, useState } from "react";
import "./Quiz.css";

const QuizApp = () => {
  const [displayQuestions, setDisplayQuestions] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0); // State to keep track of the score
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [questions] = useState([
    {
      question: "What is the capital city of France?",
      answers: [
        { text: "Paris", correct: true },
        { text: "Berlin", correct: false },
        { text: "New York", correct: false },
        { text: "London", correct: false },
      ],
    },
    {
      question: "Which is the largest animal in the world?",
      answers: [
        { text: "Whale", correct: true },
        { text: "Gorilla", correct: false },
        { text: "Lion", correct: false },
        { text: "Elephant", correct: false },
      ],
    },
    {
      question: "Who is the CEO of Tesla?",
      answers: [
        { text: "Elon Musk", correct: true },
        { text: "Jeff Bezos", correct: false },
        { text: "Mark Zuckerberg", correct: false },
        { text: "Bill Gates", correct: false },
      ],
    },
    {
      question: "Which is the smallest country in the world?",
      answers: [
        { text: "Vatican City", correct: true },
        { text: "Monaco", correct: false },
        { text: "San Marino", correct: false },
        { text: "Liechtenstein", correct: false },
      ],
    },
  ]);

  useEffect(() => {
    loadQuestion(currentQuestionIndex);
  }, [currentQuestionIndex]);

  const loadQuestion = (index) => {
    const currentQuestion = questions[index];
    setDisplayQuestions(currentQuestion.question);
    setAnswers(currentQuestion.answers); // Set the answers array here
    setSelectedAnswer(null); // Reset selected answer on new question
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers([]);
  };

  const checkAnswer = (isCorrect) => {
    if (selectedAnswer === null) {
      if (isCorrect) {
        setScore(score + 1); 
      }
      setSelectedAnswer(isCorrect);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setSelectedAnswer(null);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Quiz Completed! Your score is: ${score}`);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="quiz-container">
      <div id="quiz-header">
        <div className="flex justify-between items-center font-semibold">
          <h1>Quiz App</h1>
        </div>
        <div id="question-container">
          <div id="question">{displayQuestions}</div>
          <div id="answer-buttons" className="btn-grid">
            {answers.map((answer, index) => (
              <button
                key={index}
                className={`btn ${
                  selectedAnswer !== null
                    ? answer.correct
                      ? "correct"
                      : "incorrect"
                    : ""
                }`}
                onClick={() => checkAnswer(answer.correct)}
                disabled={selectedAnswer !== null} // Disable buttons after selecting an answer
              >
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div id="quiz-footer">
        <button className="next-btn btn" onClick={prevQuestion}>
          Previous Question
        </button>
        <button
          className="next-btn btn"
          onClick={nextQuestion}
          disabled={selectedAnswer === null}
        >
          Next Question
        </button>
        <button className="next-btn btn" onClick={restartQuiz}>
          <i className="fa-solid fa-arrows-rotate"></i>
        </button>
        <div id="score">Score: {score}</div>
      </div>
    </div>
  );
};

export default QuizApp;
