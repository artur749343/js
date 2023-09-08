function printIndexes(array) {
    for(i=0;i<array.length;i++) console.log(i)
  }
  
  console.log("Завдання 1 ====================================");
  printIndexes([1, 2, 3, 4, 5]);
  // Виведе
  // 0
  // 1
  // 2
  // 3
  // 4
  
  function sumArray(array) {
    var result=0
    for(i=0;i<array.length;i++) result+=array[i]
    return result
  }
  
  console.log("Завдання 2 ====================================");
  console.log("sumArray([1, 2, 3, 4, 5])", sumArray([1, 2, 3, 4, 5])); // Виведе 15
  
  // Завдання 3: Дано масив, використовуючи цикл "for of" знайдіть добуток всіх елементів масиву
  function multiplyArray(array) {
    var result=array[0]
    for(i=1;i<array.length;i++) result*=array[i]
    return result
  }
  
  console.log("Завдання 3 ====================================");
  console.log("multiplyArray([1, 2, 3, 4, 5])", multiplyArray([1, 2, 3, 4, 5])); // Виведе 120
  
  function modifyArray(array) {
    array[2]=array[2].toString()
    console.log(array)
  }
  
  console.log("Завдання 4 ====================================");
  modifyArray([1, "two", 3, "four", 5]); // Виведе 1,two,,four,5
  
  function printUppercase(array) {
    for(i=0;i<array.length;i++) array[i]=array[i].toUpperCase()
    console.log(array)
  }
  
  console.log("Завдання 5 ====================================");
  printUppercase(["one", "two", "three"]); // Виведе ONE TWO THREE
  
  function findMinMax([firstElement, ...restElements]) {
    var min=firstElement
    var max=firstElement
    for(i=0;i<restElements.length;i++){
        if (restElements[i]<min) min=restElements[i]
        if (restElements[i]>max) max=restElements[i]
    }
    console.log(`Min: ${min} Max: ${max}`)
  }
  
  console.log("Завдання 6 ====================================");
  findMinMax([5, 2, 8, 1, 9, 3]); // Виведе Min: 1 Max: 9

  function printStrings(array) {
    var result=""
    for(i=0;i<array.length;i++) result+=","+array[i].toString()
    result=result.replace(",", "", 0)
    console.log(result+result)
  }
  
  console.log("Завдання 7 ====================================");
  printStrings([1, "two", 3, "four", 5]); // 1,two,3,four,51,two,3,four,5
  
  function concatenateStrings(array, subString) {
    var result=""
    for(i=0;i<array.length;i++) result+=array[i].toString()
    console.log(result.includes(subString))
  }
  
  console.log("Завдання 8 ====================================");
  concatenateStrings([1, "two", 3, "four", 5], "two"); // Виведе true

  function addTenToEach(array) {
    for(i=0;i<array.length;i++) array[i]+=10
    console.log(array);
  }
  
  console.log("Завдання 9 ====================================");
  addTenToEach([5, 10, 15, 20]); // Виведе [15, 20, 25, 30]
  
  function swapMinMax(array) {
    var min=array[0]
    var max=array[0]
    for(i=1;i<array.length;i++){
        if (array[i]<min) min=array[i]
        if (array[i]>max) max=array[i]
    }
    minIndex=array.findIndex(x=>min===x)
    maxIndex=array.findIndex(x=>max===x)
    array[minIndex]=max
    array[maxIndex]=min
    return array
  }
  
  console.log("Завдання 10 ====================================");
  console.log(swapMinMax([1, 2, 3, 4, 5]));
  
  function getEvenNumbers(arr) {
    var result=[]
    for(i=0;i<arr.length;i++) if (arr[i]%2==0) result.push(arr[i])
    return result
  }
  console.log("Завдання 11 ====================================");
  console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Виведе [2, 4, 6]
  
  function multiplyByIndex(arr) {
    for(i=0;i<arr.length;i++) arr[i]*=i
    return arr
  }
  console.log("Завдання 12 ====================================");
  console.log(multiplyByIndex([1, 2, 3, 4, 5])); // Виведе [0, 2, 6, 12, 20]
  
  function replaceNumbers(arr) {
    for(i=0;i<arr.length;i++){
        if(arr[i]<=10) arr[i]="Less than or equal to 10"
        else arr[i]="Greater than 10"
    }
    return arr
  }
  
  console.log("Завдання 13 ====================================");
  console.log(replaceNumbers([5, 10, 15, 20])); // Виведе ["Less than or equal to 10", "Less than or equal to 10", "Greater than 10", "Greater than 10"]