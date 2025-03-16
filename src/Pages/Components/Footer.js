import "../../Styles/Components/Footer.css";
import gitIcon from "../../Assets/Icons/contact-github.svg";
import linkedinIcon from "../../Assets/Icons/contact-linkedin.svg";
export default function Footer() {
  return (
    <footer className="max-width">
      <h5>Quynh Vo</h5>
      <div>
        <a href="https://github.com/LazyCatMimi" target="_blank">
          <img src={gitIcon} alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/quynh-vo-7b714222b"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="linkedIn" />
        </a>
      </div>
    </footer>
  );
}
