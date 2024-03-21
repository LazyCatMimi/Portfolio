import Header from "./Components/Header";
import { useRef } from "react"; // Import useRef

export default function Contact() {
  const stopScalingRef = useRef(null); // Define the stopScalingRef
  const HeaderContent = () => (
    <>
      <h1 className="header-title">Contact</h1>
    </>
  );
  return (
    <div>
      <Header stopScalingRef={stopScalingRef} Content={HeaderContent} />
      <p>this is contact</p>
      <p>this is contact</p>
      <p>this is contact</p>
      <p>this is contact</p>
      <p>this is contact</p>
      <p>this is contact</p>
      <p>this is contact</p>
      <p>this is contact</p>
      <p>this is contact</p>
      <p>this is contact</p>
      <p>this is contact</p>
      <p>this is contact</p>
      <p>this is contact</p>
      <p>this is contact</p>
      <p>this is contact</p>
      <p>this is contact</p>
      <p>this is contact</p>
      <div className="info" ref={stopScalingRef}></div>
    </div>
  );
}
