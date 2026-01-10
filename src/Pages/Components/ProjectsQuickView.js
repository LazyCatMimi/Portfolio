import plImg from "../../Assets/test.png";
import PROJECTS from "../../Data/Projects.json";
import StaggeredText from "./Animation/StaggeredText";
import LineRevealText from "./Animation/LineRevealText";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import starImg from "../../Assets/Icons/star.svg";
import "../../Styles/ProjectsList.css";
import { FromBottom } from "./Animation/Animated";


  const determineTag = (tag) => {
    switch (tag) {
      case "case-study":
        return "UX Case Study";
      case "design":
        return "Web Design";
      case "development":
        return "Web Development";
      case "art":
        return "Art & Design";
      default:
        return "Web Design & Development";
    }
  };
  export const ProjectCard = ({
    name,
    tags,
    featured,
    imgFill,
    id,
    tools,
    shortSummary,
    tasks,
    actions,
    i,
  }) => (
    <Link to={`/projects/${id}`} className={`${featured && "featured"}`}>
      <article className="project-card hover">
        <img
          src={imgFill ? require(`${"../../"}${imgFill}`) : plImg}
          alt=""
        ></img>

        <div>
          {featured && (
            <>
              <div className="img-text">
                <img src={starImg} className="star-img" alt="" />
                <p className="featured-txt">Featured Project</p>
              </div>
            </>
          )}
          <h3>
            <span className="num">{(i + 1).toString().padStart(2, "0")} </span>
            | {name}
          </h3>
          <div className="proj-tags">
            {tags.map((tag, index) => (
              <p key={index} className="proj-tag">
                {determineTag(tag)}{" "}
              </p>
            ))}
          </div>
          <p>{shortSummary}</p>
          {/* <button className="primary-button">Read More</button> */}
        </div>
      </article>
    </Link>
  );

export function ProjectsQuickView() {
  const [activeSortButton, setActiveSortButton] = useState("all");
  const sortButtons = [
    {
      title: "All",
      id: "all",
      desc: "All projects.",
      data: PROJECTS,
    },
    {
      title: "UX Case Studies",
      id: "ux-case-study",
      desc: "Projects with case studies.",
      data: PROJECTS.filter((project) => project.tags.includes("case-study")),
    },
    {
      title: "Web Design",
      id: "web-ui-ux",
      desc: "Projects as design exercises (with or without case studies).",
      data: PROJECTS.filter((project) => project.tags.includes("design")),
    },
    {
      title: "Web Development",
      id: "web-dev",
      desc: "Projects that include web development phase.",
      data: PROJECTS.filter((project) => project.tags.includes("development")),
    },
    {
      title: "Web Design & Development",
      id: "web-design-code",
      desc: "Projects that include both web design and web development phases.",
      data: PROJECTS.filter(
        (project) =>
          project.tags.includes("design") &&
          project.tags.includes("development")
      ),
    },
    {
      title: "Art & Design",
      id: "design",
      desc: "Projects that showcase my artistic and general design skills.",
      data: PROJECTS.filter((project) => project.tags.includes("art")),
    },
  ];
  const [curData, setCurData] = useState(sortButtons[0].data);
  const handleRadioButtonChange = (event, data) => {
    setActiveSortButton(event.target.value);
    setCurData(data);
  };


  return (
    <section
      
    >
      <div className="max-width">
        <div id="latest-projects">
          {/* <h2>
            <StaggeredText text="Projects" staggerDelay={0.05} />
          </h2>
          <hr className="line" /> */}
          <div id="sort-btn-container">
            {/* Map over the button data to render each radio button */}
            {sortButtons.map((button, index) => (
              <label
                key={index}
                className={`sort-projects off-white-text ${
                  activeSortButton === button.id ? "sort-projects-active" : ""
                }`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    setActiveSortButton(button.id);
                    setCurData(button.data);
                  }
                }}
              >
                <input
                  type="radio"
                  id={button.id}
                  name="sortType"
                  value={button.id}
                  checked={activeSortButton === button.id}
                  onChange={(e) => handleRadioButtonChange(e, button.data)}
                />
                {button.title}
              </label>
            ))}
          </div>
          <p className="center-text sort-desc subtitle">
            {sortButtons.find((button) => button.id === activeSortButton).desc}
          </p>
          <div className="projects-grid">
            {curData.map((project, index) => (
              <FromBottom><ProjectCard key={index} {...project} i={index} /></FromBottom>
            ))}
          </div>
          {/* <div style={{ textAlign: "center" }}>
            <a href="/#latest-projects" className="center-text">
              Back to top
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
