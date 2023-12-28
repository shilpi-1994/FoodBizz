import React from "react";
import { RestaurantCard } from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  const onlineStatus = useOnlineStatus();
  const [listOfRestaurants, setListofRestaurants] = React.useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const parsedData = await data.json();
    const parsedRestaurants =
      parsedData?.data?.cards[4].card.card.gridElements.infoWithStyle
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
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Enter restaurant name"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            type="submit"
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
            setListofRestaurants(topRes);
          }}
          className="filter-btn"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants?.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            {" "}
            <RestaurantCard resData={res.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};
