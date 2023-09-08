function calculateExpression(expression) {
  return (typeof(expression)=="string")?eval(expression):"Argument is not a string";
}

console.log("Завдання 1 ====================================");
console.log(
  'calculateExpression("3 + 5 * 2")',
  calculateExpression("3 + 5 * 2")
); // Виведе 13
function getNumberFromString(s) {
  return isNaN(s)?parseFloat(s):"Couldn't extract a number from the provided string.";
}

console.log("Завдання 2 ====================================");
console.log(
  'getNumberFromString("100.5 apples")',
  getNumberFromString("100.5 apples")
); // Виведе 100.5
console.log(
  'getNumberFromString("No numbers here")',
  getNumberFromString("No numbers here")
); // Виведе повідомлення про помилку
function getIntegerFromString(s) {
  return isNaN(s)?parseInt(s):"Couldn't extract an integer from the provided string.";
}

// Виводимо результати виклику функції
console.log("Завдання 3 ====================================");
console.log(
  'getIntegerFromString("100 apples")',
  getIntegerFromString("100 apples")
); // Виведе 100
console.log(
  'getIntegerFromString("No integers here")',
  getIntegerFromString("No integers here")
); // Виведе повідомлення про помилку

function isNumberFinite(num) {
  return isFinite(num)?"The number is finite.":"The number is not finite.";
}

console.log("Завдання 4 ====================================");
console.log("isNumberFinite(100)", isNumberFinite(100)); // Виведе "The number is finite."
console.log("isNumberFinite(Infinity)", isNumberFinite(Infinity)); // Виведе "The number is not finite."

function isValueNaN(value) {
  return isNaN(value)?"The value is NaN.":"The value is not NaN.";
}

console.log("Завдання 5 ====================================");
console.log("isValueNaN(NaN)", isValueNaN(NaN)); // Виведе "The value is NaN."
console.log("isValueNaN(100)", isValueNaN(100)); // Виведе "The value is not NaN."

function createURLObject(urlStr) {
  return new URL(urlStr)
}

console.log("Завдання 6 ====================================");
console.log(
  'createURLObject("https://example.com")',
  createURLObject("https://example.com")
); // Виведе URL об'єкт

function encodeURLComponent(urlComponent) {
  return encodeURIComponent(urlComponent)
}

// Виконуємо функцію з вхідними даними і виводимо результат.
console.log("Завдання 7 ====================================");
console.log(
  'encodeURLComponent("Hello World!")',
  encodeURLComponent("Hello World!")
); // Виведе "Hello%20World!"

function encodeURL(url) {
  return encodeURI(url)
}

console.log("Завдання 8 ====================================");
console.log(
  'encodeURL("https://ex ample.com")',
  encodeURL("https://ex ample.com")
); // Виведе "https://ex%20ample.com"

function decodeURLComponent(urlComponent) {
  return decodeURIComponent(urlComponent);
}

console.log("Завдання 9 ====================================");
console.log(
  'decodeURLComponent("Hello%20World%21")',
  decodeURLComponent("Hello%20World%21")
); // Виведе "Hello World!"

function decodeURL(url) {
  return decodeURI(url);
}

// Виконуємо функцію з вхідними даними і виводимо результат.
console.log("Завдання 10 ====================================");
console.log(
  'decodeURL("https://ex%20ample.com")',
  decodeURL("https://ex%20ample.com")
); // Виведе "https://ex ample.com"