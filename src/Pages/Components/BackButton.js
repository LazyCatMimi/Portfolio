import Arrow from "../../Assets/Icons/arrow-left.svg";
import { useNavigate } from "react-router-dom";

function BackButton() {
  let navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <button className="back-button" href="#" onClick={handleBack}>
      <img src={Arrow} alt=""></img>
      Back
    </button>
  );
}

export default BackButton;
