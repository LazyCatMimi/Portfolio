import "../Styles/ProjectArticle.css";
import plImg from "../Assets/test.png";
import StaggeredText from "./Components/Animation/StaggeredText";
import PROJECTS from "../Data/Projects.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "./Components/BackButton";
import Footer from "./Components/Footer";
import tocbot from "tocbot";

export default function ProjectArticle() {
  useEffect(() => {
    // Initialize tocbot after component mounts
    tocbot.init({
      tocSelector: ".toc", // Selector for the TOC container
      contentSelector: ".h-content", // Selector for the content container
      headingSelector: "h2, h3, h4", // Heading tags to include
      scrollSmooth: true,
    });

    // Clean up tocbot on unmount
    return () => tocbot.destroy();
  }, []);
  const { id } = useParams();
  const [project, setProject] = useState(null);
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
    roles,
    designTools,
    devTools,
    summary,
    tasks,
    actions,
    tags,
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
        <div style={projectHeaderStyle} className="proj-header ">
          <div className="gra">
            <section className="max-width pad">
              <div>
                <BackButton />
                <h1>
                  <StaggeredText text={name} staggerDelay={0.05} />
                </h1>
                {/* <img
                  src={imgThumb ? require(`${"../"}${imgThumb}`) : plImg}
                  alt=""
                  className="proj-thumb"
                /> */}
                <div className="proj-tags">
                  {tags.map((tag, index) => (
                    <p key={index} className="proj-tag">
                      {determineTag(tag)}{" "}
                    </p>
                  ))}
                </div>
                <div className="my-10 max-w-[75ch]">
                  <p>
                    <strong className="text-[var(--token-primary-surface-default)]">
                      Roles:
                    </strong>{" "}
                    {roles}
                  </p>
                  {designTools && (
                    <p>
                      <strong className="text-[var(--token-primary-surface-default)]">
                        Design Tools:
                      </strong>{" "}
                      {designTools}
                    </p>
                  )}
                  {devTools && (
                    <p>
                      <strong className="text-[var(--token-primary-surface-default)]">
                        Development Tools:
                      </strong>{" "}
                      {devTools}
                    </p>
                  )}
                  <p>
                    <strong className="text-[var(--token-primary-surface-default)]">
                      Project Overview:
                    </strong>{" "}
                    {summary}
                  </p>
                </div>

                {/* <p>
                  <strong>Tasks Accomplished:</strong>
                </p>
                <ul>
                  {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul> */}
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
              </div>
            </section>
          </div>
        </div>

        <div style={{ overflow: "hidden" }} className="background2">
          <div className="max-width pad-h proj-content-container">
            <div className="toc-container ">
              <h2 className="m-0">Table of Content</h2>
              <div className="toc"></div>{" "}
              {/* TOC will be generated here by tocbot */}
            </div>

            <div id="project-content">{component && <Component />}</div>
          </div>
          <div className="footer-space"></div>
          <Footer />
        </div>
      </>
    );
  };

  return (
    <main id="projectidv" className="">
      <Project {...project} />
    </main>
  );
}
