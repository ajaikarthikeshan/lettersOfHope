import React, { useState } from 'react';

function LettersCarousel({ letters, loading, error }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');
  const [transition, setTransition] = useState(false);

  const nextLetter = () => {
    if (transition || letters.length <= 1) return;
    setTransition(true);
    setSlideDirection('slide-left');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % letters.length);
      setSlideDirection('');
      setTransition(false);
    }, 500);
  };

  const prevLetter = () => {
    if (transition || letters.length <= 1) return;
    setTransition(true);
    setSlideDirection('slide-right');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + letters.length) % letters.length);
      setSlideDirection('');
      setTransition(false);
    }, 500);
  };

  if (loading) {
    return (
      <div className="loading">
        <span className="loading-text">Loading letters of hope...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        Unable to load messages. Please try again later.
      </div>
    );
  }

  if (!letters || letters.length === 0) {
    return (
      <section className="letters-carousel">
        <h2>Letters of Hope</h2>
        <div className="empty-state">
          No approved messages yet. Be the first to write one!
        </div>
      </section>
    );
  }

  return (
    <section className="letters-carousel">
      <h2>Letters of Hope</h2>
      <div className="carousel-container">
        <button 
          className="nav-button prev" 
          onClick={prevLetter}
          disabled={letters.length <= 1 || transition}
          aria-label="Previous message"
        >
          ←
        </button>
        
        <div className="letter-card-container">
          <div className={`letter-card ${slideDirection}`}>
            <div className="quote-mark" aria-hidden="true">"</div>
            <p className="sender">{letters[currentIndex]?.sender || 'Anonymous'}</p>
            <p className="message">{letters[currentIndex]?.message}</p>
            <div className="letter-count">
              {currentIndex + 1} of {letters.length}
            </div>
          </div>
        </div>

        <button 
          className="nav-button next" 
          onClick={nextLetter}
          disabled={letters.length <= 1 || transition}
          aria-label="Next message"
        >
          →
        </button>
      </div>
    </section>
  );
}

export default LettersCarousel;