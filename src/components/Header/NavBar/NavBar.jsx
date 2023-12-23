// import React from 'react'
import { useState } from "react";
import Language from "./Language/Language";
import "./NavBar.css";
import NavButton from "./NavBarButton/NavButton";
import LoginPage from "./LoginPage/LoginPage";
import LoginForm from "../../LoginForm/LoginForm";

function NavBar() {
  const [ handleLogin, setHandleLogin ] = useState(false)
  // const [ closeLogin, setCloseLogin ] = useState(false)
  const [navBarSate, setNavBarStete] = useState({
    activeLink: null,
    isOPen: false,
    isButtonActive: false,
  });

  const handleActiveLink = (link) => {
    setNavBarStete((prevState) => ({
      ...prevState,
      activeLink: link,
    }));
  };

  const navigationLinks = [
    { id: "Hotels", label: "Hotels" },
    { id: "Cars", label: "Cars" },
    { id: "About", label: "About" },
    { id: "Help", label: "Help" },
  ];

  const handleNavbar = () => {
    setNavBarStete((prevState) => ({
      ...prevState,
      isOPen: !prevState.isOPen,
      isButtonActive: !prevState.isOPen,
    }));
  };
  return (
    <div className="nav-bar-component">
      <nav
        className={`navigation ${navBarSate.isOPen ? "navigation-active" : ""}`}
      >
        {navigationLinks.map((link) => (
          <a
            key={link.id}
            onClick={() => handleActiveLink(link.id)}
            className={
              navBarSate.activeLink === link.id ? "active-link" : "link"
            }
            href="#"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <Language />
      <LoginPage handleProfile={setHandleLogin} />
      {handleLogin && <LoginForm closeLogin={setHandleLogin} /> }
      <NavButton
        setHandleNavBar={handleNavbar}
        buttonActive={navBarSate.isButtonActive}
      />
    </div>
  );
}

export default NavBar;
