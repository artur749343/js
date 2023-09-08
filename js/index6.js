let person = {name: "John", age: 25};

console.log("Завдання 1 ====================================");

console.log("person", person); // Виведе {name: "John", age: 25}

let personLarge = {
    name: 'John',
      age: 25,
      address: { street: '123 Main St', city: 'New York', country: 'USA' }
};

console.log("Завдання 2 ====================================");
console.log("personLarge", personLarge); // Виведе
// personLarge {
//   name: 'John',
//   age: 25,
//   address: { street: '123 Main St', city: 'New York', country: 'USA' }
// }

var animal = {
  type: "Dog",
  breed: "Labrador Retriever",
};

function copyObject(obj) {
  new_obj={...obj}
  return new_obj
}

console.log("Завдання 3 ====================================");

console.log("copyObject(animal)", copyObject(animal)); // Виведе { type: 'Dog', breed: 'Labrador Retriever' }

let fruit = {
  name: "Banana",
  color: "Yellow",
};
function hasProperty(obj, property) {
  if (property in obj) return `Property ${property} exists.`
  else return `Property ${property} does not exist.`
}

console.log("Завдання 4 ====================================");
console.log(hasProperty(fruit, "name")); // Виведе "Property name exists."
console.log(hasProperty(fruit, "taste")); // Виведе "Property taste does not exist."

// Завдання 5: Створіть функцію, що отримує об'єкт і виводить на консоль всі його ключі та значення.
let country = {
  name: "United States",
  capital: "Washington, D.C.",
};

function printKeysAndValues(obj) {
  for(k in obj) console.log("Key:", k, ", Value:", obj[k])
}

console.log("Завдання 5 ====================================");
printKeysAndValues(country);
// Виведе
// Key: name, Value: United States
// Key: capital, Value: Washington, D.C.

let movie = {
  title: "Inception",
  director: "Christopher Nolan",
};

function deleteProperty(obj, property) {
  if (property in obj) delete obj[property]
  return obj
}

console.log("Завдання 6 ====================================");
console.log(deleteProperty(movie, "director")); // Виведе { title: 'Inception' }

let user = {
  name: "John",
  age: 25,
  introduce() {return `My name is ${this.name} and I am ${this.age} years old.`}
};

console.log("Завдання 7 ====================================");
console.log(user.introduce());
// Виведе My name is John and I am 25 years old.

let book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
};

function addField(obj, newField, value) {
  obj[newField]=value
  return obj
}

console.log("Завдання 8 ====================================");
console.log(addField(book, "year", 1960)); // Виведе { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }

// Завдання 9: Деструктуруйте об'єкт в нові змінні.
let laptop = {
  brand: "Dell",
  model: "XPS 13",
};

function destructureObject(obj) {
  return `Brand: ${obj.brand}, Model: ${obj.model}`
}

console.log("Завдання 9 ====================================");
console.log(destructureObject(laptop)); // Виведе Brand: Dell, Model: XPS 13

let userList = [
  { name: "Jack", role: "reader" },
  { name: "Jane", role: "admin" },
];
function changeRole(array, newRole) {
  for(v in array){
        array[v]["role"]=newRole
        console.log(array[v])
    }
}

console.log("Завдання 10 ====================================");
changeRole(userList, "editor");
// Виведе
// { name: 'Jack', role: 'editor' }
// { name: 'Jane', role: 'editor' }

let product = {
  productName: "Smartphone",
  price: 699,
  manufacturer: {
    companyName: "Tech Corp",
    country: "USA",
  },
};

function printProductDetails(obj) {
  console.log(`${obj.productName} ${obj.price} ${obj.manufacturer.companyName} ${obj.manufacturer.country}`)
}

console.log("Завдання 11 ====================================");
printProductDetails(product); // Виведе Smartphone 699 Tech Corp USA

let planet1 = { name: "Земля", radius: 6371 };
let planet2 = { name: "Земля", radius: 6371 };

function compareObjects(obj1, obj2) {
  console.log(obj1===obj2)
  obj1=obj2
  console.log(obj1===obj2)
}

console.log("Завдання 12 ====================================");
compareObjects(planet1, planet2); // Виведе
//false
//true

let car = {
  brand: "BMW",
  year: 2022,
};

function showCarInfo({
  brand = "Unknown",
  year = 0,
  country = "Unknown",
} = {}) {
  return {"brand": brand, "year": year, "country": country}
}

console.log("Завдання 13 ====================================");
console.log(showCarInfo(car)); // Виведе { brand: 'BMW', year: 2022, country: 'Unknown' }

function addProperty(array) {
  array["customProperty"]="myProperty"
  return array
}

console.log("Завдання 14 ====================================");
var newArr=[1,2,3,4,5]
newArr=addProperty(newArr)
console.log(newArr.customProperty); // Виведе myProperty