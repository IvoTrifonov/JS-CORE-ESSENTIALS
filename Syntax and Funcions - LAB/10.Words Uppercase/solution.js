function solve(input) {
    let result = "";

    for (let i = 0; i < input.length; i++) {
        if (input[i].match(/\w+/)){
            result += input[i].toUpperCase();
        }
        else {
            if(input[i + 1] !== " " && i !== input.length - 1){
                result += " ";
            }
        }
    }

    console.log(result.split(" ").join(", "))
}

solve("Hi, how are you?");