import Header from "./Components/Header";
import { useRef } from "react";
export default function ProjectsWebDesign() {
  const stopScalingRef = useRef(null); // Define the stopScalingRef
  const HeaderContent = () => (
    <>
      <h1 className="header-title">Web Design Projects</h1>
    </>
  );
  return (
    <main>
      <Header stopScalingRef={stopScalingRef} Content={HeaderContent} />
    </main>
  );
}
