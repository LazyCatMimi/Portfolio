import "../../Styles/Project.css";
import plImg from "../../Assets/test.png";
import StaggeredText from "../Components/Animation/StaggeredText";
import PROJECTS from "../../Data/Projects.json";

export default function Thesuitespot() {
  return (
    <>
      <article className="proj-info pi-after">
        <p>Writing is still in progress!</p>
      </article>
      <article className="proj-info pi-after">
        <h2>Table of Content</h2>
        <ol>
          <li>Acknowledgements</li>
          <li>Design</li>
          <ol>
            <li>Ideation</li>
            <ol>
              <li>The Problem in the Market</li>
              <li>Information Architecture</li>
              <li>The Suite Spot Salon</li>
            </ol>
            <li>Early Designs</li>
            <ol>
              <li>Use Cases & User Flows</li>
              <li>Updated Information Architecture</li>
              <li>Design Sketches</li>
              <li>Lo-Fi Prototypes</li>
            </ol>
            <li>Aesthetic Decisions</li>
            <li>User Testing</li>
          </ol>
          <li>Development</li>
        </ol>
      </article>
      <article className="proj-info pi-after">
        <h2>Acknowledgments</h2>
        <p>
          I’d like to give a special shoutout to my incredible team members–
          Lilian Allgood, Brianna Lattimore, Callie Vaughn, Lindsey Wolbrink—
          for their hard work and collaboration on this project. Each of their
          unique skills and insights were invaluable in bringing our vision to
          life, from initial brainstorming to final implementation. You all are
          awesome!
        </p>
      </article>
      <article className="proj-info pi-after special-heading">
        <h2 className="center-text" style={{ margin: 0 }}>
          Design Phase
        </h2>
      </article>
      <article className="proj-info pi-after">
        <h3 className="center-text">Ideation</h3>
        <h4>The Problem in the Market</h4>
        <p>
          While reviewing salon websites, my team and I noticed a common issue:
        </p>
        <p>
          <strong>The absence of a booking page on many sites</strong>.
          Customers are often required to call to book an appointment, which can
          be inconvenient. This traditional approach may not suit everyone,
          especially those who prefer contactless interactions due to reasons
          like hearing impairments, being in a noisy environment, or simply
          valuing the convenience of online booking.
        </p>
        <p>
          <strong>
            Not mobile-responsive, which is a critical flaw in today's digital
            landscape
          </strong>
          . Responsive design is essential for retaining customers, as a
          tailored mobile experience is increasingly expected. Given that many
          users search for nearby salons on their smartphones, it's crucial for
          our site to be fully responsive.
        </p>
        <p>
          I wrote a detailed case study why responsive design is important to
          salon businesses as well as the best ways to implement it. See here:
        </p>

        <a
          href="https://docs.google.com/document/d/1-lDLf3FPQqFrQsjOLCP-L5prJ2xr4ZO5Sk1Z8Kx6lH0/edit"
          className="primary-button proj-info-btn"
          target="_blank"
          rel="noreferrer"
        >
          Salon Responsive Design Case Study
        </a>
        <p>
          Our primary goal is to create a user-friendly website that provides
          clear information about the salon suites and allows clients to easily
          book appointments with various providers. The site should be designed
          to encourage user engagement and drive conversions, whether that means
          booking an appointment or purchasing products.
        </p>
        <h4>Information Architecture</h4>
        <p>
          We began by defining our information architecture and selecting key
          features:
        </p>
        <ul>
          <li>
            <strong>Shop:</strong> Designed to boost revenue by encouraging
            customers to purchase products, especially those recommended by
            salon professionals.
          </li>
          <li>
            <strong>Blog:</strong> A platform to highlight the salon’s expertise
            and share valuable insights.
          </li>
          <li>
            <strong>Booking Widget:</strong> The core feature of the site,
            enabling users to easily book salon services.
          </li>
          <li>
            <strong>About:</strong> A section that tells the salon’s story and
            showcases its achievements.
          </li>
          <li>
            <strong>Contact:</strong> Provides contact details and social media
            links, allowing customers to stay connected with the salon.
          </li>
        </ul>
        <h4>The Suite Spot Salon</h4>
        <p>
          We decided that our salon will be a suite of salon business, taken
          inspiration from{" "}
          <a href="https://phenixsalonsuites.com/store/orlando-sodo/">
            https://phenixsalonsuites.com/store/orlando-sodo/
          </a>
          . This will allow multiple salons to have their own page within the
          main suite page for customer appointments. With unanimous agreements,
          we decided to name our project The Suite Spot.
        </p>
        <p>
          "The Suite Spot Salon" is a <strong>fictional project</strong>{" "}
          designed to demonstrate how responsive design and booking systems can
          be effectively integrated into salon websites.
        </p>
      </article>
      <article className="proj-info pi-after">
        <h3 className="center-text">Design Beginnings</h3>
        <h4>Use Cases & User Flows</h4>
        <p>
          Before creating sketches, we first identify the key use cases for the
          salon site. This process helps us clarify essential user needs and
          goals. For each use case, we outline a simple user flow, detailing how
          users would interact with the site to complete their tasks. By
          focusing on user flows, we ensure that every design decision aligns
          with what the user aims to accomplish, guiding them efficiently toward
          their goals.
        </p>
        <h4>Updated Information Architecture</h4>
        <p>
          With our use cases and user flows in place, we moved on to refining
          our information architecture to better align with the user's goals. We
          identified and organized the necessary pages to ensure the website
          effectively supports these goals.
        </p>
        <img
          src={require("../../Assets/projects-img/thesuitespot/updated-information-architecture.png")}
          alt=""
        ></img>
        <a
          href="https://xmind.ai/share/kFwmfD1s"
          className="primary-button proj-info-btn"
          target="_blank"
          rel="noreferrer"
        >
          See Information Architecture
        </a>
      </article>
    </>
  );
}
