   $(function() {
    
 function createPin(markets) {
 
    var lon = markets.Longitude;
    var lat = markets.Latitude;
  

  var marker = new google.maps.Marker({

    title: "MassArt",
    map: myMap
})
var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '<div id="bodyContent">'+ markets.Name + markets.Location + markets.TimeDay +
    '</div>'+
    '</div>';

var infowindow = new google.maps.InfoWindow({
    content: contentString
});

var marker = new google.maps.Marker({
position: new google.maps.LatLng(lat,lon),
    map: myMap,
    title:"Farmer's Market"
});

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(myMap,marker);
});

}
	$("#less-10").click(function(){
  	$("#less-10-hover").show();
	  });
	$("#less-10-hover").click(function(){
  	$("#less-10-hover").hide();
	});

      var mapOptions = {
      center: new google.maps.LatLng(42.3583,-71.0603 ),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP // ROADMAP, SATELLITE, HYBRID, TERRAIN
      };
      var myMap = new google.maps.Map($("#map-canvas")[0],mapOptions);
	
	$("#hund").click(function(){
  	$("#hundhover").show();
	  });
	$("#hundhover").click(function(){
  	$("#hundhover").hide();
	});
	

	
	
	$("#sixty").click(function(){
  	$("#sixtyhover").show(); $("#style17").hide();
	  });
	$("#sixtyhover").click(function(){
  	$("#sixtyhover").hide();
	});
	
	
	$("#seventy-five").click(function(){
  	$("#seventy-five-hover").show();
	  });
	$("#seventy-five-hover").click(function(){
  	$("#seventy-five-hover").hide();
	});

	$("#two-hund").click(function(){
  	$("#two-hund-hover").show();
	  });
	$("#two-hund-hover").click(function(){
  	$("#two-hund-hover").hide();
	});
	

      
var georssLayer = new google.maps.KmlLayer('https://maps.google.com/maps/ms?authuser=0&vps=1&ie=UTF8&msa=0&output=kml&msid=205158860800887463998.0004dc2b33d0b9d8e34de');
georssLayer.setMap(myMap);

  
    console.log(data);
    var i = 0;
    while(i < data.length) {
    
    var markets = data[i];
    createPin(markets)
    
 
    i++;
    
    }
});


