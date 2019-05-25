function solve(input) {
    let result = Array.from(input).sort((a, b) => {
        return a.length - b.length ||  a.localeCompare(b);;
    });

    console.log(result.join("\n"));
}

solve(['test', 
'Deny', 
'omen', 
'Default']);