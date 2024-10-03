export default function TEMPLATE() {
  return (
    <div className="proj-more-info" id="ucfredo">
      <article className="proj-info pi-after">
        <p>TEMPLATE</p>
      </article>
    </div>
  );
}
export const ImageWithCaption = ({ src, alt, caption, style }) => (
  <div className="img-sub">
    <img src={src} alt={alt} style={style}></img>
    <p className="center-text">{caption}</p>
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

export const Section = ({ title, children }) => (
  <article className="proj-info pi-after">
    <h3 className="center-text">{title}</h3>
    {children}
  </article>
);

const SubSection = ({ title, children }) => (
  <article className="proj-info pi-after">
    <h3 className="center-text">{title}</h3>
    {children}
  </article>
);
