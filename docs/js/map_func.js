jQuery(function($) {
	"use strict";
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "https:///maps.googleapis.com/maps/api/js?key=AIzaSyCA86jBOywV0Gr5dtvyD1aYl4N6Ju4m9wE&callback=initialize";
    document.body.appendChild(script);
});

// This example creates a 2-pixel-wide red polyline showing
// the path of William Kingsford Smith's first trans-Pacific flight between
// Oakland, CA, and Brisbane, Australia.
//API KEY AIzaSyCA86jBOywV0Gr5dtvyD1aYl4N6Ju4m9wE

function initialize() {
  var pickup = { lat:32.3055977, lng: -64.8669904}
  var mapOptions = {
    zoom: 16,
	scrollwheel: false,
    center: new google.maps.LatLng(32.3055977,-64.8669904),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  var map = new google.maps.Map(document.getElementById('map_canvas'),
      mapOptions);

  var marker = new google.maps.Marker({
    position: pickup,
    map: map
  });


}

//google.maps.event.addDomListener(window, 'load', initialize);