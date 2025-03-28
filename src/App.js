import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Pages/Components/NavBar";
import Footer from "./Pages/Components/Footer";
// import ProjectsWebDesign from "./Pages/ProjectsWebDesign - OLD";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact - OLD";
import PATHS from "./Data/Pages.json";
import ScrollToTop from "./Pages/Components/ScrollToTop";
import Project from "./Pages/Project";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path={PATHS.main.home} element={<Home />} />
          {/* <Route path={PATHS.main.contact} element={<Contact />} /> */}
          {/* <Route path={PATHS.main.webDesign} element={<ProjectsWebDesign />} /> */}
          <Route path={PATHS.main.resume} element={<Resume />} />
          <Route path="/projects/:id" element={<Project />} />

          {/* <Route path="/projects/thesuitespot" element={<Thesuitespot />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}
inject();
injectSpeedInsights();
export default App;
