import React from "react";
import { RESTAURANT_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
  return (
    <div className="m-4 p-4 w-[200px] bg-slate-400 hover:bg-yellow-100">
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

export const withPromotionLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-lime-100 text-black p-1">
          Fast delivery
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
