// Sum to One Digit
// Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit. Return that one-digit result. Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.
//
function sumToOne(num){
  var sum1 = 0;
  if(num.length === 1){
    return num
  }else{
      for(var i = 0; i < num.length; i++){
        sum1 += num[i];
      }
  sumToOne(sum1);
  }
}
