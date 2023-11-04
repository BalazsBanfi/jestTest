import analyzeArray from "./analyzeArray";

test('Array of numbers', () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 6, 7])).toEqual({
      average: 4,
      min: 1,
      max: 7,
      length: 7,
    });
  });