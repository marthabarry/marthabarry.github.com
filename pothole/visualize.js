    $(function() {
    


      var mapOptions = {
      center: new google.maps.LatLng(42.3583,-71.0603 ),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP // ROADMAP, SATELLITE, HYBRID, TERRAIN
      };
      var myMap = new google.maps.Map($("#map-canvas")[0],mapOptions);
      
             



      
          	console.log(farmer-markets);
     var myHeatmapData = [];
   var i = 0;
 // while(i < potholes.length) {
    
  //var pothole = potholes[i];
  
//  myHeatmapData.push(
  //        new google.maps.LatLng(pothole.LATITUDE,pothole.LONGITUDE)  
    //    )

  //var lon = pothole.LONGITUDE;
  //var lat = pothole.LATITUDE;
  

 // var marker = new google.maps.Marker({
   //     position: new google.maps.LatLng(lat,lon),
     //   title: "MassArt",
       // map: myMap

        
    
     
    i++;
    }
    
   //  var heatmap = new google.maps.visualization.HeatmapLayer({
     //   data: myHeatmapData,
    //    radius: 50
    //  });
      heatmap.setMap(myMap);


    });


