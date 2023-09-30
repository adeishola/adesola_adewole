import "./contact.css";
import Phone from "../../images/phone_icon.png";
import Email from "../../images/email-icon.png";
import Address from "../../images/location-dot.svg";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_05a373d",
        "template_ituhl3c",
        formRef.current,
        "HjJiMYxD8Z4JdMaDV",
        (formRef.current.value = "")
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +234 805809 0389
            </div>
          </div>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              adewole.adesola@gmail.com
            </div>
          </div>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              GOSGRA Estate, Orimerunmu, off Lagos-Ibadan Expressway, Mowe.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's on your mind?</b> Please get in touch.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              name="message"
              rows="5"
              placeholder="Message"
            />
            <button>Submit</button>
            {done && "Thank you for the message..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
