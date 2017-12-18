// Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.

function drawLeftStars(num){
  var str = '';
  for(var i = 0; i < 76; i++){
    if(i <= num){
      str += '*';
    }else{
      str += " ";
    }
  }
  console.log(str);
}
// Write a function drawRightStars(num) that prints 75 characters total. Stars should build from right side. The last num characters should be asterisks; the other 75 should be spaces.

function drawRightStars(num){
  var str = '';
  var star = 75 - num;
  for(var i = 0; i < 76; i++){

    if(i <= star){
      str += ' ';
    }else{
      str += "*";
    }
  }
  console.log(str);
}
// Write function drawCenteredStars(num) that prints 75 characters total. The stars should be centered in the 75. The middle num characters should be asterisks; the rest of the 75 spaces.

function drawCenteredStars(num){
var str = '';
for (var i = 0; i < 76; i++) {
  if(i <= 25 || i > 50){
    str += ' ';
  }else{
    str += '*';
  }
}
console.log(str);
}
// (optional) Create epic text-art Empire vs. Rebellion battle scenes, with ships like (=*=)and >o<.
