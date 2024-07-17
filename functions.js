//Pure functions

function sum(a, b) {
  return a + b;
}

console.log(sum(10, 10));

// immediately inviked functions

(function (a, b) {
  var sum = a + b;
  console.log("The sum of", a, "and", b, "is:", sum);
})(3, 5);
