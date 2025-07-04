function add(numbers){
    if(numbers=="")return 0;
    if(numbers.length==1)return Number(numbers);
    return Number(numbers[0]) + Number(numbers[2]);
}

module.exports = add;