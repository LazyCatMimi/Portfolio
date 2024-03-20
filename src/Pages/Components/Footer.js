import "../../Styles/Components/Footer.css";
import gitIcon from "../../Assets/Icons/contact-github.svg";
import linkedinIcon from "../../Assets/Icons/contact-linkedin.svg";
export default function Footer() {
  return (
    <footer className="dark-bg">
      <h5>Quynh Vo</h5>
      <div>
        <img src={gitIcon} alt="Github" />
        <img src={linkedinIcon} alt="linkedIn" />
      </div>
    </footer>
  );
}
