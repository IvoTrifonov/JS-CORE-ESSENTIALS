function solve() {
    let pWord = document.createElement("p");
    let result = document.getElementById("result");
    let text = document.getElementById("text").value;

    text.split(" ").forEach((element) => {
        if (isNaN(element)) {
            let asciiNumbers = [...element].map((word) => {
                return word.charCodeAt(0);
            }).join(" ");
            
            let pNumber = document.createElement("p");
            pNumber.textContent = asciiNumbers;
            result.appendChild(pNumber);
            
        }else {
            pWord.textContent += String.fromCharCode(+element);
        }
    });
    
    result.appendChild(pWord);
}