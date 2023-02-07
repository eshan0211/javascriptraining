const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// const total = numbers.reduce((total, price) => total + price);
// console.log(total);

Array.prototype.preduce = function (sum) {
  sum = 0;
  //console.log(this[0]);
  for (let i = 0; i < this.length; i++) {
    sum = sum + this[i];
  }
  return sum;
};

const totalP = numbers.preduce((total, price) => total + price);

console.log(totalP);
