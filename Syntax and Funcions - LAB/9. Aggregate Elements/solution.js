function solve(array) {
    let sum = 0;
    let inverseValuesSum = 0;
    let concatResult = "";

    array.forEach((num) => {
        sum += num
        inverseValuesSum += 1 / num;
        concatResult += num;
    });

    console.log(sum);
    console.log(inverseValuesSum);
    console.log(concatResult);
}

solve([1,2,3]);