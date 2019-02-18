class User {
  constructor(id, firstName, lastName) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
}
class Customer extends User {
  constructor(id, firstName, lastName, address) {
    super(id, firstName, lastName);
    this._address = address;
  }
  get address() {
    return this._address;
  }
  set address(address) {
    this._address = address;
  }
}

class Employee extends User {
  constructor(id, firstName, lastName, salary) {
    super(id, firstName, lastName);
    this._salary = salary;
  }
  get salary() {
    return this._salary;
  }
  set salary(salary) {
    this._salary = salary;
  }
}
class Owner extends User {
  constructor(id, firstName, lastName, phone) {
    super(id, firstName, lastName);
    this._phone = phone;
  }
  get phone() {
    return this._phone;
  }
  set phone(phone) {
    this._phone = phone;
  }
}

class Product {
  constructor(id, name, price, quantity) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._quantity = quantity;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get price() {
    return this._price;
  }
  get quantity() {
    return this._quantity;
  }
  set name(name) {
    this._name = name;
  }
  set price(price) {
    this._price = price;
  }
  set quantity(quantity) {
    this._quantity = quantity;
  }
}

class Bill {
  constructor(customerID, productsBought) {
    this._customerID = customerID;
    this.productsBought = productsBought;
  }
}

class Shop {
  constructor() {
    this._products = [];
    this._employeeList = [];
    this._bills = [];
  }
}
