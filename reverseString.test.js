import reverseString from "./reverseString";

test('"firsttest" should become "tsettsriF"', () => {
  expect(reverseString("firsttest")).toBe("tsettsrif");
});

test('"Secondtest" should become "tsetdnoceS"', () => {
  expect(reverseString("Secondtest")).toBe("tsetdnoceS");
});

test('"THIRDTEST" should become "TSETDRIHT"', () => {
  expect(reverseString("THIRDTEST")).toBe("TSETDRIHT");
});

test('"1234" should become "4321"', () => {
  expect(reverseString("1234")).toBe("4321");
});

test('"123" should become "321"', () => {
  expect(reverseString("123")).toBe("321");
});
