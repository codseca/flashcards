// import React, { useState, useMemo } from 'react';

// function SubjectList({ subjects, onSelect }) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   // Define subject categories
//   const subjectCategories = {
//     'Programming': ['Java', 'JavaScript', 'Python', 'C++'],
//     'Web Development': ['Fullstack', 'React', 'Node.js', 'CSS'],
//     'Data Science': ['Python', 'SQL', 'Machine Learning'],
//     'Mobile': ['React Native', 'Flutter', 'iOS'],
//     'DevOps': ['Docker', 'Kubernetes', 'AWS']
//   };

//   const filteredSubjects = useMemo(() => {
//     let filtered = subjects;
    
//     // Filter by search term
//     if (searchTerm) {
//       filtered = filtered.filter(subject => 
//         subject.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
    
//     // Filter by category
//     if (selectedCategory !== 'all') {
//       filtered = filtered.filter(subject => 
//         subjectCategories[selectedCategory]?.includes(subject)
//       );
//     }
    
//     return filtered;
//   }, [subjects, searchTerm, selectedCategory]);

//   const getSubjectIcon = (subject) => {
//     const icons = {
//       'Java': '☕',
//       'JavaScript': '🟨',
//       'Python': '🐍',
//       'Fullstack': '🌐',
//       'React': '⚛️',
//       'Node.js': '🟢',
//       'CSS': '🎨',
//       'SQL': '🗄️',
//       'Machine Learning': '🤖',
//       'React Native': '📱',
//       'Flutter': '🦋',
//       'iOS': '🍎',
//       'Docker': '🐳',
//       'Kubernetes': '⚓',
//       'AWS': '☁️'
//     };
//     return icons[subject] || '📚';
//   };

//   const getSubjectColor = (subject) => {
//     const colors = {
//       'Java': '#f89820',
//       'JavaScript': '#f7df1e',
//       'Python': '#3776ab',
//       'Fullstack': '#61dafb',
//       'React': '#61dafb',
//       'Node.js': '#339933',
//       'CSS': '#1572b6',
//       'SQL': '#336791',
//       'Machine Learning': '#ff6b6b',
//       'React Native': '#61dafb',
//       'Flutter': '#02569b',
//       'iOS': '#000000',
//       'Docker': '#2496ed',
//       'Kubernetes': '#326ce5',
//       'AWS': '#ff9900'
//     };
//     return colors[subject] || '#667eea';
//   };

//   return (
//     <div className="subject-list">
//       <div className="subject-header">
//         <h2>Choose a Subject to Study</h2>
//         <p className="subtitle">Select from our curated collection of programming topics</p>
//       </div>

//       <div className="search-filters">
//         <div className="search-box">
//           <input
//             type="text"
//             placeholder="Search subjects..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="search-input"
//           />
//           <span className="search-icon">🔍</span>
//         </div>
        
//         <div className="category-filters">
//           <select 
//             value={selectedCategory} 
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="category-select"
//           >
//             <option value="all">All Categories</option>
//             {Object.keys(subjectCategories).map(category => (
//               <option key={category} value={category}>{category}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {filteredSubjects.length === 0 ? (
//         <div className="no-results">
//           <div className="no-results-icon">🔍</div>
//           <h3>No subjects found</h3>
//           <p>Try adjusting your search or category filter</p>
//         </div>
//       ) : (
//         <div className="subjects-grid">
//           {filteredSubjects.map((subject) => (
//             <div
//               key={subject}
//               className="subject-card"
//               onClick={() => onSelect(subject)}
//               style={{
//                 '--subject-color': getSubjectColor(subject)
//               }}
//             >
//               <div className="subject-icon">
//                 {getSubjectIcon(subject)}
//               </div>
//               <div className="subject-content">
//                 <h3>{subject}</h3>
//                 <p>Click to start learning</p>
//                 <div className="subject-meta">
//                   <span className="card-count">lets go see flashcards</span>
//                 </div>
//               </div>
//               <div className="card-arrow">→</div>
//             </div>
//           ))}
//         </div>
//       )}

//       <div className="quick-stats">
//         <div className="stat-card">
//           <span className="stat-number">{subjects.length}</span>
//           <span className="stat-label">Total Subjects</span>
//         </div>
//         <div className="stat-card">
//           <span className="stat-number">{filteredSubjects.length}</span>
//           <span className="stat-label">Showing</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SubjectList;
import React, { useState, useMemo } from 'react';

function SubjectList({ subjects, onSelect }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const subjectCategories = {
    'Programming': ['Java', 'JavaScript', 'Python', 'C++'],
    'Web Development': ['Fullstack', 'React', 'Node.js', 'CSS'],
    'Data Science': ['Python', 'SQL', 'Machine Learning'],
    'Mobile': ['React Native', 'Flutter', 'iOS'],
    'DevOps': ['Docker', 'Kubernetes', 'AWS']
  };

  const filteredSubjects = useMemo(() => {
    let filtered = subjects;
    if (searchTerm) {
      filtered = filtered.filter(s =>
        s.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(s =>
        subjectCategories[selectedCategory]?.includes(s)
      );
    }
    return filtered;
  }, [subjects, searchTerm, selectedCategory]);

  const getSubjectIcon = (subject) => {
    const icons = {
      'Java': '☕', 'JavaScript': '🟨', 'Python': '🐍',
      'Fullstack': '🌐', 'React': '⚛️', 'Node.js': '🟢',
      'CSS': '🎨', 'SQL': '🗄️', 'Machine Learning': '🤖',
      'React Native': '📱', 'Flutter': '🦋', 'iOS': '🍎',
      'Docker': '🐳', 'Kubernetes': '⚓', 'AWS': '☁️'
    };
    return icons[subject] || '📚';
  };

  const getSubjectColor = (subject) => {
    const colors = {
      'Java': '#f89820', 'JavaScript': '#f7df1e', 'Python': '#3776ab',
      'Fullstack': '#61dafb', 'React': '#61dafb', 'Node.js': '#339933',
      'CSS': '#1572b6', 'SQL': '#336791', 'Machine Learning': '#ff6b6b',
      'React Native': '#61dafb', 'Flutter': '#02569b', 'iOS': '#000000',
      'Docker': '#2496ed', 'Kubernetes': '#326ce5', 'AWS': '#ff9900'
    };
    return colors[subject] || '#667eea';
  };

  return (
    <div className="subject-list">
      <div className="subject-header">
        <h2>Choose a Subject to Study</h2>
        <p className="subtitle">Select from our curated collection of programming topics</p>
      </div>

      <div className="search-filters">
        <input
          type="text"
          placeholder="Search subjects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          <option value="all">All Categories</option>
          {Object.keys(subjectCategories).map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="subjects-grid">
        {filteredSubjects.map((subject) => (
          <div
            key={subject}
            className="subject-card"
            onClick={() => onSelect(subject)}
            style={{ '--subject-color': getSubjectColor(subject) }}
          >
            <div className="subject-icon">{getSubjectIcon(subject)}</div>
            <div className="subject-content">
              <h3>{subject}</h3>
              <p>Click to start learning</p>
            </div>
            <div className="card-arrow">→</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubjectList;
