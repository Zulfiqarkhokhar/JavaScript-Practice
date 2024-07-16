// closure bined the lexical environment of outer function give access to it

function printName() {
  let name = "Zulfiqar";
  function x() {
    console.log(name);
  }
  name = "Yasir"; // output
  return x;
}

let a = printName();
a();

function printNumber() {
  let b = 1;
  let x = () => {
    b = 2;
    console.log(b);
    let y = () => {
      console.log(b);
      let z = () => {
        console.log(b);
      };
      z();
    };
    y();
  };
  b = 99;
  return x;
}

let c = printNumber();
c();
