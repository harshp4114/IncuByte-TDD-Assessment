function getDelimiterAndNumbers(input) {
  if (input.startsWith("//[")) {
    const match = input.match(/^\/\/\[(.+)\]\n(.*)$/);
    if (match) {
      const delimiter = match[1];
      const numbers = match[2];
      return { delimiter, numbers };
    }
  } else {
    const match = input.match(/^\/\/(.)\n(.*)$/);
    if (match) {
      const delimiter = new RegExp(`[${match[1]}]`);
      const numbers = match[2];
      return { delimiter, numbers };
    }
  }
  return { delimiter: /[,\n]/, numbers: input };
}

function checkForNegatives(numbers) {
  const negatives = numbers.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
  }
}

function add(numbers) {
  if (numbers === "") return 0;

  const { delimiter, numbers: sanitized } = getDelimiterAndNumbers(numbers);
  const values = sanitized.split(delimiter).map((num) => Number(num));

  checkForNegatives(values);

  return values.reduce((sum, num) => {
    if (num > 1000) return sum + 0;
    return sum + num;
  }, 0);
}

module.exports = add;
