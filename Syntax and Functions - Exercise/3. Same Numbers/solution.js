function solve(num) {
    let array = num.toString().split("");
    let isEqual = false;

    for (let i = 0; i < array.length; i++) {
        if(array[i] === array[0]){
            isEqual = true;
        }
        else{
            isEqual = false;
            break;
        }
    }

    console.log(isEqual);

    let sum = 0;
    array.forEach((n) => {sum += Number(n)})
    console.log(sum);
}

solve(4234);