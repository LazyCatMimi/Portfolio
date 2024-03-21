import Header from "./Components/Header";
import { useRef } from "react";
import plImg from "../Assets/test.png";
import "../Styles/Projects.css";

export default function ProjectsWebDesign() {
  const stopScalingRef = useRef(null);
  const HeaderContent = () => (
    <>
      <h1 className="header-title">Web Design Projects</h1>
    </>
  );
  return (
    <main>
      <Header stopScalingRef={stopScalingRef} Content={HeaderContent} />
      <div className="info" ref={stopScalingRef}>
        <p>
          Interested in my projects or just want to chat? send me a message!
        </p>
      </div>
      <section className="proj">
        <h2>The Suite Spot Salon</h2>
        <div className="divider">
          <img src={plImg} alt="" />
          <article>
            <p>
              Tools Used: Figma
              <br />
              Project Overview: The Suite Spot Salon is a fictitious salon suite
              client developed by our team for our senior design project.
              Recognizing the importance of booking features in the salon
              industry, we aimed to address this gap in the market. Our website
              allows users to conveniently book appointments, purchase items
              from the shop, and manage their accounts.
              <br />
              <br />
              Tasks Accomplished: Collaborated with a team to create low-fi and
              hi-fi prototypes Implemented mobile-first design approach with two
              hi-fi prototypes Generated comprehensive documentation outlining
              the design process Ensured consistency and accessibility
              throughout the design phase Conducted user testings to improve
              design
            </p>
            <div className="btn-group">
              <button className="primary-button"> Stuff</button>
              <button className="primary-button"> Stuff</button>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
