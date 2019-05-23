function solve(input) {
    let matrix = Array.from(input);

    let firstDiagSum = 0;
    let secondDiagSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        firstDiagSum += matrix[i][i];
        secondDiagSum += matrix[i][matrix.length - 1 - i];
    }

    console.log(`${firstDiagSum} ${secondDiagSum}`);
}

solve([[20, 40], [10, 60]]);