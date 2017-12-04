var claire = {
  xLocal : 0,
  yLocal : 0,
  reset : function(){ this.xLocal = 0; this.yLocal = 0;},
  moveBy : function(x, y){this.xLocal += x; this.yLocal += y;},
  xLocation : function(){ return this.xLocal },
  yLocation : function(){ return this.yLocal },
};
claire.reset();
claire.moveBy(1,-2);
claire.moveBy(3,1);
console.log(claire.xLocation());
console.log(claire.yLocation());
