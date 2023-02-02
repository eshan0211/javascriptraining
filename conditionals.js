// =====================
// BASIC IF/ELSE
// =====================
let random = Math.random();
if (random < 0.5) {
  console.log("YOUR NUMBER IS LESS THAN 0.5!!!");
} else {
  console.log("YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5!!!");
}
console.log(random);

// =====================
// PROMPT EXAMPLE
// =====================

const dayOfWeek = prompt("ENTER A DAY").toLowerCase();

if (dayOfWeek === "monday") {
  console.log("UGHHH I HATE MONDAYS!");
} else if (dayOfWeek === "saturday") {
  console.log("YAY I LOVE SATURDAYS!");
} else if (dayOfWeek === "friday") {
  console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!");
} else {
  console.log("MEH");
}

// =====================
// TICKET PRICE EXAMPLE
// =====================

// 0-5 - FREE
// 5 - 10 CHILD $10
// 10 - 65 ADULT $20
// 65+ SENIOR $10

const age = 890;

if (age < 5) {
  console.log("You are a baby.  You get in for free!");
} else if (age < 10) {
  console.log("You are a child.  You pay $10");
} else if (age < 65) {
  console.log("You are an adult. You pay $20");
} else {
  console.log("You are a senior. You pay $10");
}

// =====================
// NESTING CONDITIONALS
// =====================

const password1 = prompt("please enter a new password");

// Password must be 6+ characters
if (password1.length >= 6) {
  // Password cannot include space
  if (password1.indexOf(" ") === -1) {
    console.log("Valid Password!");
  } else {
    console.log("Password cannot contain spaces!");
  }
} else {
  console.log("PASSWORD TOO SHORT! Must be 6+ characters");
}

//==================== IMPROVISING WITH LOGICAL OPERATORS
// =====================
// LOGICAL AND OPERATOR
// =====================
const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(" ") === -1) {
  console.log("VALID PASSWORD!");
} else {
  console.log("INCORRECT FORMAT FOR PASSWORD!");
}

// =====================
// REVISITING AGE EXAMPLE
// =====================

// 0-5 free
// 5-10 $10
// 10-65 $20
// 65+ free

const age1 = 100;
if ((age1 >= 0 && age1 < 5) || age1 >= 65) {
  console.log("FREE");
} else if (age1 >= 5 && age1 < 10) {
  console.log("$10");
} else if (age1 >= 10 && age1 < 65) {
  console.log("$20");
} else {
  console.log("INVALID AGE!");
}

// let firstName = prompt("enter your first name");
// if (!firstName) {
//     firstName = prompt("TRY AGAIN!!!");
// }

// =====================
// COMBINING && and ||
// =====================
const age2 = 8;
if (!((age2 >= 0 && age2 < 5) || age2 >= 65)) {
  console.log("YOU ARE NOT A BABY OR A SENIOR!");
}
