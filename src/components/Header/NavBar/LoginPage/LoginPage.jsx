// import React from 'react'
import { FaRegUser } from "react-icons/fa";
import "./LoginPage.css";

function LoginPage({ handleProfile }) {
    const handleShowPage = () => {
        handleProfile(true)
    }
  return (
    <button onClick={handleShowPage} className="login-component">
      <FaRegUser />
    </button>
  );
}

export default LoginPage;
