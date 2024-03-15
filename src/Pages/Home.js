import ContactForm from "./Components/ContactForm";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "../Styles/Home.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <header class="full-page-header">
        <div>
          <h1 class="title-sub-1">Hello, I am</h1>
          <h1 class="title-name">Quynh Vo</h1>
          <h1 class="title-sub-2">Artist. Designer. Developer</h1>
          <button  className="primary-button">See Resume</button>
        </div>
      </header>

      <section className="dark-bg" id="focus">
        <p>UI/UX</p>
        <p>Full Stack Development</p>
        <p>Art & Design</p>
      </section>
      <section>
        <p>picture here</p>
        <article>
          <h2>About Me</h2>
          <p>
            Greetings! My name is Quynh, and I am a student at the University of
            Central Florida, where I am pursuing a bachelor's degree in Digital
            Media: Web Design with a minor in Information Technology. My
            passions lie in web design, development, and art. Having been born
            in 2002, I witnessed the rapid evolution of technology firsthand,
            which inspired me to become a creator of unique web experiences.
            Technology and art are my favorite subjects to learn about and
            discuss. In my spare time, I enjoy engaging in artistic activities
            such as drawing, which allows me to express my creativity.
          </p>
        </article>
        </section>
        <section>
        <div>
          <h1>Latest Projects</h1>
          <p>01</p>
          <article>
            <p>picture here</p>
            <h3>The Suite Spot Salon</h3>
            <p>Web Design & Development</p>
            <p>Tools Used: Figma</p>
            <p>Technologies: React.JS, Node.JS, Express.JS, MongoDB Atlas</p>
            <p>
              Project Overview: <br />
              The Suite Spot Salon is a fictitious salon suite client developed
              by our team for our senior design project. This is a 2-semester
              project consisting of both the design and development phases. Our
              website allows users to conveniently book appointments, purchase
              items from the shop, and manage their accounts.
            </p>
            <button className="primary-button">Read More</button>
          </article>
          <p>02</p>
          <article>
            <p>picture here</p>
            <h3>Noodletopia</h3>
            <p>Mobile App Design</p>
            <p>Tools Used: Figma</p>
            <p>
              Project Overview: <br />
              Noodletopia is a mobile application designed for noodle
              enthusiasts, offering a personalized experience for ordering and
              creating customized noodle bowls with various toppings. Users have
              the freedom to add reviews for their noodle creations and share
              their unique combinations with others. Additionally, they can save
              their favorite noodle bowls for easy access. The entire user
              design process was meticulously documented, incorporating user
              testing to refine and enhance the app's design and usability.
            </p>
            <button  className="primary-button">Read More</button>
          </article>
        </div>
      </section>
      <section>
        <h2>Explore More Projects</h2>
        <button >UI/UX</button>
        <button>Development</button>
        <button>Art & Design</button>
        </section>
        <section>
          <h2>Contact Me</h2>
          <ContactForm />
          </section>
      
    </div>
  );
}
