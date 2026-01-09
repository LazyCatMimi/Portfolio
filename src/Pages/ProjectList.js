import PROJECTS from "../Data/Projects.json";
import { useEffect, useState } from "react";
import {ProjectsQuickView} from "./Components/ProjectsQuickView";

const ProjectList = () => {
  return (
    <div>
      <header className="header ">
        <div className="background-container ">
          <div className="content">
            <h1>Explore Projects</h1>
          </div>
        </div>
      </header>
      <div class="bg-[var(--token-secondary-surface-darker)]">
        <ProjectsQuickView />
      </div>

      {/* Map through your projects and display them here */}
    </div>
  );
};

export default ProjectList;
