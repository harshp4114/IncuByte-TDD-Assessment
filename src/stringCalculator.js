function add(numbers) {
  if (numbers == "") return 0;
  const values = numbers.split(",");
  return values.reduce((sum, num) => sum + Number(num), 0);
}

module.exports = add;
