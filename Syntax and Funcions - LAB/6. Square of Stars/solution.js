function solve(size) {
    if (!size){
        size = 5;
    }

    for (let i = 0; i < size; i++) {
        console.log("* ".repeat(size));
    }
}

solve();