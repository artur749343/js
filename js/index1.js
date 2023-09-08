function isEvenNumber(num) {
    return 0==num%2
}
console.log("Завдання 1 ====================================");
console.log("isEvenNumber(10)", isEvenNumber(10));
console.log("isEvenNumber(7)", isEvenNumber(7));
  
  function calculateSum(n) {
    let result=0;
    for(let i=1;i<=n;i++){
        result+=i
    }
    return result;
  }
  console.log("Завдання 2 ====================================");
  console.log("calculateSum(5)", calculateSum(5));
  console.log("calculateSum(10)", calculateSum(10));
  
  
  function isPrimeNumber(num) {
    return 1==num%2
  }
  console.log("Завдання 3 ====================================");
  console.log("isPrimeNumber(7)", isPrimeNumber(7));
  console.log("isPrimeNumber(10)", isPrimeNumber(10));
  
  
  function isPositiveNumber(num) {
    return 0<num
  }
  
  console.log("Завдання 4 ====================================");
  console.log("isPositiveNumber(5)", isPositiveNumber(5)); // Виведе: true
  console.log("isPositiveNumber(-2)", isPositiveNumber(-2)); // Виведе: false
  
  
  function isEmptyString(str) {
    return ''==str
  }
  
  console.log("Завдання 5 ====================================");
  console.log('isEmptyString("")', isEmptyString("")); // Виведе: true
  console.log('isEmptyString("Hello")', isEmptyString("Hello")); // Виведе: false

  
  function checkDataType(value) {
    return typeof(value)
  }
  
  // Приклади виклику функції
  console.log("Завдання 6 ====================================");
  console.log("checkDataType(42)", checkDataType(42)); // Виведе: Значення "42" має тип "number".
  console.log("checkDataType('Hello')", checkDataType("Hello")); // Виведе: Значення "Hello" має тип "string".
  console.log("checkDataType(true)", checkDataType(true)); // Виведе: Значення "true" має тип "boolean".
  console.log("checkDataType(undefined)", checkDataType(undefined)); // Виведе: Значення "undefined" має тип "undefined".
  
  function findMax(num1, num2) {
    return (num1>num2)?num1:num2
  }
  
  console.log("Завдання 7 ====================================");
  console.log("findMax(10, 5)", findMax(10, 5)); // Виведе: 10
  console.log("findMax(8,12)", findMax(8, 12)); // Виведе: 12
  console.log("findMax(7, 7)", findMax(7, 7)); // Виведе: 7
  
  
  function getUserStatus(age) {
    if(age>65) return "Пенсіонер";
    else if(age>18) return "Дорослий";
    else "Неповнолітній";
  }
  
  // Приклади виклику функції
  console.log("Завдання 8 ====================================");
  console.log("getUserStatus(15)", getUserStatus(15)); // Виведе: "Неповнолітній"
  console.log("getUserStatus(25)", getUserStatus(25)); // Виведе: "Дорослий"
  console.log("getUserStatus(70)", getUserStatus(70)); // Виведе: "Пенсіонер"
  
  
  function getDayOfWeek(dayNumber) {
    let days=["Понеділок", "Вівторок", "Середа", "Четверг", "П'ятниця", "Субота", "Неділя"]
    return (days[dayNumber-1]!=undefined)?days[dayNumber-1]:"Невірний номер дня"; // небуду я ваши кейсы делать мне впадлу
  }

  console.log("Завдання 9 ====================================");
  console.log("getDayOfWeek(1)", getDayOfWeek(1)); // Виведе: "Понеділок"
  console.log("getDayOfWeek(3)", getDayOfWeek(3)); // Виведе: "Середа"
  console.log("getDayOfWeek(6)", getDayOfWeek(6)); // Виведе: "Субота"
  console.log("getDayOfWeek(8)", getDayOfWeek(8)); // Виведе: "Невірний номер дня"
  
  function getVariableType(variable) {
    let type={"number": "Це число", "string": "Це рядок", "boolean": "Це булеве значення"}
    return (type[typeof(variable)]!=undefined)?type[typeof(variable)]:"Це інший тип";
  }
  
  console.log("Завдання 10 ====================================");
  console.log("getVariableType(10)", getVariableType(10)); // Виведе: "Це число"
  console.log('getVariableType("Hello")', getVariableType("Hello")); // Виведе: "Це рядок"
  console.log("getVariableType(true)", getVariableType(true)); // Виведе: "Це булеве значення"
  console.log("getVariableType([1, 2, 3])", getVariableType([1, 2, 3])); // Виведе: "Це інший тип"

  
  function factorial(n) {
    return (n>1)?n*factorial(n-1):n; // рекурсия лол
  }
  
  console.log("Завдання 11 ====================================");
  console.log("factorial(5)", factorial(5)); // Виведе: 120
  console.log("factorial(10)", factorial(10)); // Виведе: 3628800
  
function makeAdder(x) {
   return function(y) {
   return x+y; 
}
}
const getAdder = makeAdder(5)

console.log("Завдання 12 ====================================");
console.log("getAdder(10)", getAdder(10)); // Виведе: 15
console.log("makeAdder(5)(10)", makeAdder(5)(10)); // Виведе: 15
  
  let multiply = (x, y) => {
    return x*y
  };
  
  console.log("Завдання 13 ====================================");
  console.log("multiply(5, 3)", multiply(5, 3)); // Виведе: 15
  
  function divide(x) {
       return function(y) {
       return x/y; 
    }
    }
    const getDivider = divide(2)
  console.log("Завдання 14 ====================================");
  console.log("getDivider(10)", getDivider(10)); // Виведе: 0.2
  console.log("divide(2)(10)", divide(2)(10)); // Виведе: 0.2
  
  // Задача 15: Створити мемоізовану версію функції, яка обчислює площу квадрата на основі довжини його сторони.
  
  const memoize = (fn) => {
    let cache = {};
    return (...args) => {
      let n = args[0];
      if (n in cache) return 'Fetching from cache '+cache[n];
      else {
        let result = fn(n);
        cache[n] = result;
        return result;
      }
    }
  }
  const square=(x)=>(x**2);
  const squareArea = memoize(square);
  console.log("Завдання 15 ====================================");
  console.log("squareArea(5)", squareArea(5)); // Обчислює і виводить 25
  console.log("squareArea(5)", squareArea(5)); // Виводить "Fetching from cache" і виводить 25 з кешу
  console.log("squareArea(6)", squareArea(6)); // Обчислює і виводить 36
  console.log("squareArea(6)", squareArea(6)); // Виводить "Fetching from cache" і виводить 36 з кешу

  let cube = function (n) {
    return n**3
  };
  
  console.log("Завдання 16 ====================================");
  console.log("cube(3)", cube(3)); // Виведе: 27
  
  function increment(n) {
    return n+1
  }
  
  function double(n) {
    return n*2
  }
  
  function compose(func1, func2, x) {
    return func2(func1(x))
  }
  function createCompose(x){
    return compose(increment, double, x);
  }
  
  console.log("Завдання 17 ====================================");
  console.log("createCompose(5)", createCompose(5)); // Виведе: 12 (5+1=6, 6*2=12)