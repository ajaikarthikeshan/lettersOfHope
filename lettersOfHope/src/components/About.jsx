function About() {
  return (
    <section className="about">
      <div className="about-content">
        <img
          src="/images/djalali.jpg"
          alt="Dr. Ahmadreza Djalali"
          className="profile-image"
          onError={(e) => {
            e.target.src = "https://placehold.co/400x600/e2e8f0/1e293b?text=Dr.+Djalali"
          }}
        />
        <div className="bio">
          <h2>About Dr. Ahmadreza Djalali</h2>
          <p>
            Dr. Ahmadreza Djalali is an Iranian-Swedish disaster medicine doctor and researcher who has been wrongfully
            imprisoned in Iran since 2016. He was arrested while attending academic workshops and later sentenced to
            death on unfounded charges.
          </p>
          <p>
            Prior to his arrest, Dr. Djalali was a respected scholar who collaborated with universities worldwide,
            contributing to emergency medicine and disaster response research. His expertise has helped save countless
            lives in crisis situations.
          </p>
          <p>
            Despite international outcry and deteriorating health conditions, Dr. Djalali remains in prison. His case
            represents a critical threat to academic freedom and human rights, demanding urgent global attention and
            action.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
