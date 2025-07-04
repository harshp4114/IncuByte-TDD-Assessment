function getDelimiterAndNumbers(input) {
  if (input.startsWith("//")) {
    const match = input.match(/^\/\/(.)\n(.*)$/);
    if (match) {
      const delimiter = new RegExp(`[${match[1]}]`);
      const numbers = match[2];
      return { delimiter, numbers };
    }
  }
  return { delimiter: /[,\n]/, numbers: input };
}

function add(numbers) {
  if (numbers === "") return 0;

  const { delimiter, numbers: sanitized } = getDelimiterAndNumbers(numbers);
  const values = sanitized.split(delimiter);

  return values.reduce((sum, num) => sum + Number(num), 0);
}

module.exports = add;
