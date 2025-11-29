import React, { useState, useEffect } from "react";
import SubjectList from "./components/SubjectList";
import FlashcardList from "./components/FlashcardList";
import api from "./api";

function App() {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetch subjects when app loads
  useEffect(() => {
    api.get("/subjects")
      .then(res => setSubjects(res.data))
      .catch(err => console.error("Error fetching subjects:", err));
  }, []);

  // fetch flashcards when subject is selected
  useEffect(() => {
    if (selectedSubject) {
      setLoading(true);
      api.get(`/flashcards/${selectedSubject}`)
        .then(res => setFlashcards(res.data))
        .catch(err => console.error("Error fetching flashcards:", err))
        .finally(() => setLoading(false));
    }
  }, [selectedSubject]);

  const handleAddFlashcard = (newFlashcard) => {
    api.post("/flashcards", {
      ...newFlashcard,
      subject: selectedSubject
    })
    .then(res => {
      setFlashcards(prev => [...prev, res.data]);
    })
    .catch(err => console.error("Error adding flashcard:", err));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>📚 Flashcard App</h1>
      </header>

      <main className="app-main">
        {!selectedSubject ? (
          <SubjectList 
            subjects={subjects}
            onSelect={setSelectedSubject}
          />
        ) : (
          loading ? (
            <p>Loading flashcards...</p>
          ) : (
            <FlashcardList
              subject={selectedSubject}
              flashcards={flashcards}
              onBack={() => setSelectedSubject(null)}
              onAddFlashcard={handleAddFlashcard}
            />
          )
        )}
      </main>
    </div>
  );
}

export default App;
