import Header from "./Components/Header";
import { useRef } from "react";
import plImg from "../Assets/test.png";
import "../Styles/Resume.css";
export default function Resume() {
  const stopScalingRef = useRef(null);
  const HeaderContent = () => (
    <>
      <h1 className="header-title">Resume</h1>
    </>
  );
  return (
    <main id="resume">
      <Header stopScalingRef={stopScalingRef} Content={HeaderContent} />
      <div className="info" ref={stopScalingRef}>
        <p>
          Interested in my projects or just want to chat? send me a message!
        </p>
      </div>
      <div id="resume-content" className="light-bg">
        <img src={plImg} alt="" />
        <article id="summary">
          <h2>Summary</h2>
          <p>
            A highly compassionate individual with a deep passion for
            integrating art, psychology, and technology within the UI/UX field.
            Using expertise and interest in these areas, Quynh strives to create
            web experiences that are not only visually appealing but also
            intuitive, engaging, and empowering for all users. Quynh's goal is
            to harness the potential of the web as a powerful tool that enhances
            the lives of individuals and communities alike through seamless and
            meaningful interactions.
          </p>
        </article>
        <article id="exp">
          <h2>Work Experience</h2>
          <div className="exp-sep">
            <p className="gray-text date center-text">
              Orlando, FL | Jul 2023-now
            </p>
            <div>
              <p>
                <strong>Pro-Nails & Beauty School</strong> | Office Clerk
              </p>
              <ul>
                <li>
                  Created Excel spreadsheets and templates for data entry,
                  optimizing workflow efficiency and readability.
                </li>
                <li>
                  Efficiently collected and organized customer information,
                  ensuring accuracy and completeness.
                </li>
                <li>
                  Maintained confidentiality when handling sensitive customer
                  information.
                </li>
                <li>
                  Detected and rectified errors in customer data, maintaining
                  data integrity and quality.
                </li>
              </ul>
            </div>
          </div>

          <h2>Volunteer</h2>

          <div className="exp-sep">
            <p className="gray-text date center-text">
              Orlando, FL | 2018-2020
            </p>
            <div>
              <p>
                <strong>Cypress Springs Elementary</strong> | Classroom
                Volunteer
              </p>
              <ul>
                <li>
                  Established a sanitary and comfortable learning environment
                  for 20+ children.
                </li>
                <li>Assisted and cared for 10+ exotic classroom pets.</li>
                <li>
                  Collaborated with other volunteers to ensure all needs of the
                  children are met.
                </li>
                <li>Supervised club activities for 20+ children.</li>
              </ul>
            </div>
          </div>

          <div className="exp-sep">
            <p className="gray-text date">Winter Park, FL | Jun 2019</p>
            <div>
              <p>
                <strong>Nature Summer Camp of Winter Park</strong> | Volunteer
                Counselor
              </p>
              <ul>
                <li>
                  Demonstrated children how to properly handle exotic animals.
                </li>
                <li>
                  Created a sanitary and comfortable learning environment for
                  30+ children.
                </li>
                <li>Cleaned and cared for 15+ species of exotic animals.</li>
                <li>
                  Collaborated with 10 other volunteers to ensure all needs of
                  the children are met.
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article id="edu">
          <h2>Education</h2>
          <p className="center-text">
            <strong>University of Central Florida</strong>
          </p>
          <p className="gray-text center-text">2021-current</p>
          <ul>
            <li>Major: Digital Media: Web Design</li>
            <li>Minor: IT</li>
            <li>GPA: 4.0</li>
            <li>President's list</li>
          </ul>
        </article>
        <article id="skills">
          <h2>Skills</h2>
          <div id="skills-div">
            <div>
              <p className="center-text">
                <strong>Aptitudes</strong>
              </p>
              <ul>
                <li>Artistic</li>
                <li>Self-Discipline</li>
                <li>Time Management</li>
                <li>Tech Savvy</li>
                <li>Organization</li>
                <li>Collaborator</li>
              </ul>
            </div>
            <div>
              <p className="center-text">
                <strong>Design Tools</strong>
              </p>
              <ul>
                <li>Figma</li>
                <li>Photoshop</li>
                <li>Wix</li>
                <li>Invision</li>
              </ul>
            </div>
            <div>
              <p className="center-text">
                <strong>Coding Languages & Libraries</strong>
              </p>
              <ul>
                <li>HTML</li>
                <li>CSS/SCSS</li>
                <li>JS</li>
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
