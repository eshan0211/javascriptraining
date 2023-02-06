let multiply = function (x, y) {
  console.log(x * y);
};
console.log(4);
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 2);
multiplyByThree(3);

// Using the closure property

let multiplyc = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyByTwoc = multiplyc(2);
multiplyByTwoc(10);

let multiplyByThreec = multiply.bind(this, 2);
multiplyByThreec(3);
