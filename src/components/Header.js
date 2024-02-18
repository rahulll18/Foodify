import React, { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/Usercontext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using a selector
  const cartItemsCount = useSelector((store) => store.cart.items);
  console.log(cartItemsCount);

  return (
    <div className="flex justify-between 	 bg-cyan-200 shadow-lg w-full">
      <div className="logo-container mx-2 my-2 w-28">
        <img src={LOGO_URL} alt="Logo" className="w-full" />
      </div>
      <div className="nav-items flex justify-center items-center	">
        <ul className="flex justify-center items-center	 py-0 px-2">
          <li className=" py-0 px-2 mx-4 flex text-lg font-semibold hover:underline underline-offset-8">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className=" py-0 px-2 mx-4 flex text-lg font-semibold	hover:underline underline-offset-8">
            <Link className="link" to="/contactus">
              Contact Us
            </Link>
          </li>
          <li className=" py-0 px-2 mx-4 flex text-lg font-semibold	hover:underline underline-offset-8">
            <Link className="link" to="/about">
              About Us
            </Link>
          </li>
          <li className=" py-0 px-2 mx-4 flex text-lg font-semibold hover:underline underline-offset-8">
            <Link className="link" to="/cart">
              Cart ({cartItemsCount.length})
            </Link>
          </li>
          <button
            className="py-0 px-2 mx-4 flex text-lg font-semibold		hover:underline underline-offset-8"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>

          {/* <li className="py-0 px-2 mx-4 flex text-xl	">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
