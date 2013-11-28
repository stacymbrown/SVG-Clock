//code to update clock
function update_clock ()
{
  var now = new Date ();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var handRotation = 0; // degress hand is rotated
  var HoursHand = document.getElementById("hourhand");
  var MinuteHand = document.getElementById("minutehand");
  var SecondsHand = document.getElementById("secondhand");
  
  // seconds hand, work out seconds
  handRotation = seconds*6+now.getMilliseconds()/999*6;
  if (handRotation > 359)//if greater than 359 rotate back to 0
  {
    handRotation = 0;
  }
  //rotate around centre point of seconds circle cx, cy
 secondhand.setAttribute('transform', 'rotate('+handRotation+', 280,536)');
  
  // minute hand, work out minutes
  handRotation = minutes*6+now.getSeconds()/60*6;
  if (handRotation > 359) // if greater than 359 rotate back to 0
  {
    handRotation =0;
  }
//rotate around centre point of minutes circle cx, cy 
  minutehand.setAttribute('transform','rotate('+handRotation+', 377, 343.5)');
  
  // hour hand, set as 12 hour clock
 var hours12 = hours % 12;
  handRotation = hours12/11*360+now.getMinutes()/60*6 ; 
  // console.log(hours/23*360);
  if (handRotation > 359)
  {
    handRotation = 0;
  }
// rotate around centre point of hour circle cx, cy  
  HoursHand.setAttribute('transform', 'rotate('+handRotation+',272, 203.5)');
}


setInterval( update_clock, 1000 );
