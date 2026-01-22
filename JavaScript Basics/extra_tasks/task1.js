number = [1, 2, 3, 4, 5];

function sum(...number){
    return number.reduce((acc, value) => acc+=value);
}

console.log(sum(1, 2));

