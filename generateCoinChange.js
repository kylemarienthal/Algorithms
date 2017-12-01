function generateCC(cents){
  var Q,D,N,P;
  Q= (cents - (cents % 25)) / 25;
  console.log(Q);

  cents = cents % 25;


  D = (cents - (cents % 10)) /10;
  cents = cents % 10;
  console.log(D);

  N = (cents - (cents % 5)) /5;
  console.log(N);
  P =  cents % 5;
  console.log(P);
  return [Q,D,N,P]
}

generateCC(64);
