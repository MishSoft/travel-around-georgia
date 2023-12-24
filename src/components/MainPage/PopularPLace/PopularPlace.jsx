// import React from 'react'
import PlaceItem from "./PlaceItem/PlaceItem";
import PLaceNav from "./PlaceNav/PLaceNav";
import "./PopularPlace.css";

import TourData from "../../Data/Tours.json";

function PopularPlace() {
  return (
    <div className="popular-place-component">
      <div className="popular-place-header">
        <h2>Popular PLace</h2>
        <PLaceNav />
      </div>
      <div className="place-items">
        {TourData.map((item) => {
          return (
            <PlaceItem
              key={item.id}
              image={item.galleryImage[0]}
              name={item.name}
              location={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PopularPlace;
