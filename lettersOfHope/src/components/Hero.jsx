import React from 'react';

function Hero({ onWriteLetterClick }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Letters of امید</h1>
        <p className="mission">
          Join our global campaign to secure the release of Dr. Ahmadreza Djalali, 
          an emergency medicine specialist and scholar wrongfully imprisoned. Your voice matters.
        </p>
        <button className="cta-button" onClick={onWriteLetterClick}>
          Write a Letter
        </button>
      </div>
    </section>
  );
}

export default Hero;