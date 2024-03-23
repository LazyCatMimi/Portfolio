import Header from "./Components/Header";
import { useRef } from "react";
export default function Resume() {
  const stopScalingRef = useRef(null);
  const HeaderContent = () => (
    <>
      <h1 className="header-title">Resume</h1>
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
      <p>thisis resume</p>
      <p>thisis resume</p>
      <p>thisis resume</p>
      <p>thisis resume</p>
      <p>thisis resume</p>
      <p>thisis resume</p>
      <p>thisis resume</p>
    </main>
  );
}
