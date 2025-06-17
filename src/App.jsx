import { useState } from 'react'

import './App.css'

const deck = {
  title: "",
  description: "Replace these with your own questions & answers!",
  cards: [
    { q: "What is the square root of 81?",               a: "9" },
    { q: "Who wrote 'Romeo and Juliet'?",                a: "William Shakespeare" },
    { q: "Chemical symbol for Sodium?",                  a: "Na" },
    { q: "Largest planet in our solar system?",          a: "Jupiter" },
    { q: "Sun Rises at ?",                               a: "East" },
    { q: "Binary representation of decimal 5?",          a: "101" },
    { q: "H₂O is commonly known as?",                    a: "Water" },
    { q: "Primary language spoken in Brazil?",           a: "Portuguese" },
    { q: "Who painted the Mona Lisa?",                   a: "Leonardo da Vinci" },
    { q: "Where is the Sahara Desert?",     a: "Africa" },
  ],
};

export default function App() {
  const [index, setIndex] = useState(() =>
    Math.floor(Math.random() * deck.cards.length)
  );
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped((f) => !f);

  const nextCard = () => {
    let next = Math.floor(Math.random() * deck.cards.length);
    while (next === index && deck.cards.length > 1) {
      next = Math.floor(Math.random() * deck.cards.length);
    }
    setIndex(next);
    setFlipped(false); 
  };

  const card = deck.cards[index];

  return (
    <div className="wrapper">
      <header className="header">
        <h1>{deck.title}</h1>
        <p>{deck.description}</p>
        <small>Total cards: {deck.cards.length}</small>
      </header>

      <div className="container" onClick={handleFlip}>
        <div className={`card ${flipped ? "flipped" : ""}`}>
          <div className="face front">
            <h2>{card.q}</h2>
          </div>
          <div className="face back">
            <h2>{card.a}</h2>
          </div>
        </div>
      </div>
      <button className="next-btn" onClick={nextCard}>
        Next ▸
      </button>
    </div>
  );
}
