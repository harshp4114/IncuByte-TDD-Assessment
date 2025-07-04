const add = require("../src/stringCalculator");

// Test Suite for Jest functionality
describe("Jest Working Test Suite", () => {
  test("Jest is working", () => {
    expect(1).toBe(1);
  });
});

// Test Suite for String Calculator
describe("String Calculator Test Suite", () => {
  // Test for empty string  
  test("Empty string returns 0", () => {
    expect(add("")).toBe(0);
  });

  // Test for single number addition
  test("Single number returns the number itself",()=>{
    expect(add("1")).toBe(1);
  })
});
