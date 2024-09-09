import "../../Styles/Project.css";
import plImg from "../../Assets/test.png";
import StaggeredText from "../Components/Animation/StaggeredText";
import PROJECTS from "../../Data/Projects.json";

export default function Thesuitespot() {
  return (
    <>
      <div className="proj-more-info">
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
            life, from initial brainstorming to final implementation. You all
            are awesome!
          </p>
          <div className="img-sub">
            <img
              src={require("../../Assets/projects-img/thesuitespot/the-team.jpg")}
              alt=""
              style={{
                width: 500,
                display: "flex",
                margin: "auto",
              }}
            ></img>
            <p className="center-text">
              (left to right) me, Lily, Lindsey, Brianna, and Callie
            </p>
          </div>
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
            While reviewing salon websites, my team and I noticed a common
            issue:
          </p>
          <p>
            <strong>The absence of a booking page on many sites</strong>.
            Customers are often required to call to book an appointment, which
            can be inconvenient. This traditional approach may not suit
            everyone, especially those who prefer contactless interactions due
            to reasons like hearing impairments, being in a noisy environment,
            or simply valuing the convenience of online booking.
          </p>
          <p>
            <strong>
              Not mobile-responsive, which is a critical flaw in today's digital
              landscape
            </strong>
            . Responsive design is essential for retaining customers, as a
            tailored mobile experience is increasingly expected. Given that many
            users search for nearby salons on their smartphones, it's crucial
            for our site to be fully responsive.
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
            clear information about the salon suites and allows clients to
            easily book appointments with various providers. The site should be
            designed to encourage user engagement and drive conversions, whether
            that means booking an appointment or purchasing products.
          </p>
          <h4>Information Architecture</h4>
          <p>
            We began by defining our information architecture and selecting key
            features:
          </p>
          <img
            src={require("../../Assets/projects-img/thesuitespot/information-architecture.png")}
            alt=""
          ></img>
          <ul>
            <li>
              <strong>Shop:</strong> Designed to boost revenue by encouraging
              customers to purchase products, especially those recommended by
              salon professionals.
            </li>
            <li>
              <strong>Blog:</strong> A platform to highlight the salon’s
              expertise and share valuable insights.
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
              <strong>Contact:</strong> Provides contact details and social
              media links, allowing customers to stay connected with the salon.
            </li>
          </ul>
          <h4>The Suite Spot Salon</h4>
          <p>
            We decided that our salon will be a suite of salon business, taken
            inspiration from{" "}
            <a
              href="https://phenixsalonsuites.com/store/orlando-sodo/"
              target="_blank"
              rel="noreferrer"
            >
              https://phenixsalonsuites.com/store/orlando-sodo/
            </a>
            . This will allow multiple salons to have their own page within the
            main suite page for customer appointments. With unanimous
            agreements, we decided to name our project The Suite Spot.
          </p>
          <p>
            "The Suite Spot Salon" is a <strong>fictional project</strong>{" "}
            designed to demonstrate how responsive design and booking systems
            can be effectively integrated into salon websites.
          </p>
        </article>
        <article className="proj-info pi-after">
          <h3 className="center-text">Design Beginnings</h3>
          <h4>Use Cases & User Flows</h4>
          <p>
            Before creating sketches, we first identify the key use cases for
            the salon site. We imagine ourselves as different kinds of users and
            how they would interact with a salon website. This process helps us
            clarify essential user needs and goals. For each use case, we
            outline a simple user flow, detailing how users would interact with
            the site to complete their tasks. By focusing on user flows, we
            ensure that every design decision aligns with what the user aims to
            accomplish, guiding them efficiently toward their goals.
          </p>
          <p>Read up on our use cases and user flows here:</p>
          <div className="img-sub">
            <img
              src={require("../../Assets/projects-img/thesuitespot/usecaseex.png")}
              alt=""
            />
            <p className="center-text">Example use case & user flow</p>
          </div>

          <a
            href="https://docs.google.com/document/d/1tYGhInLkMWd3ycZQXfzpfVvfsNzGEIf9KfcGLF4kr5Y/edit?usp=sharing"
            className="primary-button proj-info-btn"
            target="_blank"
            rel="noreferrer"
          >
            See Full Use Cases and User Flows
          </a>

          <h4>Updated Information Architecture</h4>
          <p>
            With our use cases and user flows in place, we moved on to refining
            our information architecture to better align with the user's goals.
            We identified and organized the necessary pages to ensure the
            website effectively supports these goals.
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
          <h4>Design Sketches</h4>
          <p>
            As a team, we created our design sketches based on our ideas from
            the information architecture to test where content should go. We{" "}
            <strong>created our mobile sketches first</strong>, then used it to
            translate back to the bigger screen. This is to ensure consistency
            of information between screen sizes and adhere to our promise of
            <strong> responsive mobile-first design</strong>.
          </p>
          <p>See our design sketches here:</p>
          <p className="center-text">Mobile</p>
          <img
            src={require("../../Assets/projects-img/thesuitespot/sketches-mobile.png")}
            alt=""
          ></img>
          <a
            href="https://app.uizard.io/p/39a0e03a/overview"
            className="primary-button proj-info-btn"
            target="_blank"
            rel="noreferrer"
          >
            See Mobile Sketches
          </a>
          <p className="center-text">Desktop</p>
          <img
            src={require("../../Assets/projects-img/thesuitespot/sketches-desktop.png")}
            alt=""
          ></img>
          <a
            href="https://app.uizard.io/p/2173ec7c/overview"
            className="primary-button proj-info-btn"
            target="_blank"
            rel="noreferrer"
          >
            See Desktop Sketches
          </a>
          <h4>Lo-Fi Prototypes</h4>
          <p>
            After determining the placement of our content, we created
            low-fidelity prototypes to illustrate the website's layout when
            content is not fully developed yet. We began with mobile lo-fi
            prototypes and then adapted them to larger screens for the desktop
            version.
          </p>
          <p>See our Lo-Fi Prototypes here:</p>
          <p className="center-text">Mobile</p>
          <img
            src={require("../../Assets/projects-img/thesuitespot/lofi-mobile.png")}
            alt=""
          ></img>
          <a
            href="https://www.figma.com/proto/Tu8daAYiOE6THFlZO444jD/Mobile-LoFi-Prototype?node-id=1-2&node-type=CANVAS&t=6gFk1JOuDzvMVhfe-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2overview"
            className="primary-button proj-info-btn"
            target="_blank"
            rel="noreferrer"
          >
            See Mobile Lo-Fi
          </a>
          <p className="center-text">Desktop</p>
          <img
            src={require("../../Assets/projects-img/thesuitespot/lofi-desktop.png")}
            alt=""
          ></img>

          <a
            href="https://www.figma.com/proto/Q0MLRg0LbHp9RDmba8rk6f/Web-LoFi-Prototype?node-id=1-2&node-type=CANVAS&t=hDh6B6gsEcoEkLbY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&show-proto-sidebar=1"
            className="primary-button proj-info-btn"
            target="_blank"
            rel="noreferrer"
          >
            See Desktop Lo-Fi
          </a>
        </article>
        <article className="proj-info pi-after">
          <h3 className="center-text">Aesthetic Decisions</h3>
          <h4>Design Goals</h4>
          <p>
            While the lofi was being done, we talked about the aesthetics of the
            site. As a salon business, we would want our website to feel
            relaxing, like a sense of ease that pushes the user to want to relax
            at The Suite Spot salon.
          </p>
          <h4>Choosing Colors</h4>
          <p>
            We reviewed competitor websites to analyze their color choices and
            ruled out certain colors that didn't evoke a relaxing atmosphere.
            Specifically:
          </p>
          <ul>
            <li>
              <strong>Black:</strong> Too dark, feels uneasy.
            </li>
            <li>
              <strong>Gold:</strong> Luxurious but overly energizing and not
              relaxing.
            </li>
          </ul>
          <p>
            Next, we explored color meanings and psychology, and chose the
            following colors that matched our goals:
          </p>
          <ul>
            <li>
              <strong>Green:</strong> Represents health and well-being.
            </li>
            <li>
              <strong>Light Purple:</strong> Conveys calmness and serenity.
            </li>
            <li>
              <strong>Beige:</strong> Provides warmth and comfort.
            </li>
          </ul>
          <p>
            We also considered accessibility for individuals with visual
            impairments. Our initial color selections did not meet accessibility
            standards, so we adjusted our choices to ensure good contrast
            between text and backgrounds, and to accommodate color-blind
            individuals. We ran our colors through contrast checkers such as{" "}
            <a
              href="https://coolors.co/contrast-checker"
              target="_blank"
              rel="noreferrer"
            >
              https://coolors.co/contrast-checker
            </a>{" "}
            in order to ensure all content is legible.
          </p>
          <h4>Choosing Fonts</h4>
          <p>
            Font styles must also align with our relaxing atmosphere. We chose a
            modern, sans-serif font with rounded edges, such as "Poppins" for
            paragraphs, to ensure that the text feels approachable and soothing,
            enhancing the overall calm and inviting vibe of the design.
          </p>
          <p>
            To make our headings stand out from the paragraphs, we opted for a
            serif font. Its curvy details and varied weights at the curves give
            it a whimsical yet elegant appearance.
          </p>
          <h4>Design Guide</h4>
          <p>
            Once all aesthetic decisions were finalized, we created a design
            guide. This guide will help us ensure consistency, maintain quality,
            and streamline our process during both high-fidelity design and
            development. It serves as a comprehensive document that encapsulates
            the entire Design phase.
          </p>
          <p>Access our Design Guide here:</p>
          <img
            src={require("../../Assets/projects-img/thesuitespot/design-guide.png")}
            alt=""
          ></img>
          {/* <iframe
            title="Design guide"
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F7jurtj8tWFzDFMtUHpQlwg%2FDesign-Phase%3Fnode-id%3D454-47%26node-type%3DCANVAS%26t%3D4zBhKQQ7R6kSZ2RJ-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed%26page-id%3D0%253A1"
            allowfullscreen
          ></iframe> */}
          <a
            href="https://drive.google.com/file/d/1ofQ4XJjVxnx2VwFsEeY0ZlHSmle2-XgZ/view?usp=sharing"
            className="primary-button proj-info-btn"
            target="_blank"
            rel="noreferrer"
          >
            Design Guide
          </a>
        </article>
        <article className="proj-info pi-after">
          <h3 className="center-text">User Testing</h3>
          <h4>Testing Method</h4>
          <p>
            We developed test scenarios based on the use cases of our website.
            We employed the <strong>"Think Aloud Protocol,"</strong> where users
            were instructed to complete tasks while verbalizing their thoughts
            throughout the process. We recorded their actions, logged the time
            taken to complete each task, and noted any comments or feedback.
            Afterward, we analyzed the recordings, tracking errors or moments of
            confusion to identify features that were difficult to access or
            required further refinement.
          </p>
          <div className="img-sub">
            <img
              src={require("../../Assets/projects-img/thesuitespot/testing-method.png")}
              alt=""
              style={{ width: 500, display: "flex", margin: "auto" }}
            ></img>
            <p className="center-text">
              Example "Think Aloud Protocol" conducted
            </p>
          </div>
          <p>
            We divided users into three groups with distinct task sets: two
            groups tested the mobile prototypes, and one group tested the
            desktop version. A total of 15 users were tested. More details on
            our testing method can be found here:
          </p>
          <div className="img-sub">
            <img
              src={require("../../Assets/projects-img/thesuitespot/testing-group.png")}
              alt=""
              style={{ width: 300, display: "flex", margin: "auto" }}
            ></img>
            <p className="center-text">Screenshot of Task Analysis document</p>
          </div>

          <a
            href="https://docs.google.com/document/d/1O7vDT5TvPpgZyDgUO4ZrOcXz0Cx4ijcMYh_pSlMsDcM/edit?usp=sharing"
            className="primary-button proj-info-btn"
            target="_blank"
            rel="noreferrer"
          >
            Task Analysis Document
          </a>
          <h4>Test Results</h4>
          <p>
            The test results of the Think Aloud can also be found in the Task
            Analysis Document. After conducting 15 tests, we identified key
            areas for improvement based on user errors and feedback.
          </p>
          <ol>
            <li>Users cannot find the Log In button</li>
            <li>Users cannot find the FAQ page</li>
          </ol>
        </article>
        <article className="proj-info pi-after">
          <p>Writing is still in progress!</p>
        </article>
      </div>
    </>
  );
}
