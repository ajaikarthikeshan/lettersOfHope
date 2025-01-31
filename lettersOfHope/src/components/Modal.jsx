import React from 'react';

function Modal({ onClose }) {
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScyfl_Ebu7ySUxfaTnMqiM1iDCCFofC5o5-uAzzN6ZxTij6rw/viewform?embedded=true";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <iframe
          src={GOOGLE_FORM_URL}
          width="100%"
          height="600"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading form...
        </iframe>
      </div>
    </div>
  );
}

export default Modal;