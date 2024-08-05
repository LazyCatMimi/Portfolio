import ContactForm from "./Components/ContactForm";
import Header from "./Components/Header";
import "../Styles/Home.css";
import uiuxIcon from "../Assets/Icons/focus-uiux.svg";
import devIcon from "../Assets/Icons/focus-dev.svg";
import artIcon from "../Assets/Icons/focus-art.svg";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import starIcon from "../Assets/Icons/star-bullet.svg";

// animations
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import StaggeredText from "./Components/StaggeredText";
import LineRevealText from "./Components/LineRevealText";
import ProjectsQuickView from "./Components/ProjectsQuickView";

export default function Home() {
  const uniqueList = [
    {
      title: "10+ Years Art Software",
      desc: "My 10+ years of art software experience makes mastering new web design applications a breeze.",
      icon: "unique-art",
    },
    {
      title: "Design & Development",
      desc: "Every stage of Web Design & Development, from initial design to final code, is within my skill set.",
      icon: "unique-designcode",
    },
    {
      title: "Project Planning",
      desc: "My strength lies in efficiently delegating and organizing tasks to achieve project success.",
      icon: "unique-project",
    },
    {
      title: "Empathetic Personality",
      desc: "As a natural empath, I cultivate a supportive and collaborative workplace, boosting team cohesion and productivity. ",
      icon: "unique-empath",
    },
  ];
  const philosophies = [
    {
      title: "Accessibility",
      desc: "The web should be accessible to everyone. Regardless of ability, accessibility benefits all.",
      icon: "phil-access",
    },
    {
      title: "Mobile-First",
      desc: "Design for mobile devices first, then scale up to larger screens. This ensures a better experience on the most widely used devices and promotes a responsive design mindset.",
      icon: "phil-mobile",
    },
    {
      title: "User-Centered Design",
      desc: "Prioritize the needs and preferences of users to create intuitive and enjoyable experiences.",
      icon: "phil-ucd",
    },
    {
      title: "Aesthetic Integrity",
      desc: "Create visually appealing designs that align with brand identity and resonate with the target audience for a cohesive, memorable user experience.",
      icon: "phil-aesthetic",
    },
  ];
  const stopScalingRef = useRef(null);

  const FeatureList = ({ list, title }) => {
    return (
      <div>
        <h2 className="center-text">{title}</h2>
        <div className="feature-list">
          <div className="col-2">
            {list.map((item, index) => (
              <div
                key={index}
                className={`feature-icon-text ${index % 2 && "even"}`}
              >
                <img
                  src={require(`../Assets/Icons/${item.icon}.svg`)}
                  alt=""
                  className="feature-list-icon"
                />
                <div>
                  <div className="img-text">
                    <img src={starIcon} className="star-list" alt=""></img>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  const HeaderContent = () => (
    <>
      <h1 className="title-sub-1">Hello, I am</h1>
      <h1 className="title-name">
        <StaggeredText text="Quynh Vo" staggerDelay={0.15} />
      </h1>
      <div className="title-sub-2-container">
        <h1 className="title-sub-2">
          Artist<span style={{ color: "white" }}>.</span>
        </h1>
        <h1 className="title-sub-2">
          Designer
          <span style={{ color: "white" }}>.</span>{" "}
        </h1>
        <h1 className="title-sub-2">
          Developer
          <span style={{ color: "white" }}>.</span>{" "}
        </h1>
      </div>
      <Link to="/resume" className="primary-button">
        See Resume
      </Link>
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
      <section className="light-bg pad" id="about">
        <div className="about-container">
          <img
            src={require("../Assets/me.jpg")}
            alt="Quynh smiling"
            className="me-pic"
          ></img>
          <article>
            <h2>
              <StaggeredText text="About Me" staggerDelay={0.1} />
            </h2>
            <p>
              <LineRevealText text="Hello World! My name is Quynh, and I am a student at the University of Central Florida, where I am pursuing a bachelor's degree in Digital Media: Web Design with a minor in Information Technology. My passions lie in web design, development, and art. Having been born in 2002, I witnessed the rapid evolution of technology firsthand, which inspired me to become a creator of unique web experiences. Technology and art are my favorite subjects to learn about and discuss. In my spare time, I enjoy activities such as drawing, paper crafting, fishing, and boating." />
            </p>
          </article>
        </div>
        <div className="unique-list">
          <FeatureList list={uniqueList} title="What Makes Me Unique" />
        </div>
      </section>
      <ProjectsQuickView />
      {/* <section className="light-bg" id="explore-projects">
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
      </section> */}

      <section className="light-bg" id="phil">
        <FeatureList
          list={philosophies}
          title="My Design & Development Philosophies"
        />
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
