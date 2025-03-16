import "../../Styles/Components/Header.css";

export default function Header({ Content }) {
  return (
    <header className="header">
      <div className="background-container"></div>
      <div className="max-width">
        <div className="content max-width">
          <Content />
        </div>
      </div>
    </header>
  );
}
