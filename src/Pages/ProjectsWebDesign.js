import Header from "./Components/Header";
import { useRef } from "react";
import plImg from "../Assets/test.png";
import "../Styles/Projects.css";
import PROJECTS from "../Data/Projects.json";

export default function ProjectsWebDesign() {
  const stopScalingRef = useRef(null);
  const HeaderContent = () => (
    <>
      <h1 className="header-title">Web Design Projects</h1>
    </>
  );

  const Project = ({ name, tools, summary, tasks, actions, i }) => (
    <section
      className={`proj ${i % 2 === 0 ? "proj-for" : "proj-rev light-bg"}`}
    >
      <h2>{name}</h2>
      <div className="divider">
        <img src={plImg} alt="" />
        <article>
          <p>
            <span>Tools:</span> {tools}
          </p>
          <p>
            <span>Project Overview:</span> {summary}
          </p>
          <p>
            <span>Tasks Accomplished:</span>
          </p>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>

          <div className="btn-group">
            {actions.map((action, index) => (
              <button key={index} className={"primary-button"}>
                {action.name}
              </button>
            ))}
          </div>
        </article>
      </div>
    </section>
  );

  return (
    <main id="projects">
      <Header stopScalingRef={stopScalingRef} Content={HeaderContent} />
      <div className="info" ref={stopScalingRef}>
        <p>
          Interested in my projects or just want to chat? send me a message!
        </p>
      </div>
      {PROJECTS["web-design"].map((project, index) => (
        <Project key={index} {...project} i={index} />
      ))}
    </main>
  );
}
