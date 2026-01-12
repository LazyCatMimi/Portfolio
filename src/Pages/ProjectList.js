import { ProjectsQuickView } from "./Components/ProjectsQuickView";
import StaggeredText from "./Components/Animation/StaggeredText";

import Header from "./Components/Header";
import { AnimatedBackground } from "./Components/Animation/Animated";
import Footer from "./Components/Footer";
import { useEffect } from "react";  


const ProjectList = () => {

const HeaderContent = () => (
  <div className="max-width">
    <div>
      <h1 className="title-name">
        <StaggeredText text="Explore Projects" staggerDelay={0.15} />
      </h1>
      <div className="title-sub-2-container">
        <h1 className="title-sub-2">
          From Design to Development, I got it all.
        </h1>
      </div>
    </div>
  </div>
);
  return (
    <main id="ProjectList">
      <Header HeaderContent={HeaderContent} toColor="toBlack" />

      <AnimatedBackground toColor="toAllBlack">
        <ProjectsQuickView />
             <Footer />
      </AnimatedBackground>

      {/* Map through your projects and display them here */}
 
    </main>
  );
};

export default ProjectList;
