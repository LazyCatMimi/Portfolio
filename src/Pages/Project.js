import "../Styles/Project.css";
import plImg from "../Assets/test.png";
import StaggeredText from "./Components/Animation/StaggeredText";
import PROJECTS from "../Data/Projects.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "./Components/BackButton";
import Footer from "./Components/Footer";

export default function Project() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Function to find project by id

    // Find and set the project based on the id from URL
    const proj = PROJECTS.find((p) => p.id === id);
    setProject(proj);
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  const Project = ({
    name,
    component,
    imgFill,
    imgThumb,
    tools,
    summary,
    tasks,
    actions,
    i,
  }) => {
    const projectHeaderStyle = {
      backgroundImage: `url(${
        imgFill ? require(`${"../"}${imgFill}`) : plImg
      })`,
    };
    const Component = component && require(`.${component}`).default;

    return (
      <>
        <div style={projectHeaderStyle} className="proj-header">
          <div></div>
        </div>
        <div id="project-content">
          <article className="proj-info main">
            <BackButton />
            <h1 className="center-text">
              <StaggeredText text={name} staggerDelay={0.05} />
            </h1>
            <div>
              <img
                src={imgThumb ? require(`${"../"}${imgThumb}`) : plImg}
                alt=""
                className="proj-thumb"
              />
              <article>
                <div className="btn-group">
                  {actions.map((action, index) => (
                    <a
                      key={index}
                      href={action.link}
                      className={`${action.type} action-btn`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {action.icon && (
                        <img
                          src={require(`../Assets/Icons/${action.icon}.svg`)}
                          alt=""
                          className="proj-icon"
                          
                        ></img>
                      )}
                      <span>{action.name}</span>
                    </a>
                  ))}
                </div>
                <p>
                  <strong>Tools:</strong> {tools}
                </p>
                <p>
                  <strong>Project Overview:</strong> {summary}
                </p>
                <p>
                  <strong>Tasks Accomplished:</strong>
                </p>
                <ul>
                  {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </article>
            </div>
          </article>
          {component && <Component />}
        </div>
        <div className="footer-space"></div>
      </>
    );
  };

  return (
    <main id="projectidv" className="background2">
      <Project {...project} />
      <Footer />
    </main>
  );
}
