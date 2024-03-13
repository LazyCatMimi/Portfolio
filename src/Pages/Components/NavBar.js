import "../../Styles/Components/NavBar.css";
export default function NavBar() {
  return (
    <nav className="navbar">
      {" "}
      {/* Apply the 'navbar' class for styling */}
      <div className="logo">
        {" "}
        {/* Apply the 'logo' class for styling */}
        {/* <img src="path_to_your_picture" alt="Logo" />  */}
        <p>picture here</p>
      </div>
      <ul>
        <li>Home</li>
        <li>Web Design</li>
        <li>Web Dev</li>
        <li>Art & Design</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
