function add(numbers) {
  if (numbers == "") return 0;
  let delimiter = /\n|,/;
  if (numbers.startsWith("//")) {
    const match = numbers.match(/^\/\/(.)\n(.*)$/);
    if (match) {
      const customDelimiter = match[1];
      delimiter = new RegExp(`[${customDelimiter}]`);
      numbers = match[2];
    }
  }
  const values = numbers.split(delimiter);
  return values.reduce((sum, num) => sum + Number(num), 0);
}

module.exports = add;
