// Promises

let promise = new Promise(function (res, rej) {
  console.log("Hello this is Promise");

  let a = 3;

  if (a === 3) {
    res("Success");
  } else {
    rej("Failed");
  }
});

promise
  .then((message) => {
    console.log("This in then " + message);
  })
  .catch((message) => {
    console.log("This in catch " + message);
  });

// asyn await

function catSound() {
  let sound = "meow";
  return new Promise((res, rej) => {
    if (sound === "meow") {
      res("Cat Makes sound");
    } else {
      rej("Cat is silend");
    }
  });
}

async function animalSound() {
  const result = await catSound();
  console.log(result);
}

animalSound();
