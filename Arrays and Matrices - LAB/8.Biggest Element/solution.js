function solve(input) {
    let result = -Number.MAX_VALUE;

    let matrix = Array.from(input).forEach((arr) => {
        arr.forEach((n) => {
           if (result < n) {
               result = n
           }
        });
    });

    console.log(result);
}

solve([[-1, -2, -100], [-200, -11, -12]]);
solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);