import "./contact.css";

const Contact = () => {
  return (
    <section className="contact">

      <div className="contact-container">

        <div className="contact-header">
          <p>Let's Connect</p>
          <h1>Contact Me</h1>

          <span>
            I'm open to discussing entry-level software development
            opportunities and professional collaborations.
          </span>
        </div>

        <div className="contact-content">

          {/* Contact Information */}

          <div className="contact-info">

            <h2>Get In Touch</h2>

            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:rameshveerendra581@gmail.com">
                rameshveerendra581@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <h3>Phone</h3>
             <a href="tel:+919705455850">
  +91 9705455850
</a>
            </div>

            <div className="contact-item">
              <h3>Location</h3>
              <p>Andhra Pradesh, India</p>
            </div>

            <div className="contact-item">
              <h3>GitHub</h3>
              <a
                href="https://github.com/rameshveerendra581-alt"
                target="_blank"
                rel="noreferrer"
              >
                github.com/rameshveerendra581-alt
              </a>
            </div>

            <div className="contact-item">
              <h3>LinkedIn</h3>
             <a
             href="https://www.linkedin.com/in/veerendra-uppari/"
             target="_blank"
             rel="noreferrer"
                >
              LinkedIn Profile
            </a>
            </div>

          </div>


          {/* Contact Form */}

          <form className="contact-form">

            <div className="form-group">
              <label htmlFor="name">
                Name
              </label>

              <input
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email
              </label>

              <input
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                rows="6"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;