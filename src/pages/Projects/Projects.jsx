import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects">

      <div className="projects-container">

        <div className="projects-header">
          <p>What I Have Built</p>
          <h1>Projects</h1>
        </div>

        <div className="projects-grid">

          {/* Student Management System */}

          <div className="project-card">

            <h2>Student Management System</h2>

            <p>
              A CRUD-based web application for managing student
              information. The application allows users to create,
              view, update and delete student records.
            </p>

            <div className="project-tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>React.js</span>
              <span>MySQL</span>
              <span>REST API</span>
            </div>

            <a
              href="https://github.com/rameshveerendra581-alt/StudentManagmentCRUD-"
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              View on GitHub
            </a>

          </div>


          {/* Book Management System */}

          <div className="project-card">

            <h2>Book Management System</h2>

            <p>
              A web application for managing books and book-related
              information using a Spring Boot backend and React.js
              frontend.
            </p>

            <div className="project-tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>React.js</span>
              <span>MySQL</span>
              <span>REST API</span>
            </div>

            <a
              href="#"
              className="project-btn"
            >
              View Project
            </a>

          </div>


          {/* Secure Electronic Payment System */}

          <div className="project-card">

            <h2>
              Secure Electronic Payment System for E-Commerce
            </h2>

            <p>
              An academic web application designed to provide a
              secure electronic payment flow for e-commerce using
              encryption and role-based interactions between users,
              merchants and banks.
            </p>

            <div className="project-tech">
              <span>Java</span>
              <span>Servlets</span>
              <span>JSP</span>
              <span>MySQL</span>
              <span>Tomcat</span>
            </div>

            <a
              href="#"
              className="project-btn"
            >
              View Project
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;