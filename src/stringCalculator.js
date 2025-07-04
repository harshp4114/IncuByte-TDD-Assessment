/**
 * Parses the input string to extract custom delimiters and the number string.
 * Supports single-character, single custom, and multiple custom delimiters.
 */
function parseInput(input) {
  // Case: Multiple custom delimiters (e.g., //[***][%%]\n1***2%%3)
  if (
    input.startsWith("//[") &&
    input.slice(2, input.indexOf("]\n")).includes("][")
  ) {
    const delimiterSectionEnd = input.indexOf("]\n");
    const delimiterSection = input.slice(3, delimiterSectionEnd);
    const delimiters = delimiterSection.split("][");
    const numberString = input.slice(delimiterSectionEnd + 2);
    return { delimiter: delimiters, numberString };
  }

  // Case: Single custom delimiter (e.g., //[***]\n1***2)
  if (input.startsWith("//[")) {
    const delimiterSectionEnd = input.indexOf("]\n");
    const delimiter = input.slice(3, delimiterSectionEnd);
    const numberString = input.slice(delimiterSectionEnd + 2);
    return { delimiter, numberString };
  }

  // Case: Single character delimiter (e.g., //;\n1;2)
  if (input.startsWith("//")) {
    const delimiter = input[2];
    const numberString = input.slice(4);
    return { delimiter, numberString };
  }

  // Default case: use comma and newline as delimiters
  return { delimiter: null, numberString: input };
}

/**
 * Splits the number string using multiple custom delimiters.
 */
function splitByMultipleDelimiters(numberString, delimiters) {
  let normalizedString = numberString;
  for (let i = 0; i < delimiters.length; i++) {
    normalizedString = normalizedString.split(delimiters[i]).join(",");
  }
  return normalizedString.split(",");
}

/**
 * Splits the number string into individual parts based on the given delimiter(s).
 */
function splitNumberString(numberString, delimiter) {
  if (delimiter === null) {
    // Default case: split on comma and newline
    return numberString.split("\n").flatMap((segment) => segment.split(","));
  } else if (Array.isArray(delimiter)) {
    // Case: Multiple custom delimiters
    return splitByMultipleDelimiters(numberString, delimiter);
  } else {
    // Case: Single custom or single-character delimiter
    return numberString.split(delimiter);
  }
}

/**
 * Throws an error if the number array contains any negative numbers.
 */
function checkForNegatives(numbers) {
  const negativeNumbers = numbers.filter((n) => n < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(`negative numbers not allowed ${negativeNumbers.join(", ")}`);
  }
}

/**
 * Main function to add numbers from a string using optional custom delimiters.
 * Ignores numbers greater than 1000.
 */
function add(input) {
  if (input === "") return 0;

  const { delimiter, numberString } = parseInput(input);
  const numberParts = splitNumberString(numberString, delimiter);
  const numbers = numberParts.map((str) => Number(str.trim()));

  checkForNegatives(numbers);

  return numbers.reduce((total, num) => (num > 1000 ? total : total + num), 0);
}

module.exports = add;
