import React, { useState } from "react";
import "../../Styles/Components/Contact.css";
import gitIcon from "../../Assets/Icons/contact-github.svg";
import linkedinIcon from "../../Assets/Icons/contact-linkedin.svg";
import mailIcon from "../../Assets/Icons/contact-mail.svg";
import phoneIcon from "../../Assets/Icons/contact-phone.svg";
import { useForm, ValidationError } from "@formspree/react";
import { FromBottom } from "./Animation/Animated";

export default function ContactForm() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Using Formspree's useForm hook
  const [state, handleSubmit] = useForm("mrbzkjpa"); // Replace with your Formspree ID

  const handleFormSubmit = async (e) => {
    await handleSubmit(e);
    if (state.succeeded) {
      setIsPopupVisible(true);
      setFormSubmitted(true);
    }
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setFormSubmitted(false);
  };

  return (
    <div id="contact-form">
      {isPopupVisible && (
        <div className="popup">
          <div>
            <h2>Message Sent!</h2>
            <p>
              Thank you! Your message has been sent. I will get back to you as
              soon as possible.
            </p>
            <button
              className="secondary-button"
              style={{
                backgroundColor: "var(--token-secondary-surface-default)",
              }}
              onClick={handleClosePopup}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {!formSubmitted && (
        <FromBottom>
          <form onSubmit={handleFormSubmit}>
            <h3 className="off-white-text">Chat with me. Say hi!</h3>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Message..."
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div>
              <button
                type="submit"
                className="primary-button"
                disabled={state.submitting}
                tabIndex={0}
              >
                Submit
              </button>
            </div>
          </form>
        </FromBottom>
      )}

      <div id="socials">
        <h4 className="light-font-weight">Contact Info</h4>

        <a href="mailto:quynh.vo3314@gmail.com" className="social-link">
          <img src={mailIcon} alt="email" /> quynh.vo3314@gmail.com
        </a>

        <a href="tel:+14077972019" className="social-link">
          <img src={phoneIcon} alt="phone number" /> (407) 797-2019
        </a>

        <h4 className="light-font-weight">Socials</h4>

        <a
          href="https://www.linkedin.com/in/quynh-vo-7b714222b"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <img src={linkedinIcon} alt="linkedIn" />
          Quynh Vo
        </a>

        <a
          href="https://github.com/LazyCatMimi"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <img src={gitIcon} alt="Github" />
          LazyCatMimi
        </a>
      </div>
    </div>
  );
}
