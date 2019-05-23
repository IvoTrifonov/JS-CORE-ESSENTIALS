function solve(n, k) {
    let result = [1];
    let looping = 0;

    for (let i = 1; i < n; i++) {
        let currentNumber = 0;
        i > k ? looping = i - k : looping = 0;
        
        for (let j = looping; j < result.length; j++) {
            currentNumber += result[j];
        }
        
        result.push(currentNumber);
    }

    console.log(result);
}

solve(8, 2);