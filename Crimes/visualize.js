$(function() {
  console.log(crimes);
  
  var i = 0;
  var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  while(i < crimes.data.length) {
    
    var crime = crimes.data[i];

    var x = parseFloat(crime[34], 10);
    var y = parseFloat(crime[35], 10);
    
    if(x < minX) { minX = x; };
	if(x > maxX) { maxX = x; };
	
	if(x < minY) { minY = y; };
	if(x > maxY) { maxY = y; };
	

    i++;
    }
    
    console.log([minX, maxX, minY, maxY]);
    
    
    
      var i = 0;
  while(i < crimes.data.length) {
    
    var crime = crimes.data[i];
    var neighborhood = crime[22];
    var crimeCode = crime[41];
    var crimeDescp = crime[42];
    var x = parseFloat(crime[34], 10);
    var y = parseFloat(crime[35], 10);
    
    var diffX = maxX - minX;
	var screenX =  (x - minX) / diffX * 500;
	
	var diffY = maxY - minY;
	var screenY =  (y - minY) / diffY * 500;
	
    
    
 var div = $("<div>").css({ position:"absolute", width:10, height:10, backgroundColor:"red", 
  left:screenX, top:screenY, opacity:.5}).attr("title", neighborhood + crimeCode);

          			
          			
        $("body").append(div);


    i++;
    } 
});




///write up a paragraph of what your data source is going to be and what story you are going to try to tell with your data. email by Friday. By next wednesday, a first pass at trying to mock it up.
