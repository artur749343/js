function stringToNumber(str) {
    return new Number(str);
  }
  
  console.log("Завдання 1 ====================================");
  console.log('stringToNumber("42")', stringToNumber("42")); // Виведе 42
  
  function isAlmostSame(num1, num2) {
    return Math.abs(num1-num2)<Number.EPSILON
  }
  
  console.log("Завдання 2 ====================================");
  console.log("isAlmostSame(0.1 + 0.2, 0.3)", isAlmostSame(0.1 + 0.2, 0.3)); // Виведе true
  
  
  function isSafeInteger(num) {
    return num<Number.MAX_SAFE_INTEGER;
  }
  
  console.log("Завдання 3 ====================================");
  console.log(
    "isSafeInteger(Number.MAX_SAFE_INTEGER + 1)",
    isSafeInteger(Number.MAX_SAFE_INTEGER + 1)
  ); // Виведе false

  
  function isUnsafeInteger(num) {
    return num<Number.MIN_SAFE_INTEGER
  }
  
  console.log("Завдання 4 ====================================");
  console.log(
    "isUnsafeInteger(Number.MIN_SAFE_INTEGER - 1)",
    isUnsafeInteger(Number.MIN_SAFE_INTEGER - 1)
  ); // Виведе true
  
  
  function isTooLarge(num) {
    return num>Number.MIN_VALUE
  }
  
  console.log("Завдання 5 ====================================");
  console.log(
    "isTooLarge(Number.MAX_VALUE * 2)",
    isTooLarge(Number.MAX_VALUE * 2)
  ); // Виведе true
  
  
  function isAlmostZero(num) {
    return Boolean(0<num&num<Number.MIN_VALUE)
  }
  
  console.log("Завдання 6 ====================================");
  console.log(
    "isAlmostZero(Number.MIN_VALUE / 2)",
    isAlmostZero(Number.MIN_VALUE/2)
  ); // Виведе false
  console.log("isAlmostZero(Number.MIN_VALUE)", isAlmostZero(Number.MIN_VALUE)); // Виведе false
  
  
  function checkIsInteger(num) {
    return Number.isInteger(num);
  }
  
  console.log("Завдання 7 ====================================");
  console.log("checkIsInteger(42.5)", checkIsInteger(42.5)); // Виведе false
  
  function checkIsSafeInteger(num) {
    return Number.isSafeInteger(num);
  }
  
  console.log("Завдання 8 ====================================");
  console.log(
    "checkIsSafeInteger(Math.pow(2, 53))",
    checkIsSafeInteger(Math.pow(2, 53))
  ); // Виведе false
  
  function convertToExponential(num) {
    return num.toExponential();
  }
  
  console.log("Завдання 9 ====================================");
  console.log("convertToExponential(42)", convertToExponential(42)); // Виведе "4.2e+1"

  
  function convertToFixed(num, precision) {
    return num.toFixed(precision)
  }
  
  console.log("Завдання 10 ====================================");
  console.log("convertToFixed(42.9876, 2)", convertToFixed(42.9876, 2)); // Виведе "42.99"
  
  
  function convertToString(num) {
    return num.toString();
  }
  
  console.log("Завдання 11 ====================================");
  console.log("convertToString(42)", convertToString(42)); // Виведе "42"
  
  
  function convertToPrecision(num, precision) {
    return num.toPrecision(precision);
  }
  
  console.log("Завдання 12 ====================================");
  console.log("convertToPrecision(42.9876, 2)", convertToPrecision(42.9876, 2)); // Виведе "43"