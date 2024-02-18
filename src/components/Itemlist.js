import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Itemlist = ({ items }) => {
  const disPatch = useDispatch();

  const handleAddItem = (item) => {
    //dispath the action
    disPatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between border-gray-200 border-b-2 p-2"
        >
          <div className="left flex flex-col max-w-xl	">
            <div className="mt-1 font-semibold">{item.card.info.name}</div>
            <div className="my-1">
              ₹{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </div>
            <p className="my-2 text-xs">{item.card.info.description}</p>
          </div>
          <div className="right w-28 h-28 flex flex-col justify-center items-center">
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                item.card.info.imageId
              }
              className="w-full h-24"
            />
            <button
              className="px-4 my-2 bg-white  text-green-400 hover:border border-solid border-green-400 shadow-xl"
              onClick={() => {
                handleAddItem(item);
              }}
            >
              ADD +
            </button>
          </div>
        </div>
      ))}
      {/* <div className="left">
        <h2>{name}</h2>
        <h2>{price}</h2>
        <h2>{description}</h2>
      </div>
      <div className="right"></div> */}
    </div>
  );
};

export default Itemlist;
