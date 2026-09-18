import "./Internships.css";

const Internships = () => {
  return (
    <section className="internships">

      <div className="internships-container">

        <div className="internships-header">
          <p>My Professional Experience</p>
          <h1>Internships</h1>
        </div>

        <div className="internships-list">

          {/* Internship 1 */}

          <div className="internship-card">

            <div className="internship-number">
              01
            </div>

            <div className="internship-content">

              <h2>Java Full Stack Development Intern</h2>

              <h3>VLX IT Solutions</h3>

              <p>
                Gained hands-on experience in Java Full Stack Development
                and worked with backend and frontend technologies used
                to build web applications.
              </p>

              <div className="internship-tech">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>React.js</span>
                <span>MySQL</span>
              </div>

            </div>

          </div>


          {/* Internship 2 */}

          <div className="internship-card">

            <div className="internship-number">
              02
            </div>

            <div className="internship-content">

              <h2>Web Development Intern</h2>

              <h3>Internship Studio</h3>

              <p>
                Developed foundational knowledge of web development
                and gained practical experience with frontend web
                technologies.
              </p>

              <div className="internship-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Web Development</span>
              </div>

            </div>

          </div>


          {/* Internship 3 */}

          <div className="internship-card">

            <div className="internship-number">
              03
            </div>

            <div className="internship-content">

              <h2>MERN Stack Intern</h2>

              <h3>Datavalley</h3>

              <p>
                Gained practical exposure to MERN stack development
                and learned how frontend, backend and database
                technologies work together in web applications.
              </p>

              <div className="internship-tech">
                <span>MongoDB</span>
                <span>Express.js</span>
                <span>React.js</span>
                <span>Node.js</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Internships;