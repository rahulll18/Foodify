import { render, screen } from "@testing-library/react";
import RestaurantCard from "../ResCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render resCard with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Chinese Wok");

  expect(name).toBeInTheDocument();
});

// it("Should render resCard with props data", () => {
//   const { getByText } = render(
//     <WithOpenLabel RestaurantCard={MockRestaurantCard} isOpen={true} />
//   );

//   // Assert that the "OPEN" label is present in the rendered output
//   const openLabel = getByText("OPEN");
//   expect(openLabel).toBeInTheDocument();
// });
