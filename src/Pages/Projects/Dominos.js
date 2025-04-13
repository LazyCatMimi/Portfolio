import {
  ImageWithCaption,
  ExternalLinkButton,
  Section,
  Sectionubsection,
} from "./~TEMPLATE";
export default function Dominos() {
  return (
    <div className="proj-more-info h-content">
      <Section title="Video Overview">
        <iframe
          className="iframe-yt"
          width="1519"
          height="609"
          src="https://www.youtube.com/embed/AOEsIu5U4d8"
          title="Dominos   Accessibility Final Quynh Vo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Section>
      <Section title="The Problems">
        <p>
          Domino's Pizza's website is difficult for many users, especially those
          with disabilities, due to its cluttered layout and information
          overload. Issues like low readability and hard-to-find action buttons
          can affect people who are blind, color blind, have low vision,
          dyslexia, or cognitive disabilities. Simplifying and reorganizing the
          layout would make the site more accessible, ensuring everyone can
          enjoy an equitable pizza ordering experience.
        </p>
        <p>
          I did a full analysis of the Domino's website, focusing on the
          accessibility. View the full analysis here:
        </p>
        <ExternalLinkButton
          href="https://docs.google.com/document/d/1IpC7AllgDSzGR97BcVZ7EKvnn44x7pe7Oa44ugeV1xc/edit?tab=t.0"
          text="Full Analysis"
        />
        <p className="center-text">Visit the site at the point of design here:</p>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px"}}>
        <a href="https://web.archive.org/web/20230930231216/https://www.dominos.com/"     target="_blank"
    rel="noreferrer" >https://web.archive.org/web/20230930231216/https://www.dominos.com/
        </a>
        </div>

        <ImageWithCaption
          src={require("../../Assets/projects-img/Dominos/original.png")}
          alt=""
          style={{ width: 500, display: "flex", margin: "auto" }}
          caption="The original website as of September 30, 2023"
        />
        <h4>User Survey</h4>
        <p>
          I gathered first impressions of the website design from friends and
          family, asking for their thoughts and reasons why. Here are some
          notable comments:
        </p>

        <ul>
          <li>
            It's over-stimulating to me, so many bright colors and intense font
            changes.
          </li>
          <li>
            I used to order from them on the site but stopped because their site
            was confusing to use.
          </li>
          <li>
            When I order from Domino's, I don't even try to understand the home
            page, I just immediately go to place a pickup order. Cause I have no
            idea what I should be looking at because of how much there really
            is.
          </li>
          <li>
            I think if they change the bright colors and made the pictures not
            so crowded, it could have a pretty good change.
          </li>
          <li>
            This front page is a complete nightmare for those with sensory
            issues. As a person with sensory issues, it's simply too much going
            on without need.
          </li>
          <li>
            Right when I looked at the website, it instantly looked too much and
            instantly overwhelmed me.
          </li>
        </ul>
        <ImageWithCaption
          src={require("../../Assets/projects-img/Dominos/word-cloud.png")}
          alt=""
          style={{ width: 500, display: "flex", margin: "auto" }}
          caption="word cloud of user survey"
        />
        <h4>Identifying the problems</h4>
        <p>
          Based on user feedbacks, I identified the following problems,
          especially linked with accessibility:
        </p>
        <p>
          <strong>Readability Issues</strong>
        </p>
        <ul>
          <li>
            Overuse of different font families, styles, and sizes on the
            homepage creates clutter.
          </li>
          <li>
            Fonts are inconsistently styled (e.g., bold, italic, spaced out) and
            poorly contrasted (e.g., gray on white, white on red).
          </li>
          <li>
            Extremely small text in images is unreadable, adding visual clutter.
          </li>
          <li>
            Violates Web Content Accessibility Guideline (WCAG) 3.1, which
            requires text to be readable and understandable.
          </li>
        </ul>

        <p>
          <strong>Visual Clutter</strong>
        </p>
        <ul>
          <li>
            Saturated images with multiple unrelated objects add unnecessary
            complexity.
          </li>
          <li>Text often overlaps images, making it harder to distinguish.</li>
          <li>
            Violates physical accessibility principles (AASPIRE) by overloading
            the site with decorative elements.
          </li>
        </ul>

        <p>
          <strong>Color Blindness Challenges</strong>
        </p>
        <ul>
          <li>
            “ORDER NOW” buttons blend into images for users with color blindness
            (protanopia, deuteranopia, achromatopsia).
          </li>
          <li>
            Violates WCAG 1.4, which emphasizes clear separation between
            foreground and background.
          </li>
        </ul>

        <p>
          <strong>General Accessibility Issues</strong>
        </p>
        <ul>
          <li>
            Excessive clutter and conflicting elements can overwhelm users with
            dyslexia, cognitive impairments, or vision disabilities.
          </li>
        </ul>
      </Section>
      <Section title="The Changes">
        <h4>Visual Clarity and Reduced Clutter</h4>
        <p>
          <strong>Original:</strong> The original design is visually
          overwhelming with multiple competing elements (different font sizes,
          bold colors, and images) vying for attention.
        </p>
        <p>
          <strong>Redesigned:</strong> The redesigned version uses a cleaner
          layout with fewer elements per section, allowing users to focus on one
          task or call-to-action at a time.
        </p>
        <p>
          <strong>Accessibility Impact:</strong> Simplified layouts help users
          with cognitive disabilities or attention disorders process information
          more easily.
        </p>

        <h4>Consistent and Large Call-to-Actions (CTAs)</h4>
        <p>
          <strong>Original:</strong> CTAs ("Order Now" buttons) are scattered
          and vary in size, making it harder for users to find and prioritize
          actions.
        </p>
        <p>
          <strong>Redesigned:</strong> The redesigned layout provides clear,
          prominent CTAs for major actions (like "Start Your Order") in a
          consistent design.
        </p>
        <p>
          <strong>Accessibility Impact:</strong> Larger, consistently placed
          buttons are easier for users with motor impairments or visual
          disabilities to click or tap.
        </p>

        <h4>Improved Color Contrast</h4>
        <p>
          <strong>Original:</strong> Text often appears over images without
          sufficient contrast (e.g., white text over bright pizza images).
        </p>
        <p>
          <strong>Redesigned:</strong> The redesigned version uses text over
          solid backgrounds, ensuring better contrast and compliance with WCAG
          guidelines for readability.
        </p>
        <p>
          <strong>Accessibility Impact:</strong> High-contrast text benefits
          users with low vision or color blindness.
        </p>

        <h4>Hierarchy and Focus</h4>
        <p>
          <strong>Original:</strong> The original design lacks a clear visual
          hierarchy; users are bombarded with deals and options all at once.
        </p>
        <p>
          <strong>Redesigned:</strong> The redesigned version groups related
          information and actions into sections (e.g., "Start Your Order," "New
          Stuffed Cheesy Bread," "Rewards"), guiding users through the page in a
          logical order.
        </p>
        <p>
          <strong>Accessibility Impact:</strong> A clear hierarchy reduces
          cognitive load and helps screen reader users understand the page
          structure better.
        </p>

        <h4>Accessible Navigation</h4>
        <p>
          <strong>Original:</strong> The navigation menu is densely packed with
          links and small icons.
        </p>
        <p>
          <strong>Redesigned:</strong> The redesigned version provides a
          simplified, well-organized footer navigation bar with fewer, larger
          buttons.
        </p>
        <p>
          <strong>Accessibility Impact:</strong> Larger buttons are easier to
          interact with on touch screens, and fewer choices reduce decision
          fatigue for users.
        </p>

        <h4>Text Readability</h4>
        <p>
          <strong>Original:</strong> Text sizes are inconsistent, and some
          critical text is small or crammed.
        </p>
        <p>
          <strong>Redesigned:</strong> The redesigned version uses larger fonts
          with ample spacing, improving readability.
        </p>
        <p>
          <strong>Accessibility Impact:</strong> Larger fonts help users with
          visual impairments or dyslexia.
        </p>

        <h4>Use of White Space</h4>
        <p>
          <strong>Original:</strong> The original design is dense, with little
          room for visual breathing.
        </p>
        <p>
          <strong>Redesigned:</strong> The redesigned layout incorporates more
          white space, allowing content to stand out and reducing visual
          fatigue.
        </p>
        <p>
          <strong>Accessibility Impact:</strong> Ample white space helps users
          with cognitive disabilities focus on the key elements without
          distractions.
        </p>

        <h4>Simplified Imagery</h4>
        <p>
          <strong>Original:</strong> The imagery is busy and competes with text,
          making it harder to understand the content.
        </p>
        <p>
          <strong>Redesigned:</strong> Imagery is used as a backdrop or
          secondary element, complementing the content rather than dominating
          it.
        </p>
        <p>
          <strong>Accessibility Impact:</strong> Reducing visual noise helps
          users focus, especially those with attention or processing challenges.
        </p>
      </Section>
      <Section title="The Results">
        <h4>User Survey - After</h4>
        <p>
          I surveyed the same individuals again about my redesign, asking if and
          why it had improved upon the original.
        </p>
        <ul>
          <li>
            SO much better. A lot less overwhelming because everything is spaced
            out and not cramped in one place.
          </li>
          <li>
            I can clearly see where I’m supposed to click compared to the old
            one.
          </li>
          <li>
            It’s somewhat of a shame that I can’t see all the deals all at once,
            but at least there’s a slider thing so it’s not too bad. Definitely
            better looking though.
          </li>
          <li>Yeah. There’s a lot less going on.</li>
          <li>It looks simpler - in a good way.</li>
        </ul>

        <h4>Conclusion</h4>
        <p>
          The redesigned version of Domino's website is more user-friendly and
          accessible. It reduces clutter, improves readability, and enhances
          navigation. Users with disabilities can now easily find what they
          need, making the pizza ordering experience more enjoyable for
          everyone. The changes also benefit all users, creating a more
          efficient and pleasant experience. The redesigned site is a step
          towards a more inclusive online environment, where everyone can access
          information and services without barriers.
        </p>
      </Section>
    </div>
  );
}
