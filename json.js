// json parsing

var jsonString = '{"name": "John", "age": 30, "city": "New York"}';
var jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name);
console.log(jsonObject.age);
console.log(jsonObject.city);

// json stringfy

var jsObject = {
  name: "John",
  age: 30,
  city: "New York",
};

var jsonString = JSON.stringify(jsObject);

console.log(jsonString);

// json handling

fetch("https://api.example.com/data")
  .then((response) => response.json()) // Parse the JSON from the response
  .then((data) => {
    console.log(data); // Handle the parsed JSON data
  })
  .catch((error) => {
    console.error("Error:", error);
  });
