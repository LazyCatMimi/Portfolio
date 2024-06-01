import plImg from "../../Assets/test.png";
import PROJECTS from "../../Data/Projects.json";
import StaggeredText from "./StaggeredText";
import { useState } from "react";

export default function ProjectsQuickView() {
  const [activeSortButton, setActiveSortButton] = useState("all");
  const sortButtons = [
    {
      title: "All",
      id: "all",
      data: [
        ...PROJECTS["web-design"],
        ...PROJECTS["web-dev"],
        ...PROJECTS["art"],
      ],
    },
    { title: "Web UI/UX", id: "web-ui-ux", data: PROJECTS["web-design"] },
    // { title: "Mobile UI/UX", id: "mobile-ui-ux", data: PROJECTS["web-dev"] },
    { title: "Web Dev", id: "web-dev", data: PROJECTS["web-dev"] },
    // { title: "Mobile Dev", id: "mobile-dev" },
    { title: "Art & Design", id: "design", data: PROJECTS["art"] },
  ];
  const [curData, setCurData] = useState(sortButtons[0].data);
  const handleRadioButtonChange = (event, data) => {
    setActiveSortButton(event.target.value);
    setCurData(data);
  };

  const Project = ({
    name,
    imgFill,
    tools,
    shortSummary,
    tasks,
    actions,
    i,
  }) => (
    <article className="dark-bg2">
      <button className="project-hover">
        <img
          src={imgFill ? require(`${"../../"}${imgFill}`) : plImg}
          alt=""
        ></img>
      </button>
      <div>
        <h3>
          <span className="num off-white-text">
            {(i + 1).toString().padStart(2, "0")}{" "}
          </span>
          | {name}
        </h3>
        <p>{shortSummary}</p>
        <button className="primary-button">Read More</button>
      </div>
    </article>
  );
  return (
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
              onChange={(e) => handleRadioButtonChange(e, button.data)}
            />
            {button.title}
          </label>
        ))}
      </div>
      <div className="projects-grid">
        {curData.map((project, index) => (
          <Project key={index} {...project} i={index} />
        ))}
      </div>
    </section>
  );
}
