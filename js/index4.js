function findStringLength(str) {
    return str.length;
  }
  
  console.log("Завдання 1 ====================================");
  console.log(
    'findStringLength("Hello, world!")',
    findStringLength("Hello, world!")
  ); // Виведе 13
  
  function generateStringFromCharCode(code1, code2, code3, code4, code5) {
    return String.fromCharCode(code1,code2,code3,code4,code5)
  }
  
  console.log("Завдання 2 ====================================");
  console.log(
    "generateStringFromCharCode(72, 101, 108, 108, 111)",
    generateStringFromCharCode(72, 101, 108, 108, 111)
  ); // Виведе "Hello"
  
  
  function generateStringFromCodePoint(code1, code2, code3, code4) {
    return String.fromCodePoint(code1,code2,code3,code4)
  }
  
  console.log("Завдання 3 ====================================");
  console.log(
    "generateStringFromCodePoint(9731, 9733, 9842, 0x2f804)",
    generateStringFromCodePoint(9731, 9733, 9842, 0x2f804)
  ); // Виведе "☃★♲你"
  
  
  function rawString() {
    return String.raw`Привіт\u000A!`;
  }
  
  console.log("Завдання 4 ====================================");
  console.log("rawString()", rawString()); // Виведе Привіт\u000A!
  
  
  function concatenateStrings(str1, str2) {
    return str1.concat(str2)
  }
  
  console.log("Завдання 5 ====================================");
  console.log(
    'concatenateStrings("Hello", "World!")',
    concatenateStrings("Hello", "World!")
  ); // Виведе "HelloWorld!"
  
  
  function checkIfIncludes(mainStr, subStr) {
    return mainStr.includes(subStr)
  }
  
  console.log("Завдання 6 ====================================");
  console.log(
    'checkIfIncludes("Hello, world!", "world")',
    checkIfIncludes("Hello, world!", "world")
  ); // Виведе true
  
  
  function findIndexOf(mainStr, subStr) {
    return mainStr.indexOf(subStr)
  }
  
  console.log("Завдання 7 ====================================");
  console.log(
    'findIndexOf("Hello, world!", "world")',
    findIndexOf("Hello, world!", "world")
  ); // Виведе 7
  
  function findLastIndexOf(mainStr, subStr) {
    return mainStr.lastIndexOf(subStr)
  }
  
  console.log("Завдання 8 ====================================");
  console.log(
    'findLastIndexOf("Hello, world! Hello, universe!", "Hello")',
    findLastIndexOf("Hello, world! Hello, universe!", "Hello")
  ); // Виведе 14
  
  function checkIfStartsWith(mainStr, subStr) {
    return mainStr.startsWith(subStr)
  }
  
  console.log("Завдання 9 ====================================");
  console.log(
    'checkIfStartsWith("Hello, world!", "Hello")',
    checkIfStartsWith("Hello, world!", "Hello")
  ); // Виведе true
  
  function checkIfEndsWith(mainStr, subStr) {
    return mainStr.endsWith(subStr)
  }
  
  console.log("Завдання 10 ====================================");
  console.log(
    'checkIfEndsWith("Hello, world!", "world!")',
    checkIfEndsWith("Hello, world!", "world!")
  ); // Виведе true
  
  function compareCharCodeAtAndCodePointAt(string, index) {
    return `charCodeAt:${string.charCodeAt(index)}, codePointAt:${string.codePointAt(index)}, charAt:${string.charAt(index)}, at: ${string.at(index)}`

  }
  
  console.log("Завдання 11 ====================================");
  console.log(
    'compareCharCodeAtAndCodePointAt("★", 0)',
    compareCharCodeAtAndCodePointAt("★", 0)
  ); // Виведе charCodeAt:9733, codePointAt:9733, charAt:★, at: ★
  
  console.log(
    'compareCharCodeAtAndCodePointAt("a", 0)',
    compareCharCodeAtAndCodePointAt("a", 0)
  ); // Виведе  charCodeAt:97, codePointAt:97, charAt:a, at: a
  
  console.log(
    'compareCharCodeAtAndCodePointAt("😀", 0)',
    compareCharCodeAtAndCodePointAt("😀", 0)
  ); // Виведе charCodeAt:55357, codePointAt:128512, charAt:�, at: �
  
  function padString(original, length, padWith, side) {
    if ("end"==side) return original.padEnd(length, padWith)
    else if ("start"==side) return original.padStart(length, padWith)
    else return "Error: side should be either 'start' or 'end'"
  }
  
  console.log("Завдання 12 ====================================");
  console.log(
    'padString("123", 5, "0", "start")',
    padString("123", 5, "0", "start")
  ); // Виведе "00123"
  console.log('padString("123", 5, "0", "end")', padString("123", 5, "0", "end")); // Виведе "12300"
  console.log(
    'padString("123", 5, "0", "middle")',
    padString("123", 5, "0", "middle")
  ); // Виведе "Error: side should be either 'start' or 'end'"
  
  function trimString(original, side) {
    // Якщо значення аргументу "side" дорівнює "start"
    // Повертаємо рядок, в якому видалені пробіли на початку
    // Якщо значення аргументу "side" дорівнює "end"
    // Повертаємо рядок, в якому видалені пробіли в кінці
    // Якщо значення аргументу "side" дорівнює "both"
    // Повертаємо рядок, в якому видалені пробіли з обох сторін
    // Якщо значення аргументу "side" не є ні "start", ні "end", ні "both", повертаємо повідомлення "Error: side should be either 'start', 'end' or 'both'"
    if (side=="start"){
      var i=0
      while (" "==original[i]){
        original=original.replace(" ", "", i)
        i++
      }
      return original
    }
    if (side=="end"){
      var reversed = original.split("").reverse().join("")
      while (" "==reversed[i]){
        reversed=reversed.replace(" ", "", i)
        i++
      }
      return reversed.split("").reverse().join("")
    }
    if (side=="both"){
      return original.replace(" ", "")
    }
    return "Error: side should be either 'start', 'end' or 'both'";
  }
  
  console.log("Завдання 13 ====================================");
  console.log('trimString(" 123 ", "start")', trimString(" 123 ", "start")); // Виведе "123 "
  console.log('trimString(" 123 ", "end")', trimString(" 123 ", "end")); // Виведе " 123"
  console.log('trimString(" 123 ", "both")', trimString(" 123 ", "both")); // Виведе "123"
  console.log('trimString(" 123 ", "middle")', trimString(" 123 ", "middle")); // Виведе "Error: side should be either 'start', 'end' or 'both'"
  
  
  function convertCase(original, caseType) {
    if (caseType=="upper") return original.toUpperCase()
    if (caseType=="lower") return original.toLowerCase()
    else return "Error: caseType should be either 'upper' or 'lower'";
  }
  
  console.log("Завдання 14 ====================================");
  console.log('convertCase("abc", "upper")', convertCase("abc", "upper")); // Виведе "ABC"
  console.log('convertCase("ABC", "lower")', convertCase("ABC", "lower")); // Виведе "abc"
  console.log('convertCase("abc", "middle")', convertCase("abc", "middle")); // Виведе "Error: caseType should be either 'upper' or 'lower'"
  
  
  function repeatString(string, times) {
    var result=""
    for (i=0;i<times;i++){
      result+=string
    }
    return result
  }
  
  console.log("Завдання 15 ====================================");
  console.log('repeatString("abc", 3)', repeatString("abc", 3)); // Виведе 'abcabcabc'
  
  
  function sliceString(string, startIndex, endIndex) {
    return string.slice(startIndex, endIndex)
  }
  
  console.log("Завдання 16 ====================================");
  console.log(
    'sliceString("Hello, world!", 0, 5)',
    sliceString("Hello, world!", 0, 5)
  ); // Виведе 'Hello'
  
  
  function substringString(string, startIndex, endIndex) {
    var result=""
    for(i=startIndex;i<endIndex;i++){
      result+=string[i]
    }
    return result
  }
  
  console.log("Завдання 17 ====================================");
  console.log(
    'substringString("Hello, world!", 0, 5)',
    substringString("Hello, world!", 0, 5)
  ); // Виведе 'Hello'