import { Sum } from "../Sum";

test("Sum Function should calculate the sum of two numbers ", () => {
  const result = Sum(5, 5);

  expect(result).toBe(10);
});
