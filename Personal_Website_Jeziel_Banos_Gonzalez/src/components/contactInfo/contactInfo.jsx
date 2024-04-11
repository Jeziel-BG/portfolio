import { useRef } from "react";
import "./contactinfo.css";
import emailjs from "@emailjs/browser";

export function CreateContact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5hqtse6",
        "template_i9bg4eb",
        form.current,
        "eKY2aCJ8dfwiOh2-d"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message was sent.")
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-background">
      <div className="flexbox">
        <h1 className="title-lighter-blue">05.</h1>
        <h1 className="title">Contact</h1>
      </div>

      <div className="contact-form-container">
        <h1 className="form-title">Get in touch.</h1>
        <h2 className="contact-info">
          If you would like to contact me, please use the email
          jezielbgon@gmail.com or the form below.
        </h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          
          <input className= "contact-input" type="text" name="user_name" placeholder="Your Name"/>
          
          <input className= "contact-input"type="email" name="user_email" placeholder="Your Email"/>
          
          <textarea className= "message-input" name="message" placeholder="Your Message"/>
          <input className="submit-button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
