function solve() {
    let possibleOperators = ["+", "-", "x", "/"];
    let expressionOutput = document.getElementById("expressionOutput");
    let buttons = Array.from(document.getElementsByTagName("button")).slice(1);
    let resultOutput = document.getElementById("resultOutput");

    buttons.forEach((button) => {
        button.addEventListener("click", appendValueToOutput);
    });

    function appendValueToOutput() {
        let valueFromButton = this.textContent;

        if (valueFromButton === "=") {
            let expressionParts = expressionOutput.textContent.split(" ").filter(Boolean);
            let [firstOperand, operator, secondOperand] = [Number(expressionParts[0]), expressionParts[1],Number(expressionParts[2])];
            
            if (typeof(firstOperand) === "number" && typeof(secondOperand) === "number"
             && possibleOperators.includes(operator)) {
                resultOutput.textContent = calculate(firstOperand, operator, secondOperand);
                return;
            }
            resultOutput.textContent = "NaN"
        }

        possibleOperators.includes(valueFromButton) ? expressionOutput.textContent += " " + valueFromButton + " " : expressionOutput.textContent += valueFromButton;
        
    }

    let clear = document.getElementsByClassName("clear")[0];
    clear.addEventListener("click", () => {
        expressionOutput.textContent = "";
        resultOutput.textContent = "";
    });

    function calculate(firstOperand, operator, secondOperand) {
        let res = 0;
        operator === "+" ? res = firstOperand + secondOperand : 
        operator === "-" ? res = firstOperand - secondOperand : 
        operator === "/" ? res = firstOperand / secondOperand : 
        operator === "x" ? res = firstOperand * secondOperand : 0;

        return res;
    }
}