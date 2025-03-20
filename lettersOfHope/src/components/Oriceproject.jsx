function OriceProject() {
  return (
    <section className="orice">
      <div className="orice-content">
        <div className="orice-text">
          <h2>SARxUBC</h2>
          <p>
            The UBC Scholars in Prison Engagementship is a collaborative initiative that brings together students,
            faculty, and advocacy groups to support imprisoned academics worldwide. Rooted in the principles of academic
            freedom, human rights, and global solidarity, this program works in partnership with the Scholars at Risk
            (SAR) Network to raise awareness, mobilize advocacy efforts, and contribute to the protection of scholars
            facing persecution.
          </p>
        </div>
        <div className="orice-image">
          <div className="image-container">
            <img
              src="/images/orice-placeholder.jpg"
              alt="UBC ORICE Project initiatives"
              className="project-image"
              onError={(e) => {
                e.target.src = "/placeholder.svg?height=400&width=600"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OriceProject

