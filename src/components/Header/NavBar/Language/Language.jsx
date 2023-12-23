// import React from 'react'
import { useState } from "react";
import "./Language.css";
import usaFlag from "/public/assets/usa-flag.png";
import geoFlag from "/public/assets/geo-flag.png";
function Language() {
  const [flagIcon, setFlagIcon] = useState(usaFlag);
  const [activeFlag, setActiveFlag] = useState(false);

  const handleLanguageFlag = (flagSource) => {
    setFlagIcon(flagSource);
  };

  return (
    <div className="language-component">
      <div className="flag" onClick={() => setActiveFlag(!activeFlag)}>
        <img src={flagIcon} />
        EN
        <div
          className={`language-child ${
            activeFlag ? "changuage-child-active" : ""
          }`}
        >
          <a
            href="#"
            className="choosed-language"
            onClick={() => handleLanguageFlag(usaFlag)}
          >
            <img src={usaFlag} />
            EN
          </a>
          <a
            href="#"
            className="choosed-language"
            onClick={() => handleLanguageFlag(geoFlag)}
          >
            <img src={geoFlag} />
            GE
          </a>
        </div>
      </div>
    </div>
  );
}

export default Language;
