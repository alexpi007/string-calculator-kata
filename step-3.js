 function add(string) {
  // 1. String separators matched by regex are , and \n
  // 2. Each splitted element of the new array is converted into an int number
  const arrayOfInt =  string.split(/[,\n]/g).map(Number);

  // 3. Each element is summed to previous accumulation (sum)
  const sum = arrayOfInt.reduce( (acc, curr) => acc + curr );
  
  // 4. Result
  return sum;
}

console.log(add("")); // 0
console.log(add("1")); // 1
console.log(add("1,4\n2,3")); // 10
console.log(add("1,\n")) // 1

