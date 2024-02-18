import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const logInButton = screen.getByText("Login");
  const logInButton = screen.getByRole("button");
  //Assertion
  expect(logInButton).toBeInTheDocument();
});

it("Should render header component with a cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart (0)");

  //assertion
  expect(cartItems).toBeInTheDocument();
});

it("Should change to logOut onclick", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logInButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(logInButton);

  const logOutButton = screen.getByRole("button", { name: "Logout" });

  expect(logOutButton).toBeInTheDocument();
});
