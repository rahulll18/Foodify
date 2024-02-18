import { useState } from "react";
import Itemlist from "./Itemlist";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);

  const { title, itemCards } = data;

  const handleClick = () => {
    setShowIndex();
    // setShowItems(!showItems);
    // console.log("button clicked");
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer">
      {/* Accordian Header */}
      <div
        className="flex justify-between items-center p-1"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {title} ({itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <Itemlist items={data.itemCards} />}
      {/* Accordian Body */}
    </div>
  );
};
export default RestaurantCategory;
