// FOR LOOP
for (let num = 1; num <= 10; num += 1) {
  console.log(num);
}

// MORE EXAMPLES OF FOR LOOPS!

// for (let i = 1; i <= 20; i += 2) {
//     console.log(i)
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

// for (let i = 10; i <= 1000; i *= 10) {
//     console.log(i);
// }

// NESTED FOR LOOP EXAMPLES

for (let i = 1; i <= 10; i++) {
  console.log(`i is: ${i}`);
  for (let j = 1; j < 4; j++) {
    console.log(`     j is: ${j}`);
  }
}

// NESTED ARRAY ITERATION

const seatingChart = [
  ["Kristen", "Erik", "Namita"],
  ["Geoffrey", "Juanita", "Antonio", "Kevin"],
  ["Yuma", "Sakura", "Jack", "Erika"],
];

for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  console.log(`ROW #${i + 1}`);
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}

// FOR OF LOOP

const subreddits = [
  "cringe",
  "books",
  "chickens",
  "funny",
  "pics",
  "soccer",
  "gunners",
];

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

for (let subreddit of subreddits) {
  console.log(`Visit reddit.com/r/${subreddit}`);
}

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }

// for (let char of "hello world") {
//     console.log(char)
// }

// ITERATING OBJECTS

const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  diedre: 81,
  vonnie: 60,
};

// USING FOR...IN TO ITERATE AN OBJECT

for (let person in testScores) {
  console.log(`${person} scored ${testScores[person]}`);
}

// ==============================================
// Using Object methods to iterate
// (turn data into an array and then use for...of)
// ==============================================

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
  total += score;
}
console.log(total / scores.length);
