const person = {
  firstName: "Nithin",
  address: {
    street: "E city"
  }
};

const {
  address: { street: addr }
} = person;

console.log(addr);
