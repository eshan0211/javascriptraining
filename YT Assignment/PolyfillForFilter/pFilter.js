const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// const fnumbers = numbers.filter((num) => num <= 15);

// console.log(fnumbers);

Array.prototype.myfilter = function (cb) {
  let newarr = [];
  //console.log(this[0]);
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      newarr.push(this[i]);
    }
  }
  return newarr;
};

const fnumbers = numbers.myfilter((num) => num <= 14);

console.log(fnumbers);
