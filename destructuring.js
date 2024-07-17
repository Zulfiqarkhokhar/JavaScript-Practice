const obj = {
  name: "Ali",
  age: 24,
  id: "023-20-0063",
  city: "Karachi",
};

// object destructure

let { name, age, city } = obj;

console.log(name);
console.log(age);
console.log(city);

// array destructure

let numbers = [1, 2, 3, 4];

let [first, second, , fourth] = numbers;

console.log(first);
console.log(second);
console.log(fourth);
