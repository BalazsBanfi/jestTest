import calculator from "./calculator";

test('"add(2 + 5) = 7"', () => {
  expect(calculator.add(2, 5)).toBe(7);
});

test('"add(241 + 55567) = 55808"', () => {
  expect(calculator.add(241, 55567)).toBe(55808);
});

test('"subtract(12 - 5) = 7"', () => {
  expect(calculator.subtract(12, 5)).toBe(7);
});

test('"subtract(619 - 427) = 192"', () => {
  expect(calculator.subtract(619, 427)).toBe(192);
});

test('"divide(36 / 3) = 12"', () => {
  expect(calculator.divide(36, 3)).toBe(12);
});

test('"divide(1260 / 6) = 210"', () => {
  expect(calculator.divide(1260, 6)).toBe(210);
});

test('"divide(5 / 2) = 2.5"', () => {
  expect(calculator.divide(5, 2)).toBe(2.5);
});

test('"multiply(5 * 21) = 105"', () => {
  expect(calculator.multiply(5, 21)).toBe(105);
});

test('"multiply(1251 * 39) = 48789"', () => {
  expect(calculator.multiply(1251, 39)).toBe(48789);
});

test('"add("1251" * 39) = 48789"', () => {
  expect(calculator.add("1251", 39)).toBe("a or b is not a number");
});

test('"subtract("Hohoh" * "FUNGU") = number??"', () => {
  expect(calculator.add("Hohoh", "FUNGU")).toBe("a or b is not a number");
});

test('"divide("ŁđĐŁđŁ" / "9999") = number??"', () => {
  expect(calculator.divide("ŁđĐŁđŁ", 9999)).toBe("a or b is not a number");
});

test('"multiply("lll" * 2) = number??"', () => {
  expect(calculator.multiply("lll", 2)).toBe("a or b is not a number");
});
