// import React from 'react'
import "./Header.css";
import NavBar from "./NavBar/NavBar";
import logo from "/public/logo.svg";

function Header() {
  
  return (
    <div className="header-component">
      <a href="#">
        <img width={70} height={70} src={logo} />
      </a>
      <NavBar  />
    </div>
  );
}

export default Header;
