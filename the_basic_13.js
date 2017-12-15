let array = [1,2,3,4,5,6,7,8,9,1,2,-3,4,5];

// Print 1-255
// print1To255()
// Print all the integers from 1 to 255.
// 1
function printingARange(){
  for (var i = 0; i < 256; i++) {
    console.log(i)
  }
}
printingARange()
// **************************************
// Print Ints and Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.
// 2
function printIntsAndSum0To255(){
  let sum = 0;
  for (var i = 0; i < 256; i++) {
    console.log("i: ",i);
    console.log("sum: ",sum += i);
  }
}
printIntsAndSum0To255()

// **************************************
// Print Max of Array
// Given an array, find and print its largest element.
// 3
function printMaxOfArray(arr){
  var current = arr[1];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > current){
      current = arr[i];
    }
  }
  return current;
}
printMaxOfArray(array)

// **************************************
// Return Odds Array 1-255
// Create an array with all the odd integers between 1 and 255 (inclusive).
// 4
function returnOddsArray1To255(){
  var arr = [];
  for(var i = 0; i < 256; i++ ){
    if(i % 2 !== 0){
      arr.push(i);
    }
  }
  return arr;
}
returnOddsArray1To255()
//
// **************************************
// Return Array Count Greater than Y
// Given an array and a value Y, count and print the number of array values greater than Y.
// 5
function returnArrayCountGreaterThanY(arr, y){
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > y){
      count ++;
      console.log(arr[i]);
    }
  }
  return count;
}
returnArrayCountGreaterThanY(array, 7)
//
// **************************************
// Print Max, Min, Average Array Values
// Given an array, print the max, min and average values for that array.
// 6
function printMaxMinAverageArrayVals(arr){
  var max = arr[0], min = arr[0], sum = 0, avg = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }else if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = sum / arr.length;
  console.log(max)
  console.log(min)
  console.log(avg)
}
printMaxMinAverageArrayVals(array)

//
// **************************************
// Swap String for Array Negative Values
// Given an array of numbers, replace any negative values with the string 'Dojo'.
// 7
function swapStringForArrayNegativeVals(arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      arr[i] = "Dojo";
    }
  }
  return arr;
}
swapStringForArrayNegativeVals(array)
//
// **************************************
// Print Odds 1-255
// Print all odd integers from 1 to 255.
// 8
function printOdds1To255(){
  for(var i = 1; i <= 255; i+=2){
    console.log(i)
  }
}
printOdds1To255()
//
// **************************************
// Print Array Values
// Iterate through a given array, printing each value.
// 9
function printArrayVals(array){
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
printArrayVals(array)
//
// **************************************
// Print Average of Array
// Analyze an array’s values and print the average.
// 10
function printAverageOfArray(array){
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
printAverageOfArray(array)
//
// **************************************
// Square Array Values
// Square each value in a given array, returning that same array with changed values.
// 11
function squareArrayVals(array){
  for (var i = 0; i < array.length; i++) {
    array[i] = Math.pow(array[i], 2);
  }
  return array;
}
squareArrayVals(array)
//
// **************************************
// Zero Out Array Negative Numbers
// Return the given array, after setting any negative values to zero.
// 12
function zeroOutArrayNegativeVals(array){
  for (var i = 0; i < array.length; i++) {
    if(array[i] < 0){
      array[i] = 0;
    }
  }
  return array;
}
zeroOutArrayNegativeVals(array)

// **************************************
// Shift Array Values Left
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
// 13
function shiftArrayValsLeft(arr){
  for (var i = 0; i < arr.length; i++) {
  	arr[i] = arr[i + 1]
  }
  arr[arr.length-1] = 0;
  return arr;
}
shiftArrayValsLeft(arr)
