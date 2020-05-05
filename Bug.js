function makeFunctionArray() {
  const arr = []
  arr.length = 3;

  console.log("length",arr.length);
  for (var i = 0; i <= 5; i++) {
    arr.push(function() { console.log(i) })
  }
  return arr
}

const functionArr = makeFunctionArray()

console.log(functionArr);

// functionArr[0]()
