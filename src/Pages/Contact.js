import Header from "./Components/Header";
import ContactForm from "./Components/ContactForm";
import { useRef } from "react";

export default function Contact() {
  const stopScalingRef = useRef(null);
  const HeaderContent = () => (
    <>
      <h1 className="header-title">Contact</h1>
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
      <section className="dark-bg3" id="contact-me" style={{ height: "100%" }}>
        <ContactForm />
      </section>
    </main>
  );
}
