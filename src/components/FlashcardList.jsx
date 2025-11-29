// // // // // import React, { useState, useEffect } from 'react';
// // // // // import Flashcard from './Flashcard';
// // // // // import AddFlashcard from './AddFlashcard';

// // // // // function FlashcardList({ subject, flashcards, onBack, onAddFlashcard }) {
// // // // //   const [currentIndex, setCurrentIndex] = useState(0);
// // // // //   const [showAddForm, setShowAddForm] = useState(false);
// // // // //   const [studyMode, setStudyMode] = useState(false);
// // // // //   const [practiceMode, setPracticeMode] = useState(false);
// // // // //   const [shuffledCards, setShuffledCards] = useState([]);
// // // // //   const [progress, setProgress] = useState({});
// // // // //   const [showStats, setShowStats] = useState(false);
// // // // //   const [practiceResults, setPracticeResults] = useState({});

// // // // //   useEffect(() => {
// // // // //     setShuffledCards([...flashcards]);
// // // // //     setProgress({});
// // // // //     setPracticeResults({});
// // // // //   }, [flashcards]);

// // // // //   const shuffleCards = () => {
// // // // //     const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
// // // // //     setShuffledCards(shuffled);
// // // // //     setCurrentIndex(0);
// // // // //   };

// // // // //   const nextCard = () => {
// // // // //     setCurrentIndex((prev) => (prev + 1) % shuffledCards.length);
// // // // //   };

// // // // //   const prevCard = () => {
// // // // //     setCurrentIndex((prev) => (prev - 1 + shuffledCards.length) % shuffledCards.length);
// // // // //   };

// // // // //   const markAsKnown = () => {
// // // // //     const cardId = shuffledCards[currentIndex].id;
// // // // //     setProgress(prev => ({
// // // // //       ...prev,
// // // // //       [cardId]: { ...prev[cardId], known: true, timestamp: Date.now() }
// // // // //     }));
// // // // //     nextCard();
// // // // //   };

// // // // //   const markAsUnknown = () => {
// // // // //     const cardId = shuffledCards[currentIndex].id;
// // // // //     setProgress(prev => ({
// // // // //       ...prev,
// // // // //       [cardId]: { ...prev[cardId], known: false, timestamp: Date.now() }
// // // // //     }));
// // // // //     nextCard();
// // // // //   };

// // // // //   const handleAnswerSubmit = (cardId, isCorrect) => {
// // // // //     setPracticeResults(prev => ({
// // // // //       ...prev,
// // // // //       [cardId]: { 
// // // // //         correct: isCorrect, 
// // // // //         timestamp: Date.now(),
// // // // //         attempts: (prev[cardId]?.attempts || 0) + 1
// // // // //       }
// // // // //     }));
// // // // //   };

// // // // //   const handleAddFlashcard = (newFlashcard) => {
// // // // //     onAddFlashcard(subject, newFlashcard);
// // // // //     setShowAddForm(false);
// // // // //   };

// // // // //   const getProgressStats = () => {
// // // // //     const total = shuffledCards.length;
// // // // //     const known = Object.values(progress).filter(p => p.known).length;
// // // // //     const unknown = Object.values(progress).filter(p => p.known === false).length;
// // // // //     const percentage = total > 0 ? Math.round((known / total) * 100) : 0;
    
// // // // //     return { total, known, unknown, percentage };
// // // // //   };

// // // // //   const getPracticeStats = () => {
// // // // //     const total = shuffledCards.length;
// // // // //     const correct = Object.values(practiceResults).filter(r => r.correct).length;
// // // // //     const incorrect = Object.values(practiceResults).filter(r => !r.correct).length;
// // // // //     const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    
// // // // //     return { total, correct, incorrect, percentage };
// // // // //   };

// // // // //   if (showAddForm) {
// // // // //     return (
// // // // //       <div className="flashcard-list">
// // // // //         <div className="header">
// // // // //           <button onClick={() => setShowAddForm(false)} className="back-btn">
// // // // //             ← Back to Flashcards
// // // // //           </button>
// // // // //           <h2>Add New Flashcard - {subject}</h2>
// // // // //         </div>
// // // // //         <AddFlashcard onSubmit={handleAddFlashcard} />
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   const stats = studyMode ? getProgressStats() : getPracticeStats();
// // // // //   const currentCards = (studyMode || practiceMode) ? shuffledCards : flashcards;

// // // // //   return (
// // // // //     <div className="flashcard-list">
// // // // //       <div className="header">
// // // // //         <button onClick={onBack} className="back-btn">
// // // // //           ← Back to Subjects
// // // // //         </button>
// // // // //         <h2>{subject} Flashcards</h2>
// // // // //         <div className="header-actions">
// // // // //           <button onClick={() => setShowStats(!showStats)} className="stats-btn">
// // // // //             📊 Stats
// // // // //           </button>
// // // // //           <button 
// // // // //             onClick={() => {
// // // // //               setStudyMode(!studyMode);
// // // // //               setPracticeMode(false);
// // // // //             }} 
// // // // //             className={`mode-btn ${studyMode ? 'active' : ''}`}
// // // // //           >
// // // // //             {studyMode ? '📖 Study Mode' : '🎯 Study Mode'}
// // // // //           </button>
// // // // //           <button 
// // // // //             onClick={() => {
// // // // //               setPracticeMode(!practiceMode);
// // // // //               setStudyMode(false);
// // // // //             }} 
// // // // //             className={`mode-btn ${practiceMode ? 'active' : ''}`}
// // // // //           >
// // // // //             {practiceMode ? '✍️ Practice Mode' : '✍️ Practice Mode'}
// // // // //           </button>
// // // // //           <button onClick={() => setShowAddForm(true)} className="add-btn">
// // // // //             + Add Flashcard
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       {showStats && (
// // // // //         <div className="stats-panel">
// // // // //           <h3>{practiceMode ? 'Practice Results' : 'Study Progress'}</h3>
// // // // //           <div className="stats-grid">
// // // // //             <div className="stat-item">
// // // // //               <span className="stat-number">{stats.total}</span>
// // // // //               <span className="stat-label">Total Cards</span>
// // // // //             </div>
// // // // //             <div className="stat-item">
// // // // //               <span className="stat-number">
// // // // //                 {practiceMode ? stats.correct : stats.known}
// // // // //               </span>
// // // // //               <span className="stat-label">
// // // // //                 {practiceMode ? 'Correct' : 'Known'}
// // // // //               </span>
// // // // //             </div>
// // // // //             <div className="stat-item">
// // // // //               <span className="stat-number">
// // // // //                 {practiceMode ? stats.incorrect : stats.unknown}
// // // // //               </span>
// // // // //               <span className="stat-label">
// // // // //                 {practiceMode ? 'Incorrect' : 'Need Review'}
// // // // //               </span>
// // // // //             </div>
// // // // //             <div className="stat-item">
// // // // //               <span className="stat-number">{stats.percentage}%</span>
// // // // //               <span className="stat-label">
// // // // //                 {practiceMode ? 'Accuracy' : 'Mastery'}
// // // // //               </span>
// // // // //             </div>
// // // // //           </div>
// // // // //           <div className="progress-bar">
// // // // //             <div 
// // // // //               className="progress-fill" 
// // // // //               style={{ width: `${stats.percentage}%` }}
// // // // //             ></div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
      
// // // // //       {currentCards.length === 0 ? (
// // // // //         <div className="no-cards">
// // // // //           <p>No flashcards available for this subject.</p>
// // // // //           <button onClick={() => setShowAddForm(true)} className="add-btn">
// // // // //             Add Your First Flashcard
// // // // //           </button>
// // // // //         </div>
// // // // //       ) : (
// // // // //         <div className="flashcard-container">
// // // // //           <div className="card-controls">
// // // // //             <div className="card-counter">
// // // // //               {currentIndex + 1} of {currentCards.length}
// // // // //             </div>
// // // // //             {studyMode && (
// // // // //               <div className="study-controls">
// // // // //                 <button onClick={shuffleCards} className="shuffle-btn">
// // // // //                   🔀 Shuffle
// // // // //                 </button>
// // // // //                 <button onClick={markAsUnknown} className="unknown-btn">
// // // // //                   ❌ Don't Know
// // // // //                 </button>
// // // // //                 <button onClick={markAsKnown} className="known-btn">
// // // // //                   ✅ Know It
// // // // //                 </button>
// // // // //               </div>
// // // // //             )}
// // // // //             {practiceMode && (
// // // // //               <div className="practice-controls">
// // // // //                 <button onClick={shuffleCards} className="shuffle-btn">
// // // // //                   🔀 Shuffle
// // // // //                 </button>
// // // // //                 <span className="practice-mode-indicator">
// // // // //                   ✍️ Practice Mode Active
// // // // //                 </span>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
          
// // // // //           <Flashcard 
// // // // //             flashcard={currentCards[currentIndex]} 
// // // // //             onNext={nextCard}
// // // // //             onPrev={prevCard}
// // // // //             isFirst={currentIndex === 0}
// // // // //             isLast={currentIndex === currentCards.length - 1}
// // // // //             practiceMode={practiceMode}
// // // // //             onAnswerSubmit={handleAnswerSubmit}
// // // // //           />
          
// // // // //           <div className="navigation">
// // // // //             <button onClick={prevCard} disabled={currentCards.length <= 1}>
// // // // //               ← Previous
// // // // //             </button>
// // // // //             <button onClick={nextCard} disabled={currentCards.length <= 1}>
// // // // //               Next →
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default FlashcardList;
// // // // import React, { useEffect, useState } from "react";
// // // // import api from "../api";
// // // // import Flashcard from "./Flashcard";
// // // // import AddFlashcard from "./AddFlashcard";

// // // // function FlashcardList({ subject }) {
// // // //   const [flashcards, setFlashcards] = useState([]);

// // // //   // Load from backend
// // // //   useEffect(() => {
// // // //     api.get("/flashcards")
// // // //       .then(res => {
// // // //         const filtered = res.data.filter(f => f.subject === subject);
// // // //         setFlashcards(filtered);
// // // //       })
// // // //       .catch(err => console.error(err));
// // // //   }, [subject]);

// // // //   // Add new flashcard
// // // //   const handleAdd = (newCard) => {
// // // //     api.post("/flashcards", { ...newCard, subject })
// // // //       .then(res => setFlashcards(prev => [...prev, res.data]))
// // // //       .catch(err => console.error(err));
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h2>{subject} Flashcards</h2>
// // // //       {flashcards.length === 0 ? (
// // // //         <p>No flashcards yet.</p>
// // // //       ) : (
// // // //         flashcards.map(card => <Flashcard key={card.id} flashcard={card} />)
// // // //       )}
// // // //       <AddFlashcard onSubmit={handleAdd} />
// // // //     </div>
// // // //   );
// // // // }

// // // // export default FlashcardList;


// // // import React, { useState, useEffect } from 'react';
// // // import Flashcard from './Flashcard';
// // // import AddFlashcard from './AddFlashcard';

// // // function FlashcardList({ subject, flashcards, onBack, onAddFlashcard }) {
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const [showAddForm, setShowAddForm] = useState(false);
// // //   const [studyMode, setStudyMode] = useState(false);
// // //   const [practiceMode, setPracticeMode] = useState(false);
// // //   const [shuffledCards, setShuffledCards] = useState([]);
// // //   const [progress, setProgress] = useState({});
// // //   const [showStats, setShowStats] = useState(false);
// // //   const [practiceResults, setPracticeResults] = useState({});

// // //   useEffect(() => {
// // //     setShuffledCards([...flashcards]);
// // //     setProgress({});
// // //     setPracticeResults({});
// // //   }, [flashcards]);

// // //   const shuffleCards = () => {
// // //     const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
// // //     setShuffledCards(shuffled);
// // //     setCurrentIndex(0);
// // //   };

// // //   const nextCard = () => setCurrentIndex((i) => (i + 1) % shuffledCards.length);
// // //   const prevCard = () => setCurrentIndex((i) => (i - 1 + shuffledCards.length) % shuffledCards.length);

// // //   const markAsKnown = () => {
// // //     const cardId = shuffledCards[currentIndex].id;
// // //     setProgress(p => ({ ...p, [cardId]: { known: true } }));
// // //     nextCard();
// // //   };

// // //   const markAsUnknown = () => {
// // //     const cardId = shuffledCards[currentIndex].id;
// // //     setProgress(p => ({ ...p, [cardId]: { known: false } }));
// // //     nextCard();
// // //   };

// // //   const handleAnswerSubmit = (cardId, isCorrect) => {
// // //     setPracticeResults(r => ({
// // //       ...r,
// // //       [cardId]: { correct: isCorrect, attempts: (r[cardId]?.attempts || 0) + 1 }
// // //     }));
// // //   };

// // //   const handleAddFlashcard = (newFlashcard) => {
// // //     onAddFlashcard(subject, newFlashcard);
// // //     setShowAddForm(false);
// // //   };

// // //   const getStats = () => {
// // //     const total = shuffledCards.length;
// // //     if (studyMode) {
// // //       const known = Object.values(progress).filter(p => p.known).length;
// // //       const unknown = Object.values(progress).filter(p => p.known === false).length;
// // //       return { total, known, unknown, percentage: total ? Math.round((known / total) * 100) : 0 };
// // //     } else {
// // //       const correct = Object.values(practiceResults).filter(r => r.correct).length;
// // //       const incorrect = Object.values(practiceResults).filter(r => !r.correct).length;
// // //       return { total, correct, incorrect, percentage: total ? Math.round((correct / total) * 100) : 0 };
// // //     }
// // //   };

// // //   if (showAddForm) {
// // //     return (
// // //       <div className="flashcard-list">
// // //         <button onClick={() => setShowAddForm(false)}>← Back</button>
// // //         <h2>Add New Flashcard - {subject}</h2>
// // //         <AddFlashcard onSubmit={handleAddFlashcard} />
// // //       </div>
// // //     );
// // //   }

// // //   const stats = getStats();
// // //   const currentCards = (studyMode || practiceMode) ? shuffledCards : flashcards;

// // //   return (
// // //     <div className="flashcard-list">
// // //       <div className="header">
// // //         <button onClick={onBack} className="back-btn">← Back to Subjects</button>
// // //         <h2>{subject} Flashcards</h2>
// // //         <div>
// // //           <button onClick={() => setShowStats(!showStats)}>📊 Stats</button>
// // //           <button onClick={() => { setStudyMode(!studyMode); setPracticeMode(false); }}>📖 Study</button>
// // //           <button onClick={() => { setPracticeMode(!practiceMode); setStudyMode(false); }}>✍️ Practice</button>
// // //           <button onClick={() => setShowAddForm(true)}>+ Add Flashcard</button>
// // //         </div>
// // //       </div>

// // //       {showStats && (
// // //         <div className="stats-panel">
// // //           <h3>{practiceMode ? 'Practice Results' : 'Study Progress'}</h3>
// // //           <div>Total: {stats.total}</div>
// // //           <div>{practiceMode ? `Correct: ${stats.correct}` : `Known: ${stats.known}`}</div>
// // //           <div>{practiceMode ? `Incorrect: ${stats.incorrect}` : `Unknown: ${stats.unknown}`}</div>
// // //           <div className="progress-bar">
// // //             <div className="progress-fill" style={{ width: `${stats.percentage}%` }}></div>
// // //           </div>
// // //           <p>{stats.percentage}%</p>
// // //         </div>
// // //       )}

// // //       {currentCards.length === 0 ? (
// // //         <div>No flashcards yet.</div>
// // //       ) : (
// // //         <div>
// // //           <Flashcard 
// // //             flashcard={currentCards[currentIndex]} 
// // //             onNext={nextCard}
// // //             onPrev={prevCard}
// // //             practiceMode={practiceMode}
// // //             onAnswerSubmit={handleAnswerSubmit}
// // //           />
// // //           <div>{currentIndex + 1} / {currentCards.length}</div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default FlashcardList;
// // import React, { useState, useEffect } from "react";
// // import api from "../api";
// // import Flashcard from "./Flashcard";
// // import AddFlashcard from "./AddFlashcard";

// // function FlashcardList({ subject, onBack, onAddFlashcard }) {
// //   const [flashcards, setFlashcards] = useState([]);
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [showAddForm, setShowAddForm] = useState(false);
// //   const [progress, setProgress] = useState({});
// //   const [showStats, setShowStats] = useState(false);

// //   useEffect(() => {
// //     api.get(`/flashcards/${subject}`)
// //       .then(res => setFlashcards(res.data))
// //       .catch(err => console.error(err));
// //   }, [subject]);

// //   const markAsKnown = () => {
// //     const cardId = flashcards[currentIndex].id;
// //     setProgress(prev => ({ ...prev, [cardId]: true }));
// //     nextCard();
// //   };

// //   const nextCard = () =>
// //     setCurrentIndex((prev) => (prev + 1) % flashcards.length);

// //   const prevCard = () =>
// //     setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);

// //   const handleAddFlashcard = (card) => {
// //     onAddFlashcard(card);
// //     setShowAddForm(false);
// //   };

// //   const knownCount = Object.values(progress).filter(Boolean).length;
// //   const percentage = flashcards.length > 0 ? Math.round((knownCount / flashcards.length) * 100) : 0;

// //   if (showAddForm) {
// //     return (
// //       <div>
// //         <button onClick={() => setShowAddForm(false)}>← Back</button>
// //         <h2>Add Flashcard - {subject}</h2>
// //         <AddFlashcard onSubmit={handleAddFlashcard} />
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="flashcard-list">
// //       <div className="header">
// //         <button onClick={onBack} className="back-btn">← Back</button>
// //         <h2>{subject} Flashcards</h2>
// //         <div>
// //           <button onClick={() => setShowStats(!showStats)}>📊 Stats</button>
// //           <button onClick={() => setShowAddForm(true)}>+ Add Flashcard</button>
// //         </div>
// //       </div>

// //       {showStats && (
// //         <div className="stats-panel">
// //           <p>{knownCount} of {flashcards.length} known</p>
// //           <div className="progress-bar">
// //             <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
// //           </div>
// //           <p>{percentage}% mastered</p>
// //         </div>
// //       )}

// //       {flashcards.length === 0 ? (
// //         <p>No flashcards yet.</p>
// //       ) : (
// //         <div>
// //           <Flashcard flashcard={flashcards[currentIndex]} />
// //           <div className="controls">
// //             <button onClick={prevCard}>← Prev</button>
// //             <button onClick={markAsKnown}>✅ Know</button>
// //             <button onClick={nextCard}>Next →</button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default FlashcardList;
// import React, { useState, useEffect } from "react";
// import api from "../api";
// import Flashcard from "./Flashcard";
// import AddFlashcard from "./AddFlashcard";

// function FlashcardList({ subject, onBack }) {
//   const [flashcards, setFlashcards] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [studyMode, setStudyMode] = useState(false);
//   const [practiceMode, setPracticeMode] = useState(false);
//   const [progress, setProgress] = useState({});
//   const [practiceResults, setPracticeResults] = useState({});
//   const [showStats, setShowStats] = useState(false);

//   useEffect(() => {
//     api.get(`/flashcards/${subject}`)
//       .then(res => setFlashcards(res.data))
//       .catch(err => console.error(err));
//   }, [subject]);

//   const nextCard = () => setCurrentIndex(i => (i + 1) % flashcards.length);
//   const prevCard = () => setCurrentIndex(i => (i - 1 + flashcards.length) % flashcards.length);

//   const markAsKnown = () => {
//     const id = flashcards[currentIndex].id;
//     setProgress(p => ({ ...p, [id]: true }));
//     nextCard();
//   };
//   const markAsUnknown = () => {
//     const id = flashcards[currentIndex].id;
//     setProgress(p => ({ ...p, [id]: false }));
//     nextCard();
//   };

//   const handleAnswerSubmit = (id, correct) => {
//     setPracticeResults(r => ({ 
//       ...r, 
//       [id]: { correct, attempts: (r[id]?.attempts || 0) + 1 } 
//     }));
//   };

//   const knownCount = Object.values(progress).filter(Boolean).length;
//   const correctCount = Object.values(practiceResults).filter(r => r.correct).length;
//   const percentage = flashcards.length ? Math.round((knownCount / flashcards.length) * 100) : 0;

//   if (showAddForm) {
//     return (
//       <div className="flashcard-list">
//         <button className="back-btn" onClick={() => setShowAddForm(false)}>← Back</button>
//         <h2>Add Flashcard - {subject}</h2>
//         <AddFlashcard onSubmit={(card) => setFlashcards([...flashcards, card])}/>
//       </div>
//     );
//   }

//   return (
//     <div className="flashcard-list">

//       {/* Top Controls */}
//       <div className="header">
//         <button onClick={onBack} className="back-btn">← Back</button>
//         <h2>{subject} Flashcards</h2>
//         <div className="header-actions">
//           <button className={`mode-btn ${studyMode ? "active" : ""}`} 
//             onClick={() => { setStudyMode(true); setPracticeMode(false); }}>
//             📖 Study
//           </button>
//           <button className={`mode-btn ${practiceMode ? "active" : ""}`} 
//             onClick={() => { setPracticeMode(true); setStudyMode(false); }}>
//             ✍️ Practice
//           </button>
//           <button onClick={() => setShowStats(!showStats)}>📊 Stats</button>
//           <button onClick={() => setShowAddForm(true)}>+ Add</button>
//         </div>
//       </div>

//       {/* Stats */}
//       {showStats && (
//         <div className="stats-panel">
//           {studyMode ? (
//             <>
//               <p>{knownCount} of {flashcards.length} known</p>
//               <div className="progress-bar">
//                 <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
//               </div>
//               <p>{percentage}% mastered</p>
//             </>
//           ) : (
//             <>
//               <p>{correctCount} correct answers</p>
//               <p>{flashcards.length ? Math.round((correctCount / flashcards.length) * 100) : 0}% accuracy</p>
//             </>
//           )}
//         </div>
//       )}

//       {/* Flashcards */}
//       {flashcards.length === 0 ? (
//         <p>No flashcards yet.</p>
//       ) : (
//         <div>
//           <Flashcard 
//             flashcard={flashcards[currentIndex]} 
//             practiceMode={practiceMode}
//             onAnswerSubmit={handleAnswerSubmit}
//           />

//           <div className="navigation">
//             <button onClick={prevCard} disabled={flashcards.length<=1}>← Prev</button>
//             {studyMode && (
//               <>
//                 <button onClick={markAsUnknown} className="dontknow-btn">❌ Don’t Know</button>
//                 <button onClick={markAsKnown} className="know-btn">✅ Know</button>
//               </>
//             )}
//             <button onClick={nextCard} disabled={flashcards.length<=1}>Next →</button>
//           </div>

//           <div className="counter">{currentIndex+1} / {flashcards.length}</div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default FlashcardList;
import React, { useState, useEffect } from "react";
import api from "../api";
import Flashcard from "./Flashcard";
import AddFlashcard from "./AddFlashcard";

function FlashcardList({ subject, onBack }) {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAddForm, setShowAddForm] = useState(false);
  const [studyMode, setStudyMode] = useState(false);
  const [practiceMode, setPracticeMode] = useState(false);
  const [progress, setProgress] = useState({});
  const [practiceResults, setPracticeResults] = useState({});
  const [showStats, setShowStats] = useState(false);

  // Load flashcards from backend
  useEffect(() => {
    api.get(`/flashcards/${subject}`)
      .then(res => setFlashcards(res.data))
      .catch(err => console.error(err));
  }, [subject]);

  const nextCard = () => setCurrentIndex((i) => (i + 1) % flashcards.length);
  const prevCard = () => setCurrentIndex((i) => (i - 1 + flashcards.length) % flashcards.length);

  const markAsKnown = () => {
    const cardId = flashcards[currentIndex].id;
    setProgress(p => ({ ...p, [cardId]: { known: true } }));
    nextCard();
  };

  const markAsUnknown = () => {
    const cardId = flashcards[currentIndex].id;
    setProgress(p => ({ ...p, [cardId]: { known: false } }));
    nextCard();
  };

  const handleAnswerSubmit = (cardId, isCorrect) => {
    setPracticeResults(r => ({
      ...r,
      [cardId]: { correct: isCorrect, attempts: (r[cardId]?.attempts || 0) + 1 }
    }));
  };

  const handleAddFlashcard = (newFlashcard) => {
    api.post("/flashcards", { ...newFlashcard, subject })
      .then(res => {
        setFlashcards(prev => [...prev, res.data]);
        setShowAddForm(false);
      })
      .catch(err => console.error(err));
  };

  const getStats = () => {
    const total = flashcards.length;
    if (studyMode) {
      const known = Object.values(progress).filter(p => p.known).length;
      const unknown = Object.values(progress).filter(p => p.known === false).length;
      return { total, known, unknown, percentage: total ? Math.round((known / total) * 100) : 0 };
    } else {
      const correct = Object.values(practiceResults).filter(r => r.correct).length;
      const incorrect = Object.values(practiceResults).filter(r => !r.correct).length;
      return { total, correct, incorrect, percentage: total ? Math.round((correct / total) * 100) : 0 };
    }
  };

  if (showAddForm) {
    return (
      <div className="flashcard-list">
        <button onClick={() => setShowAddForm(false)}>← Back</button>
        <h2>Add Flashcard - {subject}</h2>
        <AddFlashcard onSubmit={handleAddFlashcard} />
      </div>
    );
  }

  const stats = getStats();

  return (
    <div className="flashcard-list">
      <div className="header">
        <button onClick={onBack}>← Back to Subjects</button>
        <h2>{subject} Flashcards</h2>
        <div>
          <button onClick={() => setShowStats(!showStats)}>📊 Stats</button>
          <button onClick={() => { setStudyMode(!studyMode); setPracticeMode(false); }}>📖 Study</button>
          <button onClick={() => { setPracticeMode(!practiceMode); setStudyMode(false); }}>✍️ Practice</button>
          <button onClick={() => setShowAddForm(true)}>+ Add Flashcard</button>
        </div>
      </div>

      {showStats && (
        <div className="stats-panel">
          <h3>{practiceMode ? 'Practice Results' : 'Study Progress'}</h3>
          <p>
            {practiceMode
              ? `Correct: ${stats.correct} / ${stats.total} | Incorrect: ${stats.incorrect}`
              : `Known: ${stats.known} / ${stats.total} | Unknown: ${stats.unknown}`}
          </p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${stats.percentage}%` }}></div>
          </div>
          <p>{stats.percentage}%</p>
        </div>
      )}

      {flashcards.length === 0 ? (
        <p>No flashcards yet.</p>
      ) : (
        <div>
          <Flashcard
            flashcard={flashcards[currentIndex]}
            practiceMode={practiceMode}
            onAnswerSubmit={handleAnswerSubmit}
          />
          <div className="controls">
            <button onClick={prevCard}>← Prev</button>
            {studyMode && (
              <>
                <button onClick={markAsUnknown}>❌ Don't Know</button>
                <button onClick={markAsKnown}>✅ Know</button>
              </>
            )}
            <button onClick={nextCard}>Next →</button>
          </div>
          <div>{currentIndex + 1} / {flashcards.length}</div>
        </div>
      )}
    </div>
  );
}

export default FlashcardList;
