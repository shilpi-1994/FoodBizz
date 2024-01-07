import React from "react";
import { RESTAURANT_LOGO } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      <ul>
        {items?.map((ele) => (
          <div
            key={ele?.card?.info?.id}
            className="p-2 m-2 border-gray-400 border-b-2 text-left"
          >
            <img
              className="w-14"
              src={RESTAURANT_LOGO + "/" + ele?.card?.info?.imageId}
            />
            <div className="py-2">
              <span className="font-bold">{ele?.card?.info?.name} - </span>
              <span>Rs {ele?.card?.info?.price / 100}</span>
            </div>
            <p>{ele?.card?.info?.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
