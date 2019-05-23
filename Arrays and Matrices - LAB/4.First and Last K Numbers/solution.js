function solve(array) {
  let firstKElements = [];
  let lastKElements = [];

  for (let i = 1; i < array.length; i++) {
    if (firstKElements.length === array[0]) {
      break;
    }

    firstKElements.push(array[i]);
  }

  for (let i = array.length - 1; i >= 0; i--) {
    if (lastKElements.length === array[0]) {
      break;
    }

    lastKElements.unshift(array[i]);
  }

  console.log(firstKElements);
  console.log(lastKElements);
}

solve([3, 6, 7, 8, 9]);
