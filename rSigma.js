// rSigma
//
// Write a recursive function that, given a number, returns the sum of integers from one up to that number. For example, rSigma(5) = 1+2+3+4+5 = 15; rSigma(2.5) = 1+2 = 3; rSigma(-1) = 0.

function rSigma(num){
  if(num > 0 ){
    // num = num - 1;
    // console.log('if statement is', true, num)
    return num + rSigma(num - 1) ;
  }else{
    // console.log('if statement is', false, num)
    return 0;
  }

}

rSigma(5);
