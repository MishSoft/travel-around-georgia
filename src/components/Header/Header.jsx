// import React from 'react'
import "./Header.css";
import NavBar from "./NavBar";
// import SearchInput from "./SearchInput";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";

function Header() {
  return (
    <div className="header-component">
      <div className="left-side">
        <div className="logo"></div>
        <NavBar />
      </div>
      <div className="right-side">
        <div className="search-input-button">
          <CiSearch />
        </div>
        <button className="login-form-button">Login</button>
        <div className="language-mode">
          En <FaAngleDown />
        </div>
      </div>
    </div>
  );
}

export default Header;
