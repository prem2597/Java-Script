// Immediately invoked Function expression

const sayHello = (console.log('Hi'));

console.log(sayHello);

// same in the form of function

const sayHello2 = (function() {
  console.log('Hi');
})();

console.log(sayHello2);

// some more examples

const sayHello3 = (function() {
  var message = "Hi!";
  function sayHello3() {
    console.log(message);
    // return "I am the return value"
  }
  function sayHi() {
    console.log("second function object");
    return "I am the return value"
  }
  return sayHello3
})();

console.log(sayHello3());
