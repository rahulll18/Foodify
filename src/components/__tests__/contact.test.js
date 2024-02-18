import Contactus from "../Contactus";
import { getAllByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us Page test cases", () => {
  test("should load contact page or not ", () => {
    render(<Contactus />);

    const heading = screen.getByRole("heading");

    //Asserion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact page ", () => {
    render(<Contactus />);

    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load input with placeholder text name", () => {
    render(<Contactus />);

    const inputName = screen.getByPlaceholderText("Enter Your Name");

    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Should load all input Boxes", () => {
    render(<Contactus />);

    const inputBoxes = screen.getAllByRole("textbox");

    // Assertion
    expect(inputBoxes.length).toBe(3);
  });
});
