function makeFunctionArray() {
  const arr = []

  for (var i = 0; i < 5; i++) {
    arr.push((function(x) { return function() {console.log(i)}
  })(i))
  }
  return arr
}

const functionArr = makeFunctionArray()

console.log(functionArr);

functionArr[0]()
