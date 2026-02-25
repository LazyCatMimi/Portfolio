import ContactForm from "./Components/ContactForm";
import Header from "./Components/Header";
import "../Styles/Home.css";
import PATHS from "../Data/Pages.json";
import starIcon from "../Assets/Icons/star-bullet.svg";
import arrRightIcon from "../Assets/Icons/arrow-right.svg";
// animations
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import StaggeredText from "./Components/Animation/StaggeredText";
import { AnimatedBackground } from "./Components/Animation/Animated";
import { FromBottom } from "./Components/Animation/Animated";
import { ProjectCard } from "./Components/ProjectsQuickView";
import PROJECTS from "..//Data/Projects.json";
import EXP from "../Data/Experience.json";
// import ProjectsQuickView from "./Components/ProjectsQuickView";
import Footer from "./Components/Footer";
import { NavHashLink } from "react-router-hash-link";


export default function Home() {
  // const uniqueList = [
  //   {
  //     title: "10+ Years Art Software",
  //     desc: "My 10+ years of art software experience makes mastering new web design applications a breeze.",
  //     icon: "unique-art",
  //   },
  //   {
  //     title: "Design & Development",
  //     desc: "Every stage of Web Design & Development, from initial design to final code, is within my skill set.",
  //     icon: "unique-designcode",
  //   },
  //   {
  //     title: "Project Planning",
  //     desc: "My strength lies in efficiently delegating and organizing tasks to achieve project success.",
  //     icon: "unique-project",
  //   },
  //   {
  //     title: "Empathetic Personality",
  //     desc: "As a natural empath, I cultivate a supportive and collaborative workplace, boosting team cohesion and productivity. ",
  //     icon: "unique-empath",
  //   },
  // ];
  // const philosophies = [
  //   {
  //     title: "Accessibility",
  //     desc: "The web should be accessible to everyone. Regardless of ability, accessibility benefits all.",
  //     icon: "phil-access",
  //   },
  //   {
  //     title: "Mobile-First",
  //     desc: "Design for mobile devices first, then scale up to larger screens. This ensures a better experience on the most widely used devices and promotes a responsive design mindset.",
  //     icon: "phil-mobile",
  //   },
  //   {
  //     title: "User-Centered Design",
  //     desc: "Prioritize the needs and preferences of users to create intuitive and enjoyable experiences.",
  //     icon: "phil-ucd",
  //   },
  //   {
  //     title: "Aesthetic Integrity",
  //     desc: "Create visually appealing designs that align with brand identity and resonate with the target audience for a cohesive, memorable user experience.",
  //     icon: "phil-aesthetic",
  //   },
  // ];
  // const stopScalingRef = useRef(null);

  // const FeatureList = ({ list, title }) => {
  //   const { ref, inView } = useInView({
  //     triggerOnce: true,
  //     threshold: 0.5, // Adjust the threshold to control how much of the element should be in view
  //   });

  //   const containerVariants = {
  //     hidden: { opacity: 0 },
  //     visible: {
  //       opacity: 1,
  //       transition: {
  //         staggerChildren: 0.2,
  //       },
  //     },
  //   };

  //   const itemVariants = {
  //     hidden: { opacity: 0, y: 50 },
  //     visible: { opacity: 1, y: 0 },
  //   };

  //   return (
  //     <div>
  //       <h2 className="center-text">
  //         <StaggeredText text={title} staggerDelay={0.03} />
  //       </h2>
  //       <div className="feature-list" ref={ref}>
  //         <motion.div
  //           className="col-2"
  //           variants={containerVariants}
  //           initial="hidden"
  //           animate={inView ? "visible" : "hidden"}
  //         >
  //           {list.map((item, index) => (
  //             <motion.div
  //               key={index}
  //               className={`feature-icon-text ${index % 2 ? "even" : ""}`}
  //               variants={itemVariants}
  //             >
  //               <img
  //                 src={require(`../Assets/Icons/${item.icon}.svg`)}
  //                 alt=""
  //                 className="feature-list-icon"
  //               />
  //               <div>
  //                 <div className="img-text">
  //                   <img src={starIcon} className="star-list" alt="" />
  //                   <h3>{item.title}</h3>
  //                 </div>
  //                 <p>{item.desc}</p>
  //               </div>
  //             </motion.div>
  //           ))}
  //         </motion.div>
  //       </div>
  //     </div>
  //   );
  // };

  const HeaderContent = () => (
    <div className="max-width">
      <div>
        <h1 className="title-sub-1">Hello, I am</h1>
        <h1 className="title-name">
          <StaggeredText text="Quynh Vo" staggerDelay={0.15} />
        </h1>
        <div className="title-sub-2-container">
          <h1 className="title-sub-2">
            <span className="font-bold text-[var(--token-primary-text-lighter)]">
              UI/UX Designer
            </span>{" "}
            <i>bridging design and development</i>
          </h1>
        </div>
        <div className="button-container">
          <NavHashLink to="#selected-projects" className="primary-button">
            See Projects
          </NavHashLink>
          <NavHashLink to="#contact-me" className="secondary-button">
            Contact Me
          </NavHashLink>
        </div>
      </div>
    </div>
  );

  return (
    <main id="Home" className="background1">
      <Header HeaderContent={HeaderContent} toColor="toPurple" />
      {/* <section ref={stopScalingRef} className="dark-bg" id="focus">
        <FocusBanner />
      </section> */}
      <AnimatedBackground toColor="toBlack">
        <section id="about">
          {/* <FocusBanner />  */}
          <div className=" about-container max-width">
            <img
              src={require("../Assets/me.jpg")}
              alt=""
              className="me-pic glow"
            ></img>
            <article>
              <h2>
                <StaggeredText text="About Me" staggerDelay={0.1} />
              </h2>
              <hr className="line w-full" />

              <FromBottom>
                <p>
                  Hello World! My name is Quynh, and I am a student at the
                  University of Central Florida, where I am pursuing a
                  bachelor's degree in Digital Media: Web Design with a minor in
                  Information Technology. My passions lie in web design,
                  development, and art. Having been born in 2002, I witnessed
                  the rapid evolution of technology firsthand, which inspired me
                  to become a creator of unique web experiences. Technology and
                  art are my favorite subjects to learn about and discuss. In my
                  spare time, I enjoy activities such as drawing, paper
                  crafting, fishing, and boating.
                </p>
              </FromBottom>
            </article>
          </div>
          {/* <div className="unique-list">
          <FeatureList list={uniqueList} title="What Makes Me Unique" />
        </div> */}
        </section>
      </AnimatedBackground>
      <section
        id="selected-projects"
        style={{ background: "var(--token-secondary-surface-darker)" }}
      >
        <div className="max-width">
          <h2 className="text-center m-0">
            <StaggeredText text="Selected Projects" staggerDelay={0.05} />
          </h2>
          <hr className="line" />
          <div className="projects-grid" id="latest-projects">
            {PROJECTS.slice(0, 3).map((project, index) => (
              <FromBottom>
                <ProjectCard key={index} {...project} i={index} />
              </FromBottom>
            ))}
          </div>
          <FromBottom threshold={0.5}>
            <a
              id="more-projects"
              className="hover block"
              href={PATHS.main.projects}
            >
              <h2 className="m-0">
                See My{" "}
                <span style={{ color: "var(--token-primary-surface-lighter)" }}>
                  Fullest
                </span>{" "}
                Potential!
              </h2>
              <div className="inline-flex items-center gap-2">
                <p>View more cool projects</p>
                <img src={arrRightIcon} alt="" />
              </div>
            </a>
          </FromBottom>
        </div>
      </section>

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

      {/* <section className="light-bg" id="phil">
        <FeatureList
          list={philosophies}
          title="My Design & Development Philosophies"
        />
      </section> */}
      <div className="background1">
        
        <section id="career-journey" >
          <div className=" max-width">
          <h2 className="text-center m-0">
            <StaggeredText text="My Career Journey" staggerDelay={0.05} />
          </h2>
          <hr className="line" />
          {EXP.map((exp, index) => (
            <FromBottom>
              <div key={index} className="career-item grid grid-cols-[auto_2fr] gap-[2em] mb-16 max-[885px]:grid-cols-1">
                <div className="bg-[var(--token-secondary-surface-default)] p-4 rounded-[var(--token-border-radius-xl)] flex items-center justify-center aspect-square p-6 max-[885px]:w-[50%] max-[885px]:max-w-[200px] max-[885px]:mx-auto">
                  <img
                    src={require(`../Assets/Companies/${exp.img}.png`)}
                    alt="Career Journey"
                  />
                </div>
                <div>
                  <div className="grid grid-cols-[auto_auto] items-center grid-flow-col-dense w-full max-[1200px]:inline">
                    <p className="text-[var(--token-primary-surface-lighter)] col-start-2 text-right max-[1200px]:text-left max-[885px]:text-center">{exp.duration}</p>
                    <h3 className="m-0 col-start-1 max-[1200px]:col-start-auto max-[885px]:text-center">{exp.role}</h3>
                    
                  </div>
                  <h4 className="text-[var(--token-primary-surface-lighter)] max-[885px]:text-center ">{exp.company}</h4>
                  <ul>
                    {exp.description.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </FromBottom>
          ))}
          </div>
        </section>
       
        <section id="contact-me">
          <div className=" max-width">
          <h2>
            <StaggeredText text="Let's Connect!" staggerDelay={0.1} />
          </h2>
          <hr className="line"/>
          <ContactForm />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
