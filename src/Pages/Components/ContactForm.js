import React, { useState } from "react";
import "../../Styles/Components/Contact.css";
import gitIcon from "../../Assets/Icons/contact-github.svg";
import linkedinIcon from "../../Assets/Icons/contact-linkedin.svg";
import mailIcon from "../../Assets/Icons/contact-mail.svg";
import phoneIcon from "../../Assets/Icons/contact-phone.svg";

export default function ContactForm() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any action here with formData, like sending it to a server
    console.log(formData);
    // Clear form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div id="contact-form">
      <form onSubmit={handleSubmit}>
        <h3 className="off-white-text">Chat with me. Say hi!</h3>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message..."
            required
          />
        </div>
        <div>
          <button type="submit" className="primary-button">
            Submit
          </button>
        </div>
      </form>
      <div id="socials">
        <h3 className="off-white-text">Contact Info</h3>
        <a>
          <img src={mailIcon} alt="email" />
          <p>quynh.vo3314@gmail.com</p>
        </a>
        <a>
          <img src={phoneIcon} alt="phone number" />
          <p>(407) 797-2019</p>
        </a>
        <h3 className="off-white-text">Socials</h3>
        <a>
          <img src={linkedinIcon} alt="linkedIn" />
          <p>Quynh Vo</p>
        </a>
        <a>
          <img src={gitIcon} alt="Github" />
          <p>LazyCatMimi</p>
        </a>
      </div>
    </div>
  );
}
