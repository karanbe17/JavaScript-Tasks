let prices: number[] = [1, 2, 3, 4, 5];

function calculateTotal (arr: number[]): number {
    return arr.reduce((acc: number, value: number) => {
        return acc+=value;
    }, 0);
}

console.log(calculateTotal(prices));


function checkLimit (a: number, b: number): string | number {
    if (a+b>=100) {
        return "Greater than 100";
    } else {
        return a + b;
    }
}

console.log(checkLimit(60, 40));