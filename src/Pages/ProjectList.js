import { ProjectsQuickView } from "./Components/ProjectsQuickView";
import StaggeredText from "./Components/Animation/StaggeredText";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useAnimation, useTransform } from "framer-motion";
import Header from "./Components/Header";

const HeaderContent = () => (
  <div className="max-width">
    <div>
      <h1 className="title-name">
        <StaggeredText text="Explore Projects" staggerDelay={0.15} />
      </h1>
      <div className="title-sub-2-container">
        <h1 className="title-sub-2">
          From Design to Deployment, I got you covered.
        </h1>
      </div>
    </div>
  </div>
);

const ProjectList = () => {
  const variants = {
    hidden: {
      backgroundImage: "linear-gradient(180deg, #090510 0%, #26123f 100%)",
    },
    visible: {
      backgroundImage: "linear-gradient(180deg, #26123f 0%, #090510 100%)",
    },
  };
  return (
    <main id="ProjectList">
      <Header HeaderContent={HeaderContent} from="project" />

      <div class="bg-[var(--token-secondary-surface-darker)]">
        <ProjectsQuickView />
      </div>

      {/* Map through your projects and display them here */}
    </main>
  );
};

export default ProjectList;
