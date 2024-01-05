import React from "react";

const RestaurantCategory = (category) => {
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between">
        <span className="font-bold text-lg">
          {category?.category?.title} ({category?.category?.itemCards?.length})
        </span>
        <span>⬇️</span>
      </div>
    </div>
  );
};

export default RestaurantCategory;
