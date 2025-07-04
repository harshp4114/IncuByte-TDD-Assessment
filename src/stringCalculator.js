function add(numbers) {
  if (numbers == "") return 0;
  const sanitized=numbers.replace(/\n/g,",");
  const values = sanitized.split(",");
  return values.reduce((sum, num) => sum + Number(num), 0);
}

module.exports = add;