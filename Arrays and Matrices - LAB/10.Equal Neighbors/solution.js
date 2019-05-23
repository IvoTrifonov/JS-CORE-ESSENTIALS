function solve(input) {
    let matrix = Array.from(input);
    let result = 0;

    for (let row = 0; row < matrix.length; row++) {
        
        for (let col = 0; col < matrix[row].length; col++) {
            let currentElement = matrix[row][col];

            checkElement(col + 1, matrix[row].length) && currentElement === matrix[row][col + 1] ? result++ : result;
            checkElement(col - 1, matrix[row].length) && currentElement === matrix[row][col - 1] ? result++ : result;
            checkElement(row + 1, matrix.length) && currentElement === matrix[row + 1][col] ? result++ : result;
            checkElement(row - 1, matrix.length) && currentElement === matrix[row - 1][col] ? result++ : result;
        }
    }

    console.log(result / 2);

    function checkElement(position, lenght) {
        return position >= 0 && position <= lenght - 1;
    }
}

solve([ [2, 2, 5, 7, 4],
        [4, 0, 5, 3, 4],
        [2, 5, 5, 4, 2]]);