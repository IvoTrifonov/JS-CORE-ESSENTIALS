function solve(input) {
    let step = input.pop();
    let result = Array.from(input).filter((n, i) => {
        if (i % step === 0) {
            return n;
        }
    });

    console.log(result.join("\n"));
}

solve(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
)