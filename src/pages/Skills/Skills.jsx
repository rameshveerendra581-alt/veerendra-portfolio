import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills">

      <div className="skills-container">

        <div className="skills-header">
          <p>My Technical Skills</p>
          <h1>Skills</h1>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <h2>Programming</h2>

            <div className="skill-list">
              <span>Java</span>
              <span>DSA</span>
            </div>
          </div>

          <div className="skill-card">
            <h2>Backend</h2>

            <div className="skill-list">
              <span>Spring</span>
              <span>Spring Boot</span>
              <span>Spring MVC</span>
              <span>Spring Data JPA</span>
              <span>Hibernate</span>
              <span>REST APIs</span>
              <span>Servlets</span>
              <span>JDBC</span>
            </div>
          </div>

          <div className="skill-card">
            <h2>Database</h2>

            <div className="skill-list">
              <span>MySQL</span>
              <span>SQL</span>
            </div>
          </div>

          <div className="skill-card">
            <h2>Frontend</h2>

            <div className="skill-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React.js</span>
            </div>
          </div>

          <div className="skill-card">
            <h2>Tools & Technologies</h2>

            <div className="skill-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>Maven</span>
              <span>Postman</span>
              <span>IntelliJ IDEA</span>
              <span>Eclipse</span>
              <span>VS Code</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;