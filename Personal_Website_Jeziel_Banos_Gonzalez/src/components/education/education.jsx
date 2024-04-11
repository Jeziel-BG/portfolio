import "./education.css";

export function CreateEducation() {
  return (
    <div className="education-background">
      <div className="flexbox">
        <h1 className="education-num">04.</h1>
        <h1 className="title">Education</h1>
      </div>

      <div className="education-container">
        <div className="UofA-logo-Container">
          <img className="UofA-logo" src="/images/uofa-logo.png" />
        </div>

        <div className="stat-holder">
          <h3 className="degree-title">
            Bachelor of Science in Computer Science
          </h3>
          <h4 className="institution-name">University of Arizona</h4>
          <h4 className="grad-date">Expected Graduation Date: May 2025</h4>
          <h4 className="GPA">GPA: 3.86/4.00</h4>
          <ul className="minor-container">
            <li className="minor">
              Minor in Information Science Technology & Arts (ISTA)
            </li>
            <li className="minor">Minor in Spanish</li>
          </ul>
        </div>
      </div>

      <div className="contact-waves"></div>
    </div>
  );
}
