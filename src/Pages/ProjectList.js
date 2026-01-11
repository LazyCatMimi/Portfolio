

import {ProjectsQuickView} from "./Components/ProjectsQuickView";
import StaggeredText from "./Components/Animation/StaggeredText";
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
  return (
    <main id="ProjectList">
      <header className="header">
        <div className="background-container">
          <div className="content ">
            <HeaderContent />
          </div>
        </div>
      </header>
      <div class="bg-[var(--token-secondary-surface-darker)]">
        <ProjectsQuickView />
      </div>

      {/* Map through your projects and display them here */}
    </main>
  );
};

export default ProjectList;
