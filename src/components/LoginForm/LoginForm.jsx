// import React from 'react'
import "./LoginForm.css";
import { motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";
function LoginForm({ closeLogin }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="login-form-component"
    >
      <div className="login-form-board">
        <button onClick={() => closeLogin(false)} className="close-login-form">
          <IoIosClose />
        </button>
        <form id="login">
          <div className="user-input">
            <label htmlFor="user">Username</label>
            <input id="user" type="text" />
          </div>
          <div className="password-input">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" />
          </div>
          <button id="login-button">Login</button>
        </form>
        <button id="sign-up-button">Sign up</button>
        <a className="forgot-password-text" href="#">
          Forgot your password?
        </a>
      </div>
    </motion.div>
  );
}

export default LoginForm;
