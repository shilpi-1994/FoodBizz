import React from "react";
import { RESTAURANT_LOGO } from "../utils/constants";

export const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={RESTAURANT_LOGO + "/" + props.resData.cloudinaryImageId}
      />
      <h3>{props.resData.name}</h3>
      <h4>{props.resData.cuisines.join(", ")}</h4>
      <h4>{props.resData.avgRatingString} rating</h4>
      <h4>{props.resData.costForTwo}</h4>
    </div>
  );
};
