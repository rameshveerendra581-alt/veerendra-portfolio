import "./Home.css";
import professionalImage from "../../assets/images/projessionsl2.jpeg";

const Home = () => {
  return (
    <section className="home">

      <div className="home-content">

        <p className="home-greeting">
          Hello, I'm
        </p>

        <h1>
          Veerendra Uppari
        </h1>

        <h2>
          Aspiring Java Full Stack Developer
        </h2>

        <p className="home-description">
          I build web applications using Java, Spring Boot,
          React.js and MySQL, with a focus on creating
          clean and practical solutions.
        </p>

        <div className="home-buttons">

          <a
            href="/projects"
            className="btn primary-btn"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="btn secondary-btn"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>

        </div>

      </div>

      <div className="home-image">

        <div className="image-placeholder">
          <img
            src={professionalImage}
            alt="Veerendra Uppari"
          />
        </div>

      </div>

    </section>
  );
};

export default Home;