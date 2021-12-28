
const stringCalculator = (string) => {
  // Convert string into an array of int numbers
  // Each iteration of arrayOfInt is passed to Number() method
  const arrayOfInt =  string.split(',').map(Number);
  // Sum of array elements
  // Each element is summed to previous accumulation (sum)
  const sum = arrayOfInt.reduce( (acc, curr) => acc + curr );
  
  return sum;
}

console.log(stringCalculator("")); // 0
console.log(stringCalculator("1")); // 1
console.log(stringCalculator("1,5")); // 6
