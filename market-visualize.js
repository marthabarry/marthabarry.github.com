   $(function() {
    
 function createPin(markets) {
 
    var lon = markets.Longitude;
    var lat = markets.Latitude;
  

  var marker = new google.maps.Marker({

    title: "MassArt",
    map: myMap
})
var contentString = '<div id="content">'+
    '<div id="siteNotice">'+ markets.Name +'</div>'+ '<div id="address">' + markets.Location + '</div>'+
    '<div id="bodyContent">'+markets.TimeDay + '</div>';

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

var lessTen = new google.maps.KmlLayer('https://maps.google.com/maps/ms?authuser=0&vps=1&ie=UTF8&msa=0&output=kml&msid=205158860800887463998.0004dc2b33d0b9d8e34de');


	$("#less-10").click(function(){
  	$("#less-10-hover").show(); lessTen.setMap(myMap);
	  });
	$("#less-10-hover").click(function(){
  	$("#less-10-hover").hide(); lessTen.setMap(null);
	});

      var mapOptions = {
      center: new google.maps.LatLng(42.3583,-71.0603 ),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP // ROADMAP, SATELLITE, HYBRID, TERRAIN
      };
      var myMap = new google.maps.Map($("#map-canvas")[0],mapOptions);
      

var hundMap = new google.maps.KmlLayer('https://maps.google.com/maps/ms?authuser=0&ie=UTF8&msa=0&output=kml&msid=205158860800887463998.0004dc37903ff6db186b2');

	
	$("#hund").click(function(){
  	$("#hundhover").show(); hundMap.setMap(myMap);
	  });
	$("#hundhover").click(function(){
  	$("#hundhover").hide(); hundMap.setMap(null);
	});
	

	
var seventyFive = new google.maps.KmlLayer('https://maps.google.com/maps/ms?authuser=0&ie=UTF8&msa=0&output=kml&msid=205158860800887463998.0004dc37629d9e1f362f8');

	
	
	$("#seventy-five").click(function(){
  	$("#seventy-five-hover").show();seventyFive.setMap(myMap); 
	  });
	$("#seventy-five-hover").click(function(){
  	$("#seventy-five-hover").hide(); seventyFive.setMap(null);
	});


var twoHund = new google.maps.KmlLayer('https://maps.google.com/maps/ms?authuser=0&ie=UTF8&msa=0&output=kml&msid=205158860800887463998.0004dc37792ba239a995d');



	$("#two-hund").click(function(){
  	$("#two-hund-hover").show();twoHund.setMap(myMap); 
	  });
	$("#two-hund-hover").click(function(){
  	$("#two-hund-hover").hide();twoHund.setMap(null);
	});
	


var sixtyMap = new google.maps.KmlLayer('https://maps.google.com/maps/ms?authuser=0&vps=2&ie=UTF8&msa=0&output=kml&msid=205158860800887463998.0004dc370ad2a6b023807');



	$("#sixty").click(function(){
  	$("#sixtyhover").show(); sixtyMap.setMap(myMap);
	  });
	$("#sixtyhover").click(function(){
  	$("#sixtyhover").hide();sixtyMap.setMap(null);
	});
  
    console.log(data);
    var i = 0;
    while(i < data.length) {
    
    var markets = data[i];
    createPin(markets)
    
 
    i++;
    
    }
});


