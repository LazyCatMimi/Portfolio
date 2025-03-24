import "../../Styles/Project-more-info/ucfredo.css";
import { ImageWithCaption, Highlight } from "./~TEMPLATE";

export default function UcfRedo() {
  return (
    <div className="proj-more-info" id="ucfredo">
      <article className="proj-info pi-after">
        <div>
          <div>
            <h3>The Problem</h3>
            <p>
              image 1A shows a screenshot of UCF mobile displays the navigation
              items pertaining to UCF downtown experience. It encompasses every
              button necessary for students to access information and news
              related to the downtown campus. Each icon functions as an
              interactive button, directing users to the university's webpage,
              online learning platform, or a detailed map, and will highlight
              upon selection. This element of the app effectively serves as a
              <Highlight>significant menu</Highlight>, providing access to
              various functions and resources offered by the university.
            </p>
            <p>
              However, my biggest pain point as a user myself is the
              <Highlight>excessive information clutter</Highlight>. The
              overwhelming use of saturated bold colors and disorganized icons
              makes it difficult to read and find what you need. As a user, I
              believe the menu items could be grouped into categories, making
              them easier to navigate and locate.
            </p>
          </div>
          <ImageWithCaption
            src={require("../../Assets/projects-img/ucfredo-1a.bmp")}
            caption="Image 1A: screenshot of UCF mobile app"
            style={{ width: "10%" }}
          />
        </div>
      </article>
      <article className="proj-info pi-after">
        <div className="img-text-rev">
          <div>
            <h3>Redesign Process</h3>
            <p>
              To improve the UCF mobile app, I decided to conduct an
              <Highlight>open card-sorting</Highlight> exercise, using myself as
              the test subject. In Image 1B, you'll see how I grouped items
              based on their function, marking each group with a different
              color. I examined each item from left to right and top to bottom,
              identifying similarities in their purpose. Ultimately, I
              categorized the items into five distinct color groups, each
              representing a different category.
            </p>
            <h3>My Findings</h3>
            <p>
              As I reviewed the marked items in the screenshot, I noticed the
              disorganization wasn't just due to the overall display of menu
              items, but also because
              <Highlight>
                related items were scattered across the interface
              </Highlight>
              . Some groups appeared in clusters, but were frequently
              interrupted by unrelated items. For example, the first row
              includes "myUCF," "Webcourses," and "Knights Mail," which are all
              essential tools students use for their classes. However, this flow
              is disrupted by "UCF Celebrates the Arts," an event-related item
              that belongs to a different category scattered throughout later
              rows.
            </p>
            <p>
              The initial grouping of similar items led me, as a user, to expect
              the entire menu to be organized in a similar way. But the
              introduction of an unrelated item breaks this expectation,
              <Highlight>interrupting my thought process</Highlight> as I search
              for the needed function. This disruption happens repeatedly across
              the menu, as shown in Image 1B. Each instance of a mismatched item
              causes a moment of confusion, gradually
              <Highlight>
                slowing me down and leading to a sense of frustration
              </Highlight>
              . Ultimately, the current design of the UCF mobile app turns what
              should be a simple search into a daunting task.
            </p>
          </div>
          <ImageWithCaption
            src={require("../../Assets/projects-img/ucfredo-1b.bmp")}
            caption="Image 1B: screenshot of my markings"
            style={{ width: "50%" }}
          />
        </div>
      </article>
      <article className="proj-info pi-after">
        <h3>Design Solution</h3>
        <p>
          Using the color groups I identified, I began by naming each category.
          Next, I considered the best way to present these groups so that users
          could quickly and easily find what they need. My initial idea was to
          separate the categories with simple lines, but this would require a
          lot of scrolling, which could frustrate users if what they need is
          further down the list. So, the challenge became finding a way to
          present these groups while minimizing the need for excessive
          scrolling.
        </p>
        <p>
          My solution was to implement <Highlight>dropdown menus</Highlight>.
          With dropdowns, users can {""}
          <Highlight>
            quickly scan for the category they need and collapse the ones they
            don't
          </Highlight>
          , allowing them to access the desired items faster without the need to
          scroll through irrelevant options. This approach reduces the overall
          scrolling time and improves efficiency.
        </p>
        <p>
          Additionally, I made the icons smaller because some were not
          immediately recognizable and required labels to be fully understood,
          such as "Report Incident/Abuse," "Athletics," and "Knight Connect."
          Reducing the size of the icons also helps to minimize visual clutter
          caused by the graphics and colors, making it easier to scan through
          one line at a time from top to bottom, rather than having to navigate
          both horizontally and vertically.
        </p>
        <ImageWithCaption
          src={require("../../Assets/projects-img/ucfredo-1c.jpg")}
          caption="Image 1C: My Redesign"
          style={{ width: "20%" }}
        />

        <p>
          Lastly, my redesign tackles the problem of overwhelming eye scanning.
          In the old design, users had to scan each item from left to right and
          top to bottom, following the natural reading order. With my redesign,
          users <Highlight>only need to scan from top to bottom</Highlight> and
          can easily skip unnecessary categories. This significantly
          <Highlight>speeds up</Highlight> the process of finding an item and
          reduces eye strain.
        </p>
      </article>
      <article className="proj-info pi-after">
        <h3>Reflection</h3>
        <p>
          By organizing the items in this way,
          <Highlight>scanning and scrolling are minimized</Highlight> , making
          it much easier for users to find what they need. Users can bypass
          categories they don't need, and even if they're unsure where an item
          is located, they can make an educated guess by selecting the relevant
          category, avoiding the need to scan through all the items. This
          redesign highlights how the layout of navigation can significantly
          impact a user's attention and willingness to continue using a product.
          For a UX designer, addressing this issue is crucial for enhancing user
          interaction with a website or product, ultimately boosting conversion
          rates. It's a win-win for both the user and the company.
        </p>
      </article>
    </div>
  );
}
