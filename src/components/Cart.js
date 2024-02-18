import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const disPatch = useDispatch();

  const clearCartHandle = () => {
    disPatch(clearItem());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className=" p-2 m-2 bg-black text-white rounded-lg"
          onClick={clearCartHandle}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="text-5xl font-bold flex justify-center items-center">
            Cart is empty. Add Items to the cart!
          </h1>
        )}
        <Itemlist items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
