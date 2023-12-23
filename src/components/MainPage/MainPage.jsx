// import React from 'react'
import "./MainPage.css";
import PopularPlace from "./PopularPLace/PopularPlace";
import SearchInput from "./SearchInput/SearchInput";
import cover from "/Public/assets/cover.svg";

function MainPage() {
  return (
    <div className="main-component">
      <div className="coverImage" style={{ backgroundImage: `url(${cover})` }}>
        {/* <img src={cover} /> */}
        <SearchInput/>
      </div>
      <PopularPlace/>
    </div>
  );
}

export default MainPage;
