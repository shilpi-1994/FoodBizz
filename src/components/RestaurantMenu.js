import React from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, categories } = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = React.useState(0);

  if (!resInfo) return <ShimmerUI />;

  const filteredCategories =
    categories?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (ele) =>
        ele?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{resInfo?.name}</h1>
      <div className="font-bold text-lg text-violet-800">
        {resInfo?.cuisines?.join(", ")} - {resInfo?.costForTwoMessage}
      </div>
      <div className="font-bold">{resInfo?.totalRatingsString}</div>
      <div>{resInfo?.sla?.slaString.toLowerCase()}</div>
      <p>{resInfo?.city}</p>
      <br />
      {filteredCategories?.map((ele, index) => (
        <RestaurantCategory
          key={index}
          category={ele?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
