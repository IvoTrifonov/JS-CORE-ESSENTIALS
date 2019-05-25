function solve(input) {
    let biggestNumber = -Number.MAX_VALUE;

    let result = Array.from(input).filter((n) => {
        if (n >= biggestNumber) {
            biggestNumber = n;
            console.log(n);
            return n;
        }
    });
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]);