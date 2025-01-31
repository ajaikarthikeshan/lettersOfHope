import { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import OriceProject from './components/Oriceproject.jsx'
import LettersCarousel from './components/ApprovedLetters.jsx';
import Footer from './components/Footer.jsx';
import Modal from './components/Modal.jsx';

// Temporary mock data for development
const mockLetters = [
  {
    id: 1,
    sender: "John Doe",
    message: "Stay strong, Dr. Djalali. The academic community stands with you."
  },
  {
    id: 2,
    sender: "Anonymous",
    message: "Your dedication to emergency medicine and disaster response continues to inspire us all."
  }
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [letters, setLetters] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Toggle modal function
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    // For development, use mock data
    setLetters(mockLetters);
    setLoading(false);
  }, []);

  return (
    <div className="app">
      <Hero onWriteLetterClick={toggleModal} />
      <About />
      <OriceProject />
      <LettersCarousel letters={letters} loading={loading} error={error} />
      <Footer />
      {isModalOpen && <Modal onClose={toggleModal} />}
    </div>
  );
}

export default App;