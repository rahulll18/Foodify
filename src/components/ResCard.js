import React, { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/Usercontext";

const RestaurantCard = (props) => {
  const { resData } = props;

  // const { loggedInUser } = useContext(UserContext);
  const { info } = resData;
  const {
    cloudinaryImageId,
    name,
    costForTwo,
    cuisines,
    avgRatingString,
    sla,
  } = info;
  const { deliveryTime } = sla;

  // console.log(props);  hover:bg-gray-200
  return (
    <div className="res-card w-[270px] h-[430px] p-2 m-3 bg-white shadow-2xl">
      <div className="flex justify-center items-center my-2">
        <img
          className="h-[200px] w-[230px] rounded-xl"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <h3 className="font-bold py-3 text-xl">{name}</h3>
      <h5 className="w-60 overflow-hidden overflow-ellipsis">
        {cuisines.join(",")}
      </h5>
      <h4 className="font-mono font-semibold">{costForTwo}</h4>
      <button className="px-1 bg-green-500 text-white">
        {avgRatingString} Stars
      </button>
      <h4>{deliveryTime} mins</h4>
      {/* <h4>User : {loggedInUser}</h4> */}
    </div>
  );
};

export default RestaurantCard;

//highter order component takes another component as an argument return with some feature
export const WithOpenLabel = (RestaurantCard) => {
  return (props) => {
    //return with some label feature

    // console.log(props);
    return (
      <div>
        <label className="absolute bg-green-100 text-black p-1 m-1">OPEN</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
