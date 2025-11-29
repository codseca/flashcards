 import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

function AddFlashcard() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    subject: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.question.trim() && formData.answer.trim() && formData.subject) {
      api.post("/flashcards", {
        question: formData.question.trim(),
        answer: formData.answer.trim(),
        subject: formData.subject
      })
      .then(() => {
        alert("Flashcard added!");
        navigate(`/subject/${formData.subject}`);
      })
      .catch((err) => console.error(err));
    }
  };

  return (
    <div className="add-flashcard">
      <button onClick={() => navigate(-1)}>⬅ Back</button>
      <h2>Add Flashcard</h2>

      <form onSubmit={handleSubmit} className="flashcard-form">
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="">Select subject</option>
            <option value="Java">Java</option>
            <option value="Fullstack">Fullstack</option>
            <option value="React">React</option>
            <option value="Node.js">Node.js</option>
            <option value="DBMS">DBMS</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="question">Question:</label>
          <textarea
            id="question"
            name="question"
            value={formData.question}
            onChange={handleChange}
            placeholder="Enter your question here..."
            required
            rows="4"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="answer">Answer:</label>
          <textarea
            id="answer"
            name="answer"
            value={formData.answer}
            onChange={handleChange}
            placeholder="Enter your answer here..."
            required
            rows="4"
          />
        </div>
        
        <div className="form-actions">
          <button type="submit" className="submit-btn">
            ➕ Add Flashcard
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddFlashcard;
