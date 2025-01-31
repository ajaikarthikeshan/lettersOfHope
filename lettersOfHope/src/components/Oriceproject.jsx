import React from 'react';

function OriceProject() {
  return (
    <section className="orice">
      <div className="orice-content">
        <div className="orice-text">
          <h2>UBC ORICE Project</h2>
          <p>
            A university-led initiative to protect academic freedom and support scholars 
            at risk worldwide. Through advocacy, research, and community engagement, 
            we work to safeguard the fundamental right to education and scholarly pursuit.
          </p>
        </div>
        <div className="orice-image">
          <img 
            src="/images/orice-placeholder.jpg" 
            alt="UBC ORICE Project initiatives"
            className="project-image"
          />
        </div>
      </div>
    </section>
  );
}

export default OriceProject;