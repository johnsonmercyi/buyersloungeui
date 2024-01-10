const calcType = {
  SUM: 'sum',
  SUBTRACT: 'subtract',
  MULTIPLY: 'multiply',
  DIVIDE: 'divide'
}

function calculate(type, nums, callback) {
  let result = 0;
  let count = 0;
  for (const num of nums) {
    if (type === calcType.SUM) {
      result += num;
    } else {
      // This runs only in the first loop
      if (count === 0) {
        result = num;
        count++;
        continue;
      }

      if (type === calcType.SUBTRACT) {
        result -= num;
      } else if (type === calcType.DIVIDE) {
        result /= num;
      } else if (type === calcType.MULTIPLY) {
        result *= num;
      }
    }
    count++;
  }

  callback(result);
}

calculate(calcType.SUM, [2, 10, 4, 5, 6, 9], (result) => {
  console.log("RESULT: ", result);
});