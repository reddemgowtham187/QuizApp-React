import { Question } from "./Question";
import React from "react";

export function Content() {
  function getResults(event) {
    event.preventDefault();
    let marks = 0;
    const form = event.target;

    const checkAnswer = (qusetionName, correctAnswer) => {
      const selectedAnsewr = form.querySelector(
        `input[name="${qusetionName}"]:checked`
      ).value;

      if (selectedAnsewr === correctAnswer) {
        marks++;
      }
    };

    checkAnswer("Question-1", "All");
    checkAnswer("Question-2", "All");
    checkAnswer("Question-3", "All");

    alert(marks);
  }

  return (
    <form onSubmit={getResults}>
      <div>
        <Question
          q1="What are Back-End Technologies?"
          name="Question-1"
          op1="Java"
          op2="Python"
          op3="C Languale"
          op4="All"
        />

        <Question
          q1="What are Front-End Technologies?"
          name="Question-2"
          op1="HTML"
          op2="CSS"
          op3="JS"
          op4="All"
        />

        <Question
          q1="List of IT Cities in India?"
          name="Question-3"
          op1="Bebgaluru"
          op2="Chennai"
          op3="Noida"
          op4="All"
        />
      </div>

      <input type="submit" value="SUBMIT" />
    </form>
  );
}
