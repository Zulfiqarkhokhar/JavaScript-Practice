console.log("Higher Order Functions");

setTimeout(() => {
  console.log("This is after 2 second");
}, 2000);

let names = ["sajid", "saleem", "zulfiqar", "yasir", "ameer", "shoaib"];

let filterdNames = names.filter((n) => {
  if (n[0] === "s") {
    return n;
  }
});

console.log(filterdNames);
