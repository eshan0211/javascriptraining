const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// const total = numbers.reduce((total, price) => total + price);
// console.log(total);

Array.prototype.preduce = function (cb, initial) {
  let total = initial;
  //console.log(this[0]);
  for (let i = 0; i < this.length; i++) {
    if (total) {
      total = cb(total, this[i]);
    } else {
      total = this[i];
    }
  }
  return total;
};

const totalP = numbers.preduce((total, price) => total * price);

console.log(totalP);
