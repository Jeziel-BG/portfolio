import "./aboutMe.css";
export function CreateAboutMe() {
  return (
    <div>

      <div className="background-container">
        <div className="flexbox">
          <h1 className="title-dark-blue">02.</h1>
          <h1 className="title">About Me</h1>
        </div>

        <div className="flexbox">
          <div className="blob"></div>

          <div className="about-me-text-container">
            <p className="about-me-text">
              Hello! My name is Jeziel Banos Gonzalez, and I am an Undergraduate
              student studying computer science at the University of Arizona.
              During my free time, I primarily work on Web Development and 
              Machine Learning projects. My projects range from building small web
              apps to sentiment analysis models using the sklearn library. Below
              are the technologies I use the most.
            </p>

            <div className="flexbox">
              <img className="logo" src='/images/python-logo.png'></img>
              <img className="logo" src="/images/java-logo.png"></img>
              <img className="logo" src="/images/HTML-logo.png"></img>
              <img className="logo" src="/images/CSS-logo.png"></img> 
              <img className="logo" src="/images/Vite-logo.png"></img>
              <img className="logo" src="/images/react-logo.png"></img>
              <img className="logo" src="/images/SQL-logo.png"></img>
              <img className="logo" src="/images/C-Logo.png"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-waves"></div>
    </div>
  );
}
