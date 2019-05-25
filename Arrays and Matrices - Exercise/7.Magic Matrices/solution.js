function solve(input) {
    let matrix = Array.from(input);
    let sums = [];
    let isMagic = false;
    
    for (let row = 0; row < matrix.length; row++) {
        let rowSum = 0
        let colSum = 0;

        for (let col = 0; col < matrix[row].length; col++) {
            rowSum += matrix[row][col];
            try {
                colSum += matrix[col][row];    
            } catch (error) {
                    
            }
        }

        if (rowSum === colSum && sums.includes(rowSum)) {
            sums.push(rowSum);
            isMagic = true;
        }else {
            isMagic = false;
            break;
        }
    }
    
    console.log(isMagic);
}

solve([[1, 0, 0],
    [0, 0, 11, 1],
    [0, 1, 0]]
   );