import "../../Styles/Components/Header.css";
import { useState, useEffect } from "react"; // Remove useRef import

export default function Header({ Content }) {

  return (
    <header className="header">
      <div
        className="background-container"
      ></div>
      <div className="content">
        <Content />
      </div>
    </header>
  );
}
