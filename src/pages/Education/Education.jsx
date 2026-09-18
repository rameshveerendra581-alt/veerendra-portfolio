import "./Education.css";

const Education = () => {
  return (
    <section className="education">

      <div className="education-container">

        <div className="education-header">
          <p>My Academic Background</p>
          <h1>Education</h1>
        </div>

        <div className="education-list">

          {/* B.Tech */}

          <div className="education-card">

            <div className="education-year">
              2022 - 2026
            </div>

            <div className="education-content">

              <h2>
                B.Tech - Computer Science and Engineering
              </h2>

              <h3>
                Newton Institute of Science & Technology
              </h3>

              <p>
                Macherla, Andhra Pradesh
              </p>

              <p>
                CGPA: 7.8
              </p>

            </div>

          </div>


          {/* Intermediate */}

          <div className="education-card">

            <div className="education-year">
              2020 - 2022
            </div>

            <div className="education-content">

              <h2>
                Intermediate - MPC
              </h2>

              <h3>
                Sri Venkateshwara Junior College
              </h3>

              <p>
                Tirupati, Andhra Pradesh
              </p>

              <p>
                Percentage: 69%
              </p>

            </div>

          </div>


          {/* SSC */}

          <div className="education-card">

            <div className="education-year">
              2020
            </div>

            <div className="education-content">

              <h2>
                SSC
              </h2>

              <h3>
                ZP High School, Pulakurthy
              </h3>

              <p>
                Andhra Pradesh
              </p>

              <p>
                Percentage: 90%
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;