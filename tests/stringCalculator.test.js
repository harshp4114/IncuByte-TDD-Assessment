const add = require("../src/stringCalculator");

describe("Jest Working Test Suite", () => {
  test("Jest is working", () => {
    expect(1).toBe(1);
  });
});

describe("String Calculator Test Suite", () => {
  test("Empty string returns 0", () => {
    expect(add("")).toBe(0);
  });
});
