import "../../Styles/Components/Footer.css";
import gitIcon from "../../Assets/Icons/contact-github.svg";
import linkedinIcon from "../../Assets/Icons/contact-linkedin.svg";
export default function Footer() {
  return (
    <footer style={{ width: "100%" }}>
      <div className="max-width">
        <div className="footer-content">
          <h5>Quynh Vo</h5>
          <div className="flex gap-2 ">
            <a
              href="https://github.com/LazyCatMimi"
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <img src={gitIcon} alt="Github" />
            </a>
            <a
              href="https://www.linkedin.com/in/quynh-vo-7b714222b"
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <img src={linkedinIcon} alt="linkedIn" rel="noreferrer" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
