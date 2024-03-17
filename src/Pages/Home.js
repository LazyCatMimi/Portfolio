import ContactForm from "./Components/ContactForm";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "../Styles/Home.css";
import uiuxIcon from "../Assets/focus-uiux.svg";
import devIcon from "../Assets/focus-dev.svg";
import artIcon from "../Assets/focus-art.svg";
import plImg from "../Assets/test.png";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [scaleFactor, setScaleFactor] = useState(1);
  const stopScalingRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollY(scrollTop);

      // Get the position of the element with the stopScalingRef ref
      const stopScalingPoint = stopScalingRef.current
        ? stopScalingRef.current.offsetTop
        : 0;

      // Calculate the scaling factor based on the scroll position
      if (scrollTop <= stopScalingPoint * 0.4) {
        const newScaleFactor = 1 + scrollTop * 0.001; // Adjust the scaling factor as needed
        setScaleFactor(newScaleFactor);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <NavBar />
      <header className="full-page-header">
        <div
          className="background-container"
          style={{ transform: `scale(${scaleFactor})` }}
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
        <h2>Latest Projects</h2>
        <div id="sort-btn-container">
          <button className="sort-projects off-white-text">Web UI/UX</button>
          <button className="sort-projects off-white-text">Mobile UI/UX</button>
          <button className="sort-projects off-white-text">Web Dev</button>
          <button className="sort-projects off-white-text">Mobile Dev</button>
          <button className="sort-projects off-white-text">Design</button>
        </div>

        <div className="projects-grid">
          <article className="dark-bg2">
            <button>
              <img src={plImg} alt="The Suite Spot Salon website"></img>
            </button>
            <div>
              <h3>
                <span className="num off-white-text">01 </span>| The Suite Spot
                Salon
              </h3>
              <p>
                The Suite Spot Salon is a fictitious salon suite client
                developed by our team for our senior design project. This is a
                2-semester project consisting of both the design and development
                phases. Our website allows users to conveniently book
                appointments, purchase items from the shop, and manage their
                accounts.
              </p>
              <button className="primary-button">Read More</button>
            </div>
          </article>
          <article className="dark-bg2">
            <img src={plImg} alt="Noodletopia app"></img>
            <div>
              <h3>Noodletopia</h3>
              <p>
                A mobile application designed for noodle enthusiasts, offering a
                personalized experience for ordering and creating customized
                noodle bowls with various toppings. Users can add reviews for
                their noodle creations and share their unique combinations with
                others. They can save their favorite noodle bowls for easy
                access.
              </p>
              <button className="primary-button">Read More</button>
            </div>
          </article>
        </div>
      </section>
      <section>
        <h2>Explore More Projects</h2>
        <button>UI/UX</button>
        <button>Development</button>
        <button>Art & Design</button>
      </section>
      <section>
        <h2>Contact Me</h2>
        <ContactForm />
      </section>
    </div>
  );
}
