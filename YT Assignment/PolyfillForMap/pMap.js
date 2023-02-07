const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// const doubles = numbers.map(function (num) {
//   return num * 2;
// });

// console.log(doubles);

Array.prototype.pmap = function (cb) {
  let newarr = [];
  //console.log(this[0]);
  for (let i = 0; i < this.length; i++) {
    newarr.push(cb(this[i]));
  }
  return newarr;
};

const doublesP = numbers.pmap((num) => num * 2);

console.log(doublesP);
