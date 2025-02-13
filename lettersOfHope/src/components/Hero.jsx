import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

function Hero({ onWriteLetterClick, letterCount = 0, loading }) {
  const [daysSinceImprisonment, setDaysSinceImprisonment] = useState(0);
  const [displayedDays, setDisplayedDays] = useState(0);
  const [displayedLetters, setDisplayedLetters] = useState(0);

  // Calculate days since imprisonment
  useEffect(() => {
    const calculateDays = () => {
      const imprisonmentDate = new Date('2016-04-26');
      const today = new Date();
      const diffTime = Math.abs(today - imprisonmentDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysSinceImprisonment(diffDays);
    };

    calculateDays();

    const now = new Date();
    const night = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0, 0, 0
    );
    const msToMidnight = night.getTime() - now.getTime();

    const timeout = setTimeout(() => {
      calculateDays();
      const interval = setInterval(calculateDays, 24 * 60 * 60 * 1000);
      return () => clearInterval(interval);
    }, msToMidnight);

    return () => clearTimeout(timeout);
  }, []);

  // Animate days counter
  useEffect(() => {
    if (daysSinceImprisonment > 0) {
      const duration = 3000;
      const steps = 25;
      const stepValue = daysSinceImprisonment / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;

      const timer = setInterval(() => {
        if (currentStep < steps) {
          setDisplayedDays(Math.round(stepValue * currentStep));
          currentStep++;
        } else {
          setDisplayedDays(daysSinceImprisonment);
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [daysSinceImprisonment]);

  // Animate letters counter
  useEffect(() => {
    if (!loading && letterCount > 0) {
      const duration = 200; 
      const steps = 1;
      const stepValue = letterCount / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;

      const timer = setInterval(() => {
        if (currentStep < steps) {
          setDisplayedLetters(Math.round(stepValue * currentStep));
          currentStep++;
        } else {
          setDisplayedLetters(letterCount);
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [letterCount, loading]);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Letters of امید Hope</h1>
        <p className="mission">
          Join our global campaign to secure the release of Dr. Ahmadreza Djalali, 
          an emergency medicine specialist and scholar wrongfully imprisoned. Your voice matters.
        </p>
        <button className="cta-button" onClick={onWriteLetterClick}>
          <span className="icon">
            <Send size={20} strokeWidth={2} />
          </span>
          <span className="text">send a letter</span>
        </button>
        <div className="hero-stats">
          <p className="stat-item">
            <span className="stat-number">{displayedDays} Days</span> since Dr. Djalali's imprisonment
          </p>
          <p className="stat-item">
            {loading ? (
              <span>Loading...</span>
            ) : (
              <>
                <span className="stat-number">{displayedLetters} Letters</span> of hope sent
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;