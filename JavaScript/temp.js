function f(input, callback) {
  if (input) {
    setTimeout(() => callback("Success"), 1000);
  } else {
    callback("Empty");
  }
}

console.log("Open");
f(null, data => console.log(data));
console.log("Close");
