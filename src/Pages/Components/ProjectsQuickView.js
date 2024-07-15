import plImg from "../../Assets/test.png";
import PROJECTS from "../../Data/Projects.json";
import StaggeredText from "./StaggeredText";
import LineRevealText from "./LineRevealText";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectsQuickView() {
  const [activeSortButton, setActiveSortButton] = useState("all");
  const sortButtons = [
    {
      title: "All",
      id: "all",
      desc: "All projects.",
      data: [
        ...PROJECTS.designCode,
        ...PROJECTS.webDesign,
        ...PROJECTS.development,
        ...PROJECTS.artDesign,
      ],
    },
    {
      title: "Web Design & Development",
      id: "web-design-code",
      desc: "Projects that include both design and development phases.",
      data: PROJECTS.designCode,
    },
    {
      title: "Web Design",
      id: "web-ui-ux",
      desc: "Projects that include web design phase.",
      data: [...PROJECTS.designCode, ...PROJECTS.webDesign],
    },
    // { title: "Mobile UI/UX", id: "mobile-ui-ux", data: PROJECTS["web-dev"] },
    {
      title: "Development",
      id: "web-dev",
      desc: "Projects that include development phase.",
      data: [...PROJECTS.designCode, ...PROJECTS.development],
    },
    // { title: "Mobile Dev", id: "mobile-dev" },
    {
      title: "Art & Design",
      id: "design",
      desc: "Projects that showcase my artistic skills.",
      data: PROJECTS.artDesign,
    },
  ];
  const [curData, setCurData] = useState(sortButtons[0].data);
  const handleRadioButtonChange = (event, data) => {
    setActiveSortButton(event.target.value);
    setCurData(data);
  };

  const Project = ({
    name,
    imgFill,
    link,
    tools,
    shortSummary,
    tasks,
    actions,
    i,
  }) => (
    <Link to={link}>
      <article className="dark-bg2">
        <img
          src={imgFill ? require(`${"../../"}${imgFill}`) : plImg}
          alt=""
        ></img>

        <div>
          <h3>
            <span className="num off-white-text">
              {(i + 1).toString().padStart(2, "0")}{" "}
            </span>
            | <LineRevealText text={name} staggerDelay={0.05} />
          </h3>
          <p>{shortSummary}</p>
           {/* <button className="primary-button">Read More</button> */}
        </div>
      </article>
    </Link>
  );
  return (
    <section className="dark-bg" id="latest-projects">
      <h2>
        <StaggeredText text="Projects" staggerDelay={0.05} />
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
              onChange={(e) => handleRadioButtonChange(e, button.data)}
            />
            {button.title}
          </label>
        ))}
      </div>
      <p className="center-text sort-desc">
        {sortButtons.find((button) => button.id === activeSortButton).desc}
      </p>
      <div className="projects-grid">
        {curData.map((project, index) => (
          <Project key={index} {...project} i={index} />
        ))}
      </div>
    </section>
  );
}
