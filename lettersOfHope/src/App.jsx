import { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import OriceProject from './components/Oriceproject.jsx'
import LettersCarousel from './components/ApprovedLetters.jsx';
import Footer from './components/Footer.jsx';
import Modal from './components/Modal.jsx';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [letters, setLetters] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby-OoxFGyzPH31BfXFD5uyFiEblZkWpJ0ltd9bM1ERcKfaKcx6DWwvfIqqHpoutFwHo/exec';

  const fetchApprovedLetters = async () => {
    try {
      setLoading(true);
      const response = await fetch(APPS_SCRIPT_URL);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch messages`);
      }
      
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      setLetters(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching letters:', err);
      setError('Unable to load messages. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApprovedLetters();
    const refreshInterval = setInterval(fetchApprovedLetters, 5 * 60 * 1000);
    return () => clearInterval(refreshInterval);
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen) {
      fetchApprovedLetters();
    }
  };

  return (
    <div className="app">
      <Hero onWriteLetterClick={toggleModal} letterCount={letters.length} loading={loading} />
      <About />
      <OriceProject />
      <LettersCarousel letters={letters} loading={loading} error={error} />
      <div className="cta-section">
        <div className="container text-center">
          <h2>Add Your Voice</h2>
          <p>
            Every letter makes a difference. Join the global community standing in solidarity with Dr. Djalali and his
            family.
          </p>
          <button className="cta-button-large" onClick={toggleModal}>
            Send a Letter of Hope
          </button>
        </div>
      </div>
      <Footer />
      {isModalOpen && <Modal onClose={toggleModal} />}
    </div>
  )
}

export default App;