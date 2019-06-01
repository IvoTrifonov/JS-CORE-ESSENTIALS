function solve() {
	let input = document.getElementById("input").value;
	let sum = [...input].filter(n => n === "1").length.toString();

	let elementsToRemove = getElementsToRemove(sum);
	let slicedInput = input.slice(elementsToRemove, input.length - elementsToRemove);
	
	let output = slicedInput
	.split(/([\d]{8})/g)
	.filter(el => el)
	.map(el => convertBinary(el))
	.filter(el => /[a-zA-Z ]+/g.test(el))
	.join("");

	function convertBinary(binary) {
		let convetedNumber = parseInt(binary, 2);
		let char = String.fromCharCode(+convetedNumber);
		return char;
	}

	function getElementsToRemove(sum) {
		let [left, right] = [+sum[0], +sum[1]] 
		let result = left + right;

		while(result > 9) {
			left = result.toString()[0];
			right = result.toString()[1];

			result = +left + +right;
		}

		return result;
	}

	document.getElementById("resultOutput").textContent = output;
}