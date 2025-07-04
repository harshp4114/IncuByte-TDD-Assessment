function add(numbers){
    if(numbers=="")return 0;
    if(numbers.length==1)return Number(numbers);
    const parts= numbers.split(",");
    let sum = 0;
    for(let i=0; i<parts.length; i++){
        sum += Number(parts[i]);
    }
    return sum;
}

module.exports = add;