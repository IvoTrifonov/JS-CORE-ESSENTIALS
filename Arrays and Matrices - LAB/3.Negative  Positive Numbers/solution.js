function solve(array) {
    let result = [];
    Array.from(array).forEach((num) => {
        +num < 0 ? result.unshift(num) : result.push(num);
    });

    console.log(result.join("\n"));
}

solve([3, -2, 0, -1]);