// Sum to One Digit
// Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit. Return that one-digit result. Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.

// 1) Create a "total" variable, and set a "working" variable to the value you want to sum.
// 2) Create a loop, and set the total variable to zero
// 3) In the loop, add the working variable modulo 10 to the total.
// 4) Divide the working variable by 10
// 5) If the working variable is greater than zero then go back round the loop at (3)
// 6) If the total variable is less than ten, you have the value.
// 7) Otherwise, set the working variable to the total variable, and go back round the loop at (2)
//
// split the number apart into an array
// loop through the array and parseint each index to add it to the 'sum' if sum < 10 return it
// otherwise run the function on that number again


function sumToOne(num){
  var str = num.toString();
  var arr = str.split('');
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += parseInt(arr[i]);
  }
  if(sum < 10){
    return sum;
  }else{
    sumToOne(sum)
  }
}
