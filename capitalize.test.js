import capitalize from "./capitalize";

test('"firsttest" should become "Firsttest"', () => {
  expect(capitalize("firsttest")).toBe("Firsttest");
});

test('"Secondtest" should become "Secondtest"', () => {
  expect(capitalize("test")).toBe("Test");
});

test('"THIRDTEST" should become "THIRDTEST"', () => {
  expect(capitalize("THIRDTEST")).toBe("THIRDTEST");
});

test('"test 0041543kpok öö9" should become "Test 0041543kpok öö9"', () => {
  expect(capitalize("test 0041543kpok öö9")).toBe("Test 0041543kpok öö9");
});

test('"123" should become "123"', () => {
  expect(capitalize("123")).toBe("123");
});
