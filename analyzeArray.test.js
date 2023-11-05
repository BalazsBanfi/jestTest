import analyzeArray from "./analyzeArray";

test("Array of numbers [1, 2, 3, 4, 5, 6, 7]", () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7])).toEqual({
    average: 4,
    min: 1,
    max: 7,
    length: 7,
  });
});

test("Array of bigger and negativ numbers", () => {
  expect(analyzeArray([-617, 0, 35441, 668911, -6442367, 7])).toEqual({
    average: -956437.5,
    min: -6442367,
    max: 668911,
    length: 6,
  });
});

test("Array with same numbers", () => {
  expect(analyzeArray([-200, -100, -200, 55, 55, 55, 48])).toEqual({
    average: -41,
    min: -200,
    max: 55,
    length: 7,
  });
});

test("Array with some not numbers", () => {
  expect(analyzeArray(["aaa", -100, "-200", 55, "55", 55, 53])).toEqual(
    "This is not a real array or there are in some not a number element"
  );
});

test("Empty array", () => {
  expect(analyzeArray([])).toEqual(
    "This is not a real array or there are in some not a number element"
  );
});

test("Not an array", () => {
  expect(analyzeArray('FunFun')).toEqual(
    "This is not a real array or there are in some not a number element"
  );
});

test("Not an array", () => {
  expect(analyzeArray(1234)).toEqual(
    "This is not a real array or there are in some not a number element"
  );
});


test("Not an array", () => {
  expect(analyzeArray({1: 'aaa', 2: 'bbb'})).toEqual(
    "This is not a real array or there are in some not a number element"
  );
});
