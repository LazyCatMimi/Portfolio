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
    <div>
      <form onSubmit={handleSubmit}>
        <h4 className="off-white-text">Chat with me. Say hi!</h4>
        <div>
          <label htmlFor="name">Name:</label>
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
          <label htmlFor="email">Email:</label>
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
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message..."
            required
          />
        </div>
        <button type="submit" className="primary-button">
          Submit
        </button>
      </form>
    </div>
  );
}
