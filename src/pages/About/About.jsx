import "./About.css";

const About = () => {
  return (
    <section className="about">

      <div className="about-container">

        <div className="about-header">
          <p>Get To Know Me</p>
          <h1>About Me</h1>
        </div>

        <div className="about-content">

          <div className="about-text">

            <h2>Java Full Stack Developer</h2>

            <p>
              I am a Computer Science Engineering student with a strong
              interest in Java Full Stack Development. I enjoy building
              practical web applications and continuously improving my
              programming and problem-solving skills.
            </p>

            <p>
              I have hands-on experience with Core Java, Spring Boot,
              Spring Data JPA, Hibernate, REST APIs, MySQL and React.js.
              I have worked on academic projects, internships and
              personal projects to apply these technologies in practical
              applications.
            </p>

            <p>
              I am currently looking for an entry-level software
              development opportunity where I can apply my technical
              skills, learn from experienced developers and contribute
              to real-world projects.
            </p>

          </div>

          <div className="about-details">

            <div className="detail-card">
              <h3>Education</h3>
              <p>B.Tech – Computer Science Engineering</p>
            </div>

            <div className="detail-card">
              <h3>Focus</h3>
              <p>Java Backend & Full Stack Development</p>
            </div>

            <div className="detail-card">
              <h3>Technologies</h3>
              <p>Java • Spring Boot • React • MySQL</p>
            </div>

            <div className="detail-card">
              <h3>Career Goal</h3>
              <p>Entry-Level Software Developer</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;