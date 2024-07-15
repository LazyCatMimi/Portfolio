import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Pages/Components/NavBar";
import Footer from "./Pages/Components/Footer";
import ProjectsWebDesign from "./Pages/ProjectsWebDesign";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import PATHS from "./Data/Pages.json";
import ScrollToTop from "./Pages/Components/ScrollToTop";
import Thesuitespot from "./Pages/Projects/thesuitespot";
import Project from "./Pages/Project";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path={PATHS.main.home} element={<Home />} />
          <Route path={PATHS.main.contact} element={<Contact />} />
          <Route path={PATHS.main.webDesign} element={<ProjectsWebDesign />} />
          <Route path={PATHS.main.resume} element={<Resume />} />
          <Route path="/projects/:id" element={<Project  />} />
          
          {/* <Route path="/projects/thesuitespot" element={<Thesuitespot />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
