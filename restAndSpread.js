// Spread

function sum(x, y, z) {
  return x + y + z;
}

let arr = [3, 4, 5];

console.log(sum(...arr));

// rest

function printEven(...numbers) {
  return numbers.filter((n) => {
    if (n % 2 === 0) {
      return n;
    }
  });
}

console.log(printEven(2, 3, 4, 5, 6, 7, 8, 9));
