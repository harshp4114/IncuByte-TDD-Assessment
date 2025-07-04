function parseInput(input) {
  if (input.startsWith("//[")) {
    const end = input.indexOf("]\n");
    const delimiter = input.slice(3, end); 
    const numberString = input.slice(end + 2);
    return { delimiter, numberString };
  }

  if (input.startsWith("//")) {
    const delimiter = input[2];
    const numberString = input.slice(4);
    return { delimiter, numberString };
  }

  return { delimiter: null, numberString: input };
}

function splitNumbers(numberString, delimiter) {
  if (delimiter === null) {
    return numberString
      .split('\n')
      .flatMap(part => part.split(','));
  } else {
    return numberString.split(delimiter);
  }
}

function checkForNegatives(numbers) {
  const negatives = numbers.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(', ')}`);
  }
}

function add(input) {
  if (input === "") return 0;

  const { delimiter, numberString } = parseInput(input);
  const parts = splitNumbers(numberString, delimiter);
  const numbers = parts.map(n => Number(n.trim()));

  checkForNegatives(numbers);

  return numbers.reduce((sum, n) => n > 1000 ? sum : sum + n, 0);
}

module.exports = add;