function solve(input) {
    let result = [];
    let commands = Array.from(input).forEach((command, i) => {
        if (command === "add") {
            result.push(++i);
        }else {
            result.pop();
        }
    });

    console.log(result.length === 0 ? "Empty" : result.join("\n"));
}

solve(['add', 
'add', 
'remove', 
'add', 
'add'])