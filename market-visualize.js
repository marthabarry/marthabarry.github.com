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
    '</div>'+
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

      var mapOptions = {
      center: new google.maps.LatLng(42.3583,-71.0603 ),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP // ROADMAP, SATELLITE, HYBRID, TERRAIN
      };
      var myMap = new google.maps.Map($("#map-canvas")[0],mapOptions);
      
var georssLayer = new google.maps.KmlLayer('http://marthabarry.github.com/neighborhood.kml');
georssLayer.setMap(myMap);

  
    console.log(data);
    var i = 0;
    while(i < data.length) {
    
    var markets = data[i];
    createPin(markets)
    
     
    i++;
    
    }
});
