function solve(array) {
    let result = Array.from(array).filter((el, i) => {
        if (i % 2 === 0) {
            return el;
        }
     });

    console.log(result.join(" "));
}

solve(['5', '10']);