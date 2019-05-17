function  solve(num1,num2, operator) {
    num1 = Number(num1);
    num2 = Number(num2);
    let result = 0;

    let sum = (num1, num2) => {
        result = num1 + num2;
    };

    let subtract = (num1, num2) => {
        result = num1 - num2;
    };

    let multiply = (num1, num2) => {
        result = num1 * num2;
    };

    let divide = (num1, num2) => {
        result = num1 / num2;
    };

    let divisionWithRem = (num1, num2) => {
        result = num1 % num2;
    };

    let degree = (num1, num2) => {
        result = num1 ** num2;
    };

    switch (operator) {
        case "+":
            sum(num1,num2);
            break;
        case "-":
            subtract(num1,num2);
            break;
        case "*":
            multiply(num1,num2);
            break;
        case "/":
            divide(num1,num2);
            break;
        case "%":
            divisionWithRem(num1,num2);
            break;
        case "**":
            degree(num1,num2);
            break;
        default:
            break;
    }

    console.log(result);
}


solve(2, 4, '+');