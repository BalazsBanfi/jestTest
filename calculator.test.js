import calculator from "./calculator";

test('"add(2 + 5) = 7"', () => {
  expect(calculator.add(2, 5)).toBe(7);
});
