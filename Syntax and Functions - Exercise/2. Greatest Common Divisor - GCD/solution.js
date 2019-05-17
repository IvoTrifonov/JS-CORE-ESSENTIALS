function solve(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    let greatestDivisor = 0;

    for (let i = 1; i <= Math.min(num1, num2); i++) {
        if(num1 % i === 0 && num2 % i === 0){
            greatestDivisor = i;
        }
    }

    console.log(greatestDivisor);
}

solve(2154, 458);