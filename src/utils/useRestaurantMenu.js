import React from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = React.useState({});
  const [categories, setCategories] = React.useState({});
  React.useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const resData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const parsedData = await resData?.json();
    setResInfo(parsedData?.data?.cards?.[0]?.card?.card?.info);
    setCategories(parsedData?.data?.cards?.[2]);
  };
  return { resInfo, categories };
};

export default useRestaurantMenu;
