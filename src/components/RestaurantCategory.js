import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (category) => {
  const [showItems, setShowItems] = React.useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg text-pink-700">
            {category?.category?.title} ({category?.category?.itemCards?.length}
            )
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={category?.category?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
