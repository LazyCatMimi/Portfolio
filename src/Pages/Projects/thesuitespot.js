import "../../Styles/Project.css";
import plImg from "../../Assets/test.png";
import StaggeredText from "../Components/StaggeredText";
import PROJECTS from "../../Data/Projects.json";

export default function Thesuitespot() {
  const Project = ({ name, imgFill, tools, summary, tasks, actions, i }) => {
    const projectHeaderStyle = {
      backgroundImage: `url(${
        imgFill ? require(`${"../../"}${imgFill}`) : plImg
      })`,
    };
    return (
      <>
        <div style={projectHeaderStyle} className="proj-header"></div>
        <article>
          <h2>
            <StaggeredText text={name} staggerDelay={0.05} />
          </h2>
          <div>
            <img
              src={imgFill ? require(`${"../../"}${imgFill}`) : plImg}
              alt=""
            />
            <article>
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

              <div className="btn-group">
                {actions.map((action, index) => (
                  <button key={index} className={"primary-button"}>
                    {action.name}
                  </button>
                ))}
              </div>
            </article>
          </div>
        </article>
      </>
    );
  };

  return (
    <main id="thesuitespot">
      <Project {...PROJECTS.designCode[0]} />
    </main>
  );
}
