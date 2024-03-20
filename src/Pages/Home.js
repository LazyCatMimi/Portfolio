import ContactForm from "./Components/ContactForm";

import "../Styles/Home.css";
import uiuxIcon from "../Assets/Icons/focus-uiux.svg";
import devIcon from "../Assets/Icons/focus-dev.svg";
import artIcon from "../Assets/Icons/focus-art.svg";
import plImg from "../Assets/test.png";
import arrRightIcon from "../Assets/Icons/chevron-right.svg";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [scaleFactor, setScaleFactor] = useState(1);
  const [rotationAngle, setRotationAngle] = useState(0);
  const stopScalingRef = useRef(null);

  const [activeSortButton, setActiveSortButton] = useState("all");
  const sortButtons = [
    { title: "All", id: "all" },
    { title: "Web UI/UX", id: "web-ui-ux" },
    { title: "Mobile UI/UX", id: "mobile-ui-ux" },
    { title: "Web Dev", id: "web-dev" },
    { title: "Mobile Dev", id: "mobile-dev" },
    { title: "Design", id: "design" },
  ];
  const handleRadioButtonChange = (event) => {
    setActiveSortButton(event.target.value); // Update the active button
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollY(scrollTop);

      // Get the position of the element with the stopScalingRef ref
      const stopScalingPoint = stopScalingRef.current
        ? stopScalingRef.current.offsetTop
        : 0;

      // Calculate the scaling factor based on the scroll position
      if (scrollTop <= stopScalingPoint * 0.7) {
        const newScaleFactor = 1 + scrollTop * 0.002;
        setScaleFactor(newScaleFactor);
        const newRotationAngle = scrollTop * 0.1;
        setRotationAngle(newRotationAngle);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="full-page-header">
        <div
          className="background-container"
          style={{
            transform: `scale(${scaleFactor}) rotate(${rotationAngle}deg)`,
          }}
        >
          {/* Background image goes here */}
        </div>
        <div className="content">
          <h1 className="title-sub-1">Hello, I am</h1>
          <h1 className="title-name">Quynh Vo</h1>
          <h1 className="title-sub-2">
            Artist<span style={{ color: "white" }}>.</span> Designer
            <span style={{ color: "white" }}>.</span> Developer
            <span style={{ color: "white" }}>.</span>
          </h1>
          <button className="primary-button">See Resume</button>
        </div>
      </header>

      <section ref={stopScalingRef} className="dark-bg" id="focus">
        <div>
          <img src={uiuxIcon} alt=""></img>
          <p>UI/UX</p>
        </div>
        <div>
          <img src={devIcon} alt=""></img>
          <p>Full Stack Development</p>
        </div>
        <div>
          <img src={artIcon} alt=""></img>
          <p>Art & Design</p>
        </div>
      </section>
      <section className="light-bg" id="about">
        <img src={plImg} alt="Quynh smiling"></img>
        <article>
          <h2>About Me</h2>
          <p>
            Greetings! My name is Quynh, and I am a student at the University of
            Central Florida, where I am pursuing a bachelor's degree in Digital
            Media: Web Design with a minor in Information Technology. My
            passions lie in web design, development, and art. Having been born
            in 2002, I witnessed the rapid evolution of technology firsthand,
            which inspired me to become a creator of unique web experiences.
            Technology and art are my favorite subjects to learn about and
            discuss. In my spare time, I enjoy engaging in artistic activities
            such as drawing, which allows me to express my creativity.
          </p>
        </article>
      </section>
      <section className="dark-bg" id="latest-projects">
        <h2>Projects Quick View</h2>
        <div id="sort-btn-container">
          {/* Map over the button data to render each radio button */}
          {sortButtons.map((button, index) => (
            <label
              key={index}
              className={`sort-projects off-white-text ${
                activeSortButton === button.id ? "sort-projects-active" : ""
              }`}
              tabIndex={0}
            >
              <input
                type="radio"
                id={button.id}
                name="sortType"
                value={button.id}
                checked={activeSortButton === button.id}
                onChange={handleRadioButtonChange}
              />
              {button.title}
            </label>
          ))}
        </div>

        <div className="projects-grid">
          <article className="dark-bg2">
            <button className="project-hover">
              <img src={plImg} alt="The Suite Spot Salon website"></img>
            </button>
            <div>
              <h3>
                <span className="num off-white-text">01 </span>| The Suite Spot
                Salon
              </h3>
              <p>
                A salon website where users can conveniently book appointments,
                purchase items from the shop, and manage their accounts.
              </p>
              <button className="primary-button">Read More</button>
            </div>
          </article>
          <article className="dark-bg2">
            <button className="project-hover">
              <img src={plImg} alt="The Suite Spot Salon website"></img>
            </button>
            <div>
              <h3>
                <span className="num off-white-text">01 </span>| The Suite Spot
                Salon
              </h3>
              <p>
                A salon website where users can conveniently book appointments,
                purchase items from the shop, and manage their accounts.
              </p>
              <button className="primary-button">Read More</button>
            </div>
          </article>
          <article className="dark-bg2">
            <button className="project-hover">
              <img src={plImg} alt="The Suite Spot Salon website"></img>
            </button>
            <div>
              <h3>
                <span className="num off-white-text">01 </span>| The Suite Spot
                Salon
              </h3>
              <p>
                A salon website where users can conveniently book appointments,
                purchase items from the shop, and manage their accounts.
              </p>
              <button className="primary-button">Read More</button>
            </div>
          </article>
        </div>
      </section>
      <section className="light-bg" id="explore-projects">
        <h2>Read More on Projects</h2>
        <div id="explore-btn-container">
          <button id="uiux-btn">
            <div>
              UI/UX
              <img src={arrRightIcon} alt="" />
            </div>
          </button>
          <button id="dev-btn">
            <div>
              Development
              <img src={arrRightIcon} alt="" />
            </div>
          </button>
          <button id="artdes-btn">
            <div>
              Art & Design
              <img src={arrRightIcon} alt="" />
            </div>
          </button>
        </div>
      </section>
      <section className="dark-bg3" id="contact-me">
        <h2>Contact Me</h2>
        <ContactForm />
      </section>
    </div>
  );
}
