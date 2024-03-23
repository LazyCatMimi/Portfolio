import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Pages/Components/NavBar";
import Footer from "./Pages/Components/Footer";
import ProjectsWebDesign from "./Pages/ProjectsWebDesign";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/web-design" element={<ProjectsWebDesign />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
