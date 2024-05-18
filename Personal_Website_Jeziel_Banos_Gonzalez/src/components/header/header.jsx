import "./header.css";

export function CreateHeader() {
  const openInNewTab = () => {
    window.open('https://www.linkedin.com/in/jeziel-banos-02514b237/', '_blank');
  };
  return (
    <div className="Welcome">
      <div className="intro">
        <h3 className="hello">Hi, my name is</h3>
        <h1 className="big1">Jeziel Banos Gonzalez</h1>
        <h1 className="big2">Full-Stack Developer</h1>
        <p className="intro-text">
          I’m an Undergraduate student at the University of Arizona working towards
          earning a Bachelor's of Science in Computer Science. My main areas of interest
          are Web Development and Machine Learning. 
        </p>

        <button className="LinkedIn" onClick={() => openInNewTab()}>
          <img src='/images/LinkedIn_logo_initials.png' className="linkin-logo"></img>
          LinkedIn</button>
        
        <button className="Resume" onClick={() => window.open('/documents/Resume-Jeziel_Banos_Gonzalez.pdf')}>
          View Resume
        </button>
      </div>
      <div className="about-waves"></div>
    </div>
  );
}
