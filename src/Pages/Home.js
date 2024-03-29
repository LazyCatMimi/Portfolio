import ContactForm from "./Components/ContactForm";
import Header from "./Components/Header";
import "../Styles/Home.css";
import uiuxIcon from "../Assets/Icons/focus-uiux.svg";
import devIcon from "../Assets/Icons/focus-dev.svg";
import artIcon from "../Assets/Icons/focus-art.svg";
import plImg from "../Assets/test.png";
import arrRightIcon from "../Assets/Icons/chevron-right.svg";
import { useState, useRef, useEffect } from "react";

// animations
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import StaggeredText from "./Components/StaggeredText";
import LineRevealText from "./Components/LineRevealText";

export default function Home() {
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
    setActiveSortButton(event.target.value);
  };
  const HeaderContent = () => (
    <>
      <h1 className="title-sub-1">Hello, I am</h1>
      <h1 className="title-name">
        <StaggeredText text="Quynh Vo" staggerDelay={0.15} />
      </h1>
      <h1 className="title-sub-2">
        Artist<span style={{ color: "white" }}>.</span> Designer
        <span style={{ color: "white" }}>.</span> Developer
        <span style={{ color: "white" }}>.</span>
      </h1>
      <button className="primary-button">See Resume</button>
    </>
  );

  // animation for focus banner
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 50 },
  };
  return (
    <main id="Home">
      <Header stopScalingRef={stopScalingRef} Content={HeaderContent} />

      <section ref={stopScalingRef} className="dark-bg" id="focus">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <img src={uiuxIcon} alt="" />
          <p>UI/UX</p>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <img src={devIcon} alt="" />
          <p>Full Stack Development</p>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <img src={artIcon} alt="" />
          <p>Art & Design</p>
        </motion.div>
      </section>
      <section className="light-bg" id="about">
        <img src={plImg} alt="Quynh smiling"></img>
        <article>
          <h2>
            <StaggeredText text="About Me" staggerDelay={0.1} />
          </h2>
          <p>
            <LineRevealText text="Greetings! My name is Quynh, and I am a student at the University of Central Florida, where I am pursuing a bachelor's degree in Digital Media: Web Design with a minor in Information Technology. My passions lie in web design, development, and art. Having been born in 2002, I witnessed the rapid evolution of technology firsthand, which inspired me to become a creator of unique web experiences. Technology and art are my favorite subjects to learn about and discuss. In my spare time, I enjoy engaging in artistic activities such as drawing, which allows me to express my creativity." />
          </p>
        </article>
      </section>
      <section className="dark-bg" id="latest-projects">
        <h2>
          <StaggeredText text="Projects Quick View" staggerDelay={0.05} />
        </h2>
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
        <h2>
          <StaggeredText text="Read More on Projects" staggerDelay={0.05} />
        </h2>
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
      <section className="dark-bg3" id="contact-me" style={{ flex: 1 }}>
        <h2>
          <StaggeredText text="Contact Me" staggerDelay={0.1} />
        </h2>
        <ContactForm />
      </section>
    </main>
  );
}
