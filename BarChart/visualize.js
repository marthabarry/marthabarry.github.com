$(function() {



$("<p>").addClass("head").text("Boston Crimes by Neighborhood")
		.appendTo("body");




});




$(function() {
	console.log(data)
	var i = 0;
    while(i < data.length) {
      var area = data[i];
      var neighborhood = area.name
      var incidents = parseInt(area.incidents);
    	var domestic = parseInt(area.domestic);

      
    var maxIncidents = 10651;
     var maxDomestic = 10651;
      
     var fraction = incidents / maxIncidents;
    var fraction2 = domestic / maxDomestic;

      
    var incidentsWidth = fraction * 1000;
    var domesticWidth = fraction2 * 1000;

      
      var row = $("<div>").addClass("row");
      
    	var div = $("<div>").addClass("neighborhood").text(neighborhood)
    				.appendTo(row);
      
      var divIncidents = $("<div>").addClass("incidents").text(incidents)
          	.css({ width:incidentsWidth})
          			.appendTo(row);
          			
     var divDomestic = $("<div>").addClass("domestic").text(domestic)
          	.css({ width:domesticWidth})
          			.appendTo(row);

          			
          			
        $("body").append(row);

      i= i + 1;
    }
    
});