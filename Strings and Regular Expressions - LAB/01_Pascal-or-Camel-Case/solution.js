function solve() {
    let text = document.getElementById("text");
    let namingConvention = document.getElementById("naming-convention");
    let result = document.getElementById("result");

    if (namingConvention.value === "Camel Case" || namingConvention.value === "Pascal Case") {
        let convertedText = text.value.split(" ").map((word) => {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        }).join("");

        if (namingConvention.value === "Camel Case") {
            convertedText = convertedText[0].toLowerCase() + convertedText.slice(1);
        }

        result.textContent = convertedText;
        
    } else {
        result.textContent = "Error!";
    }
}