// import React from 'react'
import PlaceItem from "./PlaceItem/PlaceItem";
import PLaceNav from "./PlaceNav/PLaceNav";
import "./PopularPlace.css";
function PopularPlace() {
  return (
    <div className="popular-place-component">
      <div className="popular-place-header">
        <h2>Popular PLace</h2>
        <PLaceNav />
      </div>
      <div className="place-items">
        <PlaceItem/>
      </div>
    </div>
  );
}

export default PopularPlace;
