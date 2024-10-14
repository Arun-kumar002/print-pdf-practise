import React from 'react'
import "./App.css"
const App = () => {
  return (
    <>
      <QuestionsComponent questions={Array.from({ length: 30 })} />
    </>
  )
}

export default App

const QuestionsComponent = ({ questions }) => {
  const chunkedQuestions = [];
  for (let i = 0; i < questions.length; i += 10) {
    chunkedQuestions.push(questions.slice(i, i + 10));
  }

  return (
    <div>
      {chunkedQuestions.map((chunk, index) => (
        <div key={index} className="page-break">
          {chunk.map((question, qIndex) => (
            <div key={qIndex} className="question">
              <h3>Question {qIndex + 1 + index * 10}</h3>
              <p>{question || "how are you?"}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
