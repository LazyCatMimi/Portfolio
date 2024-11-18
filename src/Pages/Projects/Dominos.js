import {
  ImageWithCaption,
  ExternalLinkButton,
  Section,
  Sectionubsection,
} from "./~TEMPLATE";
export default function Dominos() {
  return (
    <div className="proj-more-info h-content">
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
          The following list is based on my paper on Domino’s accessibility.
          View the full analysis here:
        </p>
        <ExternalLinkButton
          href="https://docs.google.com/document/d/1IpC7AllgDSzGR97BcVZ7EKvnn44x7pe7Oa44ugeV1xc/edit?tab=t.0"
          text="Full Analysis"
        />
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
      <Section title="The Solutions">
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
    </div>
  );
}
