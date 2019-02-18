obj = {
  greeting: "Hello"
};

function greet(firstName, lastName) {
  console.log(this.greeting, firstName, lastName);
}

var greetBinded = greet.bind(obj); // Hard binding. Returns a new function.
greetBinded("Nithin", "Reddy");
greet.call(obj, "Nithin", "Reddy");
greet.apply(obj, ["Nithin", "Reddy"]);
