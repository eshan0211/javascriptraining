let name = {
  firstname: "Eshan",
  lastname: "Madnani",
};
let printFullName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + state
  );
};
printFullName.call(name, "Jaipur", "Rajasthan");

let name2 = {
  firstname: "Sachin",
  lastname: "Tendulkar",
};

// Function borrowing
//call method
printFullName.call(name2, "Jaipur", " Rajasthan");

// apply method
printFullName.apply(name2, ["Jaipur", " Rajasthan"]);

//bind method
let printMyName = printFullName.bind(name2, "Jaipur", "Rajasthan");
console.log(printMyName);
printMyName();
