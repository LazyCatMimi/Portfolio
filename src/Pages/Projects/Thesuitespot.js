import "../../Styles/Project.css";
import plImg from "../../Assets/test.png";
import StaggeredText from "../Components/Animation/StaggeredText";
import PROJECTS from "../../Data/Projects.json";
import {
  ImageWithCaption,
  ExternalLinkButton,
  Section,
  Sectionubsection,
} from "./~TEMPLATE";

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
          <ImageWithCaption
            src={require("../../Assets/projects-img/thesuitespot/the-team.jpg")}
            alt=""
            style={{ width: 500, display: "flex", margin: "auto" }}
            caption="(left to right) me, Lily, Lindsey, Brianna, and Callie"
          />
        </article>
        <article className="proj-info pi-after special-heading">
          <h2 className="center-text" style={{ margin: 0 }}>
            Design Phase
          </h2>
        </article>
        <Section title="Ideation">
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
          <ExternalLinkButton
            href="https://docs.google.com/document/d/1-lDLf3FPQqFrQsjOLCP-L5prJ2xr4ZO5Sk1Z8Kx6lH0/edit"
            text="Salon Responsive Design Case Study"
          />
          <p>
            Our primary goal is to create a user-friendly website that provides
            clear information about the salon suites and allows clients to
            easily book appointments with various providers. The site should be
            designed to encourage user engagement and drive conversions, whether
            that means booking an appointment or purchasing products.
          </p>
          <h4>Market Matrix</h4>
          We started by creating a Market Matrix to analyze competitors. This
          approach helps identify essential features and pages for salon
          websites, as well as any gaps in the industry. A higher percentage
          indicates more critical features, while a lower percentage highlights
          areas where features are needed or lacking.
          <img
            src={require("../../Assets/projects-img/thesuitespot/marketmatrix.png")}
            alt=""
          ></img>
          <h4>Information Architecture</h4>
          <p>
            After analyzing the Market Matrix, we identified key features and
            developed them further through information architecture.
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
        </Section>
        <Section title="Design Beginnings">
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
          <ImageWithCaption
            src={require("../../Assets/projects-img/thesuitespot/usecaseex.png")}
            alt=""
            style={{}}
            caption="Example use case & user flow"
          />
          <ExternalLinkButton
            href="https://docs.google.com/document/d/1tYGhInLkMWd3ycZQXfzpfVvfsNzGEIf9KfcGLF4kr5Y/edit?usp=sharing"
            text="See Full Use Cases and User Flows"
          />

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
          <ExternalLinkButton
            href="https://xmind.ai/share/kFwmfD1s"
            text="See Information Architecture"
          />
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
          <ExternalLinkButton
            href="https://app.uizard.io/p/39a0e03a/overview"
            text="See Mobile Sketches"
          />
          <p className="center-text">Desktop</p>
          <img
            src={require("../../Assets/projects-img/thesuitespot/sketches-desktop.png")}
            alt=""
          ></img>
          <ExternalLinkButton
            href="https://app.uizard.io/p/2173ec7c/overview"
            text="See Desktop Sketches"
          />
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
          <ExternalLinkButton
            href="https://www.figma.com/proto/Tu8daAYiOE6THFlZO444jD/Mobile-LoFi-Prototype?node-id=1-2&node-type=CANVAS&t=6gFk1JOuDzvMVhfe-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2overview"
            text="See Mobile Lo-Fi"
          />
          <p className="center-text">Desktop</p>
          <img
            src={require("../../Assets/projects-img/thesuitespot/lofi-desktop.png")}
            alt=""
          ></img>

          <ExternalLinkButton
            href="https://www.figma.com/proto/Q0MLRg0LbHp9RDmba8rk6f/Web-LoFi-Prototype?node-id=1-2&node-type=CANVAS&t=hDh6B6gsEcoEkLbY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&show-proto-sidebar=1"
            text="See Desktop Lo-Fi"
          />
        </Section>
        <Section title="Aesthetic Decisions">
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
            Font styles must also align with our relaxing atmosphere. We created several combination of fonts that we think would work well with our goals. Here were our choices:
          </p>
          <ImageWithCaption
            src={require("../../Assets/projects-img/thesuitespot/fontchoices.png")}
            alt=""
            style={{ width: 600, display: "flex", margin: "auto" }}
            caption='Our Font Choices'
          />
          <p>
          After having a thorough meeting, We chose a
            modern, sans-serif font with rounded edges, such as "Poppins" for
            paragraphs, to ensure that the text feels approachable and soothing,
            enhancing the overall calm and inviting vibe of the design. To make our headings stand out from the paragraphs, we opted for a
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

          <ExternalLinkButton
            href="https://drive.google.com/file/d/1ofQ4XJjVxnx2VwFsEeY0ZlHSmle2-XgZ/view?usp=sharing"
            text="Design Guide"
          />
          <h4>Hi-Fi Prototypes</h4>
          <p>
            With our design guide in place, we had clear brand identity and
            style guidelines to follow, making us ready to develop our Hi-Fi
            prototypes. We built on the layout and navigation from the Lo-Fi
            prototypes and applied the color scheme from the design guide.
          </p>
          <p>See our Hi-Fi Prototypes here:</p>
          <p className="center-text">Mobile</p>
          <img
            src={require("../../Assets/projects-img/thesuitespot/hifi-mobile.png")}
            alt=""
          ></img>
          <ExternalLinkButton
            href="https://www.figma.com/proto/xBcWK5LhvhetgYrxEitJa4/Mobile-HiFi-Prototype?type=design&t=BAUKefgdvnAVwDuY-1&scaling=scale-down&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&show-proto-sidebar=1&mode=design"
            text="See Mobile Hi-Fi"
          />
          <p className="center-text">Desktop</p>
          <img
            src={require("../../Assets/projects-img/thesuitespot/hifi-desktop.png")}
            alt=""
          ></img>

          <ExternalLinkButton
            href="https://www.figma.com/proto/PBrgGbarppN9gmbtOgJ2SG/Web-HiFi-Prototype?type=design&node-id=1-2&t=Wg8Zrt3Pg7guhKYW-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1&mode=design"
            text="See Desktop Hi-Fi"
          />
        </Section>
        <Section title="User Testing">
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
          <ImageWithCaption
            src={require("../../Assets/projects-img/thesuitespot/testing-method.png")}
            alt=""
            style={{ width: 500, display: "flex", margin: "auto" }}
            caption='Example "Think Aloud Protocol" conducted'
          />
          <p>
            We divided users into three groups with distinct task sets: two
            groups tested the mobile prototypes, and one group tested the
            desktop version. A total of <strong>15 users</strong> were tested.
            More details on our testing method can be found here:
          </p>
          <ImageWithCaption
            src={require("../../Assets/projects-img/thesuitespot/testing-group.png")}
            alt=""
            style={{ width: 300, display: "flex", margin: "auto" }}
            caption="Screenshot of Task Analysis document"
          />

          <ExternalLinkButton
            href="https://docs.google.com/document/d/1O7vDT5TvPpgZyDgUO4ZrOcXz0Cx4ijcMYh_pSlMsDcM/edit?usp=sharing"
            text="Task Analysis Document"
          />
          <h4>Test Results</h4>
          <p>
            The test results of the Think Aloud can also be found in the Task
            Analysis Document. After conducting 15 tests, we identified key
            areas for improvement based on user errors and feedback.
          </p>
          <ol>
            <li>
              <strong>Users cannot find the Log In button</strong>
            </li>
            <ul>
              <li>
                <strong>Observation:</strong> Users frequently searched for the
                login/signup button in the navigation bar or hamburger menu, but
                it was placed above the main navbar on desktop and outside of
                the hamburger menu on mobile.
              </li>
              <li>
                <strong>Possible Cause:</strong> The absence of an "Account"
                button in the navigation or hamburger menu differed from users'
                expectations. Additionally, the user icon was positioned too far
                from the main menu items, making it easier to overlook
                (according to the Gestalt Principle - Law of Proximity).
              </li>
              <li>
                <strong>Solution:</strong> We added an "Account" button to the
                navigation bar and hamburger menu with login/signup submenus.
                This improves usability by aligning with user expectations and
                increasing visibility, following the Gestalt Principle of
                Proximity to make navigation more intuitive.
              </li>
            </ul>
            <br></br>
            <li>
              <strong>Users cannot find the FAQ & Blogs pages</strong>
              <ul>
                <li>
                  <strong>Observation:</strong> Some users mentioned difficulty
                  finding the FAQ or blog sections, with several expecting the
                  FAQ to be in the main navigation bar. At the time, both FAQs
                  and Blogs were located under the "About Us" section as
                  submenus.
                </li>
                <li>
                  <strong>Possible Cause:</strong> This likely occurred because
                  users expect frequently accessed information like FAQs and
                  blogs to be easily accessible from the main navigation bar,
                  rather than hidden within submenus. Placing them under "About
                  Us" made them less visible and harder to locate.
                </li>
                <li>
                  <strong>Solution:</strong> We moved the FAQ and blog to their
                  own main menu items in the navigation bar for easier access.
                </li>
              </ul>
            </li>
            <br></br>
            <li>
              <strong>Hi-fi prototype needed more refinement</strong>
              <ul>
                <li>
                  <strong>Observation:</strong> During tasks like subscribing to
                  blogs, signing up for newsletters, contacting the company, or
                  booking an appointment, some buttons lacked interactions or
                  confirmation responses, causing confusion for testers.
                </li>
                <li>
                  <strong>Possible Cause:</strong> We overlooked the importance
                  of microinteractions in our Hi-Fi prototypes—small feedback
                  elements like button animations or confirmation messages—which
                  are essential for providing users with clear feedback that
                  their actions were successful.
                </li>
                <li>
                  <strong>Solution:</strong> We added the necessary interactions
                  and confirmation responses. This improvement enhances clarity
                  for users, helping them feel confident their actions were
                  completed, and also aids developers in understanding expected
                  behaviors.
                </li>
              </ul>
            </li>
          </ol>
          <ImageWithCaption
            src={require("../../Assets/projects-img/thesuitespot/old-new-nav.png")}
            alt=""
            style={{ width: 500, display: "flex", margin: "auto" }}
            caption="Old nav bar (top) vs Revised nav bar (bottom) based on user feedbacks"
          />
          <div>
            <h4>Test Survey Results</h4>
            <p>
              After the Think Aloud Protocol, we gave a survey to each tester
              for them to rate our site’s functionalities and give feedback. We
              took note of their demographics to see if there is a trend. We
              also wanted to see if our site is accommodating to individuals
              with disabilities that may affect their web browsing experiences.
            </p>
            <p>Here are our user demographics:</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%", // Makes it responsive
                maxWidth: "500px",
                margin: "auto",
                flexWrap: "wrap",
              }}
            >
              <div>
                <h5>Age</h5>
                <ul>
                  <li>under 18 (6.7%)</li>
                  <li>18-24 (53.3%)</li>
                  <li>35-44 (20%)</li>
                  <li>45-54 (13.3%)</li>
                  <li>55-64 (6.7%)</li>
                </ul>
              </div>
              <div>
                <h5>Gender</h5>
                <ul>
                  <li>Female (60%)</li>
                  <li>Male (33.3%)</li>
                  <li>Non-binary (6.7%)</li>
                </ul>
              </div>
              <div>
                <h5>Has a Disability</h5>
                <ul>
                  <li>Yes (26.7%)</li>
                  <li>No (73.3%)</li>
                </ul>
              </div>
            </div>
          </div>
          <p>Accessibility Results:</p>
          <ol>
            <li>3 individuals have vision impairments</li>
            <li>1 individual has ADHD and is on the Autism spectrum</li>
          </ol>
          <p>
            Individuals with these disabilities also shared their satisfaction
            with the prototype's accommodations. While half remained neutral,
            the other half found it either accommodating or somewhat
            accommodating. Their disabilities may or may not affect their web
            browsing experience, but it's reassuring to know that they were
            either indifferent or felt there were no significant issues that
            negatively impacted their experience due to their disability.
          </p>
          <img
            src={require("../../Assets/projects-img/thesuitespot/test-disability.png")}
            alt=""
            style={{ width: 900, display: "flex", margin: "auto" }}
          ></img>
          <p>User Experience Satisfaction Results:</p>
          <img
            src={require("../../Assets/projects-img/thesuitespot/test-ux.png")}
            alt=""
            style={{ width: 900, display: "flex", margin: "auto" }}
          ></img>
        </Section>
        <Section title="Finalizing Design">
          <p>
            After making changes and confirming they work with the users, we
            finalized our design by compiling design files to help the
            development stage later on. This includes updating the Design Guide,
            project assets, and other technical research to prepare for
            development.
          </p>
          <h4>Final Design Guide and Report</h4>
          <ImageWithCaption
            src={require("../../Assets/projects-img/thesuitespot/devphase-front.jpg")}
            alt=""
            caption="Final Design Guide - Front page"
            style={{ width: 200, display: "flex", margin: "auto" }}
          />
          <ExternalLinkButton
            href="https://drive.google.com/file/d/1d1TFn70APIFIAkL_k7JUQ_mDuNlI4IoW/view?usp=sharing"
            text="View Final Design Guide"
          />
        </Section>
        <Section title="Design Phase Reflection">
          <p>
            I learned a great deal throughout the design phase of this project.
            While I’ve always enjoyed teamwork, this project deepened my
            appreciation for it, especially when tackling larger, more complex
            projects like this one. In this CAPSTONE project, I had the
            opportunity to apply everything I learned throughout my major, which
            gave me a clearer understanding of how the tools and methods I’ve
            acquired can be used to enhance the user experience in real-world
            scenarios.
          </p>
          <p>
            That said, I wish we could have done more, though we were limited by
            time constraints. For example, we could have conducted interviews
            with salon owners to better understand stakeholder opinions and
            gauge how willing they might be to invest in a project like ours.
            Additionally, we should have sent out more surveys to friends and
            family to gather feedback on their experiences with salon websites
            and identify areas for improvement. Another round of prototype
            testing would have been beneficial to ensure users found the updated
            UI more intuitive after our fixes. Finally, we could have
            experimented with multiple layout and color schemes, sending out
            surveys to gauge user preferences and find out which design
            resonated best with our target audience.
          </p>
          <p>
            These steps would have further refined our design process and made
            it even more user-centered. Despite the areas where we could have
            expanded our work, this project was an amazing experience.
            Collaborating with my team was incredibly rewarding, and I learned
            invaluable lessons not only about UX design but also about the power
            of communication and collaboration in achieving a shared goal. This
            project reinforced my passion for UX and my excitement to apply
            these skills in future endeavors.
          </p>
        </Section>
        <article className="proj-info pi-after special-heading">
          <h2 className="center-text" style={{ margin: 0 }}>
            Development Phase
          </h2>
        </article>
        <article className="proj-info pi-after">
          <p>Writing is still in progress!</p>
        </article>
      </div>
    </>
  );
}
