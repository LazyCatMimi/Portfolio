export default function TEMPLATE() {
  return (
    <div className="proj-more-info">
      <article className="proj-info pi-after">
        <p>TEMPLATE</p>
      </article>
    </div>
  );
}
export const ImageWithCaption = ({ src, alt, caption, style }) => (
  <div className="img-sub">
    <img
      src={src}
      alt={alt}
      style={{ ...style, display: "flex", margin: "auto" }}
    ></img>
    <p className="center-text subtitle">{caption}</p>
  </div>
);

export const ExternalLinkButton = ({ href, text }) => (
  <a
    href={href}
    className="primary-button proj-info-btn"
    target="_blank"
    rel="noreferrer"
  >
    {text}
  </a>
);

export const Section = ({ title, children, line=true }) => (
  <article className="proj-info pi-after">
    {line ? <hr class="line"></hr> : null}
    <h3 className="center-text" id={generateIdFromText(title)}>
      {title}
    </h3>
    {children}
  </article>
);

export const SubSection = ({ title, children }) => (
  <article className="proj-info pi-after">
    <h3 className="center-text">{title}</h3>
    {children}
  </article>
);

export const generateIdFromText = (text) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

export const Highlight = ({ children }) => {
  return (
    <span>
      {" "}
      <strong className="highlight">{children}</strong>
    </span>
  );
};
