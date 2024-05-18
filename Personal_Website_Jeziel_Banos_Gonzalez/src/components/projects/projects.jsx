import "./projects.css";

export function CreateProjects() {
  return (
    <div className="projects-holder">
      <div className="flexbox">
        <h1 className="title-blue">03.</h1>
        <h1 className="title">Projects</h1>
      </div>
      <div className="project-folder">
        <div className="icon">
          <img className="icon-image" src="/images/python-logo.png"></img>
        </div>

        <h1 className="project-title">Text Sentiment Models</h1>
        <p className="project-description">
          A collection of Machine Learning models trained on the same dataset
          with different training approaches that can accurately predict if a
          given twitter post is considered sexist. (Group Project)
        </p>
        <button className="project-button" onClick={() => window.open('/documents/request.pdf')}>View</button>
      </div>

      <div className="project-folder">
        <div className="icon">
          <img className="icon-image" src="/images/python-logo.png"></img>
        </div>

        <h1 className="project-title">Facial Recognition</h1>
        <p className="project-description">
          A program capable of identifying individuals using computer vision.
          Uses the openCV library. Program first identifies if recognized people
          are in front of the camera, if not, an email is sent out as an alarm.
        </p>
        <button className="project-button" onClick={() => window.open('/documents/Facial-Recognition-Video.mp4')}>View</button>
      </div>

      <div className="project-folder"> 
      <div className="icon">
        <img className="icon-image" src="/images/react-logo.png"></img>
      </div>
      <h1 className="project-title">Portfolio Website</h1>
      <p className="project-description">
        A portfolio website made using React that introduces who I am and the 
        projects that I've worked on.
      </p>
      <button className="project-button" onClick={() => window.open('https://jeziel-banos-gonzalez.netlify.app/', "_self")}>View</button>
      </div>

      <div className="project-folder"> 
      <div className="icon">
        <img className="icon-image" src="/images/java-logo.png"></img>
      </div>
      <h1 className="project-title">Mock Arcade Database Design & Implementation</h1>
      <p className="project-description">
        A collaboratively built java program utilizing JDBC to connect to an Oracle SQL Database 
        for a restaurant arcade buisness allowing front desk
        workers to update and query the database. 
      </p>
      <button className="project-button" onClick={() => window.open('https://jeziel-banos-gonzalez.netlify.app/', "_self")}>View</button>
      </div>

      <div className="education-waves"></div>
    </div>
  );
}
