function solve(input) {
    let result = Array.from(input).sort((a, b) => {
        return +a - +b;
    });

    console.log(result.splice(0, 2).join(" "));
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);