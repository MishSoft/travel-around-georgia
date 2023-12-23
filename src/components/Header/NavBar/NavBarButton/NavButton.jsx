// import React from 'react'
import "./NavBarButton.css";

function NavButton({ setHandleNavBar, buttonActive }) {
  return (
    <div
      onClick={setHandleNavBar}
      className={`nav-bar-button ${
        buttonActive ? "nav-bar-button-active" : ""
      }`}
    >
      <div className="line line1"></div>
      <div className="line line2"></div>
    </div>
  );
}

export default NavButton;
