import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contactus from "./components/Contactus.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Grocery from "./components/Grocery.js";
import Usercontext from "./utils/Usercontext.js";
import Cart from "./components/Cart.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

const Applayout = () => {
  const [userName, setUserName] = useState();

  //authentication logic

  useEffect(() => {
    //we will make an api call
    const data = {
      name: "MS Dhoni",
    };

    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <Usercontext.Provider value={{ loggedInUser: userName }}>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </Usercontext.Provider>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: <Grocery />,
      },
      {
        path: "/restaurnat/:id",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

//heading is the object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
