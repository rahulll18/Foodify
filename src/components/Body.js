import React, { useState, useEffect } from "react";
import RestaurantCard, { WithOpenLabel } from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  //useState hooks
  const [listOfRestaurant, setlistOfResturant] = useState([]);
  const [filterRestaurant, setfilterRestaurant] = useState([]);
  const [searchTxt, setSearchText] = useState("");

  const RestaurantCardOpened = WithOpenLabel(RestaurantCard);

  //useEffect Hooks
  //two arguments 1.callback function  2. dependency array
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    setlistOfResturant(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilterRestaurant(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  function eventHandler() {
    const filteredRes = listOfRestaurant.filter(
      (res) => res.info.avgRatingString > 4.3
    );

    setfilterRestaurant(filteredRes);
  }

  const filterBySearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchText(searchText);

    const filteredList = listOfRestaurant.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText)
    );

    setfilterRestaurant(filteredList);
  };
  // function searchHandler() {
  //   const filterSearch = listOfRestaurant.filter((res) =>
  //     res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
  //   );
  //   console.log(searchTxt);
  //   setfilterRestaurant(filterSearch);
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        It seems like You're Offline !!! Please check your Intenet connection
      </h1>
    );

  // if (listOfRestaurant.length === 0) return <Shimmer />;

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="modify flex justify-around items-center mt-4">
        <div className="search flex justify-center items-center">
          <input
            className="border border-solid border-black rounded-lg w-64 py-1"
            type="text"
            placeholder="Search for restaurants..."
            value={searchTxt}
            // onChange={(e) => setSearchText(e.target.value)}
            onChange={filterBySearch}
          />
          <button className="search-btn px-3 py-1 ml-4 rounded-full bg-blue-400  hover:bg-blue-600	text-white shadow-lg">
            Search
          </button>
        </div>
        <div className="filter flex justify-center items-center">
          <button
            className=" bg-blue-400 hover:bg-blue-600 text-white rounded-lg p-2 mx-2 shadow-lg"
            onClick={eventHandler}
          >
            Top Ratings restaurant
          </button>
        </div>
      </div>
      <div className="res-container flex justify-center items-center p-4 flex-wrap	">
        {filterRestaurant.map((resturant) => (
          <Link
            className="res-card-link"
            key={resturant.info.id}
            to={"/restaurnat/" + resturant.info.id}
          >
            {resturant.info.isOpen === true ? (
              <RestaurantCardOpened resData={resturant} />
            ) : (
              <RestaurantCard resData={resturant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

// import React, { useState, useEffect } from "react";
// import RestaurantCard, { WithOpenLabel } from "./ResCard";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";

// export const Body = () => {
//   // useState hooks
//   const [listOfRestaurant, setlistOfResturant] = useState([]);
//   const [filterRestaurant, setfilterRestaurant] = useState([]);
//   const [searchTxt, setSearchText] = useState("");

//   const RestaurantCardOpened = WithOpenLabel(RestaurantCard);

//   // useEffect Hook
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );

//     const jsonData = await data.json();

//     const restaurants =
//       jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
//     setlistOfResturant(restaurants);
//     setfilterRestaurant(restaurants);
//   };

//   //   const filterBySearch = (e) => {
//   //     setSearchText(e.target.value);
//   //     console.log(searchTxt);
//   //     const searchFilteredList = listOfRestaurant.filter((res) => {
//   //       res.info.name.toLowerCase().includes(searchTxt.toLowerCase());
//   //     });
//   // setfilterRestaurant(searchFilteredList);
//   //   };

// const filterBySearch = (e) => {
//   const searchText = e.target.value.toLowerCase();
//   setSearchText(searchText);

//   const filteredList = listOfRestaurant.filter((restaurant) =>
//     restaurant.info.name.toLowerCase().includes(searchText)
//   );

//   setfilterRestaurant(filteredList);
// };

//   const onlineStatus = useOnlineStatus();

//   if (onlineStatus === false) {
//     return (
//       <h1>
//         It seems like You're Offline !!! Please check your Internet connection
//       </h1>
//     );
//   }

//   return (
//     <div className="body">
//       <div className="modify flex justify-around py-5">
//         <div className="search flex justify-center items-center">
//           <input
//             className="border border-solid border-black rounded-lg w-64 py-1"
//             type="text"
//             placeholder="Search for restaurants..."
//             value={searchTxt}
//             onChange={filterBySearch}
//           />
//           <button className="search-btn px-3 py-1 ml-4 rounded-full bg-blue-400  hover:bg-blue-600	text-white shadow-lg">
//             Search
//           </button>
//         </div>
//         <div className="filter flex justify-center items-center">
//           <button
//             className="bg-blue-400 hover:bg-blue-600 text-white rounded-lg p-2 mx-2 shadow-lg"
//             // onClick={eventHandler}
//           >
//             Top Ratings restaurant
//           </button>
//         </div>
//       </div>
//       <div className="res-container flex justify-center items-center p-6 flex-wrap">
//         {filterRestaurant.map((restaurant) => (
//           <Link
//             className="res-card-link"
//             key={restaurant.info.id}
//             to={"/restaurant/" + restaurant.info.id}
//           >
//             {restaurant.info.isOpen === true ? (
//               <RestaurantCardOpened resData={restaurant} />
//             ) : (
//               <RestaurantCard resData={restaurant} />
//             )}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;
