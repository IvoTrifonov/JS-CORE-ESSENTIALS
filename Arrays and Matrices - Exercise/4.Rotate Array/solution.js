function solve(input) {
    let n = +input.pop();

    if (n != input.length) {
        n %= input.length;

        for (let i = 0; i < n; i++) {
            input.unshift(input[input.length - 1]);
            input.pop();
        }
    }
    
    console.log(input.join(" "))
}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']

);