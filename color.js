//Declare the Color Object with our new keyword below here.
const Color = new Object();

/*
** rgb is an array that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/

Color.isColor = function(rgb){
  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rgb[1] >= 0) && (rgb[1] <= 255);
  let blueworks = (rgb[2] >= 0) && (rgb[2] <= 255);

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};

Color.redIntensity = function(rgb){
  let redpct = Math.round((rgb[0]/255)*100);
  return redpct;
};
//greenIntensity
Color.greenIntensity = function(rgb){
  let greenpct = Math.round((rgb[1]/255)*100);
  return greenpct;
}
//blueIntensity
Color.blueIntensity = function(rgb){
  let bluepct = Math.round((rgb[2]/255)*100);
  return bluepct;
}
//brightness


//complement
