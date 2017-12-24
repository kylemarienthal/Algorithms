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

function printSpaces(){
	var str = '';
	for(var i = 0; i < 26; i++){
		str += ' ';
	}
	console.log(str);
}
function drawCenteredStars(num){
	var str = '';
	printSpaces();
	for (var i = 0; i < 26; i++) {
  	str += '*';
  }
  printSpaces();
console.log(str);
}
drawCenteredStars();
// (optional) Create epic text-art Empire vs. Rebellion battle scenes, with ships like (=*=)and >o<.

//
// Character Art
// From the above, derive the following that accept and draw the given characters, not just asterisks:
// drawLeftChars(num,char)        // For all three of these, you
// drawRightChars(num,char)       // can safely assume that 'char'
// drawCenteredChars(num,char)    // is a string with length 1
function drawLeftChars(num, char){
  var str = '';
  for(var i = 0; i < 76; i++){
    if(i <= num){
      str += char;
    }else{
      str += " ";
    }
  }
  console.log(str);

}
