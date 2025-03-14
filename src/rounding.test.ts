import { roundTo } from "./rounding";

test("check round to nickels", () => {
  expect(roundTo(10.0 / 3.0, 0.05)).toBe(3.33);
});

test("check round to nickels", () => {
  expect(roundTo(10.0 / 2.0, 0.05)).toBe(5);
});

test("check round to nickels", () => {
  expect(roundTo(10.0 / 1, 0.05)).toBe(10);
});