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
  test("Single number returns the number itself", () => {
    expect(add("1")).toBe(1);
  });

  // Test for addition of two numbers
  test("Two numbers comma separated returns their sum", () => {
    expect(add("1,5")).toBe(6);
  });

  // Test for addition of multiple numbers
  test("Multiple numbers comma separated returns their sum", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  // Test for addition of numbers separated by commas or newlines
  test("Numbers separated by commas or newlines returns their sum", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  // Test for addition of numbers with custom delimiters preceded by '//'
  test("Numbers with custom delimiter returns their sum", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  // Test for addition of numbers containing negative numbers
  test("Negative numbers throw an error",()=>{
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
  })
});
