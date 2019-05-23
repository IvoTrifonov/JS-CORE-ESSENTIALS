function solve(input) {
    let result = Array.from(input).map((n, i) =>{
        if (i % 2 != 0)
        return n * 2
    
    }).reverse();

    console.log(result.join(" "))
}

solve([10, 15, 20, 25]);