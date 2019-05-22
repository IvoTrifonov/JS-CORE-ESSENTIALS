function solve() {
    let inputElement = document.getElementById("input");
    let selectMenu = document.getElementById("selectMenuTo");
    let resultElement = document.getElementById("result");

    let binaryOpton  = document.createElement("option");
    binaryOpton.value = "binary";
    binaryOpton.textContent = "Binary";

    let hexaOption = document.createElement("option");
    hexaOption.value = "hexadecimal";
    hexaOption.textContent = "Hexadecimal";

    selectMenu.removeChild(selectMenu.getElementsByTagName("option")[0]);
    selectMenu.appendChild(binaryOpton);
    selectMenu.appendChild(hexaOption);

    let button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", () => {
        let number = Number(inputElement.value);
       
        let toStringValue = selectMenu.value === 'binary' ? 2 : 16;
        resultElement.value = ((number).toString(toStringValue)).toUpperCase();
    });
}