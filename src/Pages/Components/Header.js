import "../../Styles/Components/Header.css";
import { AnimatedBackground } from "./Animation/Animated";

export default function Header({ HeaderContent, toColor }) {

  return (
<AnimatedBackground toColor={toColor}

      >
        <header className="header">
          <div className="background-container">
            <div className="content ">
              <HeaderContent />
            </div>
          </div>
        </header>
      </AnimatedBackground>
  );
}
