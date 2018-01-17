// Clock Hand Angles
// Regardless of how hard a Dojo student works (and they should work hard), they need time now and then to unwind – like hands on a clock. Traditional clocks are increasingly uncommon, but most can still read an analog clock’s hands of hours, minutes and seconds. Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00, prints angles (in degrees) of the hour, minute and second hands. As review, 360 degrees form a full rotation. For input of 3600 secs (equivalent to 1:00:00), print "Hour hand: 30 degs. Minute hand: 0 degs. Second hand: 0 degs." For an input parameter seconds of 119730 (which is equivalent to 9:15:30 plus 24 hours!), you should log "Hour hand: 277.745 degs. Minute hand: 93 degs. Second hand: 180 degs." Note: in the second example, the angle for the minute hand is not simply 90 degrees; it has advanced a bit further, because of the additional 30 seconds in that minute so far.
//
// Second: also calculate and print degrees for an additional “week hand” that rotates once each week.

function clockHandAngles(seconds){
  var days, hrs, secs, halfsies;
  if(seconds === 0){return "Hour hand:0 degrees, Minute Hand:0 degrees, Second Hand:0 degrees"}
  else if(seconds > 86400){
    days = Math.floor(seconds/86400);
    hrs = seconds - (days * 86400);
  }
  else if(seconds <= 86400 && seconds > 43200){
    halfsies = seconds - (Math.floor(seconds/43200) * 43200);
  }
  else if(seconds <= 43200){
    hrs = Math.floor(seconds / 60);
    secs = seconds - (Math.floor(seconds/43200))
  })

}
