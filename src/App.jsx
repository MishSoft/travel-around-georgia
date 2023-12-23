// import React from "react";
// import { useRef } from "react";
// import { useState } from "react";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import { motion } from "framer-motion";
// import LoginForm from "./components/LoginForm/LoginForm";
// import Loading from "./components/Loading/Loading.jsx";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className="container"
    >
      <Header />
      <MainPage />
    </motion.div>
  );
}

export default App;
