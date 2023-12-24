// import React from 'react'
import "./PlaceItem.css";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

function PlaceItem({ image, name, location, price, isFavorite }) {
  return (
    <a href="#" className="item">
      <div className="item-image">
        <img src={image} />
      </div>
      <div className="name-save">
        <h2>{name}</h2>
        <button className="favorite-button">
          {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
        </button>
      </div>

      <div className="location_price">
        <div className="location">
          <IoLocationSharp />
          {location}
        </div>
        <h3>₾{price}</h3>
      </div>
    </a>
  );
}

export default PlaceItem;
