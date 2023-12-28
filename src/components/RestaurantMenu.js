import React from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (!resInfo) return <ShimmerUI />;

  return (
    <div className="menu">
      <h1>{resInfo?.name}</h1>
      <p>
        {resInfo?.cuisines?.join(", ")} - {resInfo?.costForTwoMessage}
      </p>
      <div>{resInfo?.totalRatingsString}</div>
      <div>{resInfo?.sla?.slaString.toLowerCase()}</div>
      <p>{resInfo?.city}</p>
    </div>
  );
};

export default RestaurantMenu;
