import React, { useState } from 'react';

function LettersCarousel({ letters, loading, error }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');

  if (loading) {
    return <div className="loading">Loading messages of hope...</div>;
  }

  if (error) {
    return <div className="error">Messages of hope are on their way! 🌟</div>;
  }

  if (!letters || letters.length === 0) {
    return <div className="error">No messages available yet. Be the first to write!</div>;
  }

  const nextLetter = () => {
    setSlideDirection('slide-left');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % letters.length);
      setSlideDirection('');
    }, 500);
  };

  const prevLetter = () => {
    setSlideDirection('slide-right');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + letters.length) % letters.length);
      setSlideDirection('');
    }, 500);
  };

  return (
    <section className="letters-carousel">
      <h2>Messages of Hope</h2>
      <div className="carousel-container">
        <button className="nav-button prev" onClick={prevLetter}>←</button>
        <div className="letter-card-container">
          <div className={`letter-card ${slideDirection}`}>
            <div className="quote-mark">"</div>
            <p className="sender">{letters[currentIndex]?.sender || 'Anonymous'}</p>
            <p className="message">{letters[currentIndex]?.message}</p>
            <button className="read-more">Read More</button>
          </div>
        </div>
        <button className="nav-button next" onClick={nextLetter}>→</button>
      </div>
    </section>
  );
}

export default LettersCarousel;