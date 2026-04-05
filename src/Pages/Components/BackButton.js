import { ReactComponent as Arrow } from "../../Assets/Icons/arrow-left.svg";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      <Arrow className="arrow-icon" />
      Back
    </button>
  );
}

export default BackButton;