import "../Styles/Project.css";
import plImg from "../Assets/test.png";
import StaggeredText from "./Components/StaggeredText";
import PROJECTS from "../Data/Projects.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function Project() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Function to find project by id
    const findProjectById = (id, data) => {
      for (const category in data) {
        for (const proj of data[category]) {
          if (proj.id === id) {
            return proj;
          }
        }
      }
      return null;
    };

    // Find and set the project based on the id from URL
    const proj = findProjectById(id, PROJECTS);
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
    const Component = component && require(`.${component}`).default
      
    return (
      <>
        <div style={projectHeaderStyle} className="proj-header">
          <div></div>
        </div>
        <article className="proj-info">
          <h2 className="center-text">
            <StaggeredText text={name} staggerDelay={0.05} />
          </h2>
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
                    { action.icon && <img
                      src={
                       
                        require(`../Assets/Icons/${action.icon}.svg`)
                      }
                      alt=""
                      className="proj-icon"
                    ></img>}
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
 
      </>
    );
  };

  return (
    <main id="projectidv">
      <Project {...project} />
    </main>
  );
}