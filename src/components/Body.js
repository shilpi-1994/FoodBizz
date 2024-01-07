import React from "react";
import RestaurantCard, { withPromotionLabel } from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  const onlineStatus = useOnlineStatus();
  const [listOfRestaurants, setListofRestaurants] = React.useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");
  const RestaurantCardPromoted = withPromotionLabel(RestaurantCard);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const parsedData = await data.json();
    const parsedRestaurants =
      parsedData?.data?.cards[2].card.card.gridElements.infoWithStyle
        .restaurants;

    setListofRestaurants(parsedRestaurants);
    setFilteredRestaurants(parsedRestaurants);
  };

  if (listOfRestaurants?.length === 0) {
    return <ShimmerUI />;
  }

  if (onlineStatus === false) return <div>You are offline!!!</div>;

  return (
    <div className="body">
      <div className="flex items-center">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            placeholder="Enter restaurant name"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            type="submit"
            className="px-4 py-2 bg-green-100 m-4"
            onClick={() => {
              const searchedRes = listOfRestaurants?.filter((ele) =>
                ele.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(searchedRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const topRes = listOfRestaurants?.filter(
              (ele) => ele.info.avgRating > 4.2
            );
            setFilteredRestaurants(topRes);
          }}
          className="px-4 py-2 bg-gray-100 m-4"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            {res.info.sla.deliveryTime < 19 ? (
              <RestaurantCardPromoted resData={res.info} />
            ) : (
              <RestaurantCard resData={res.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
