function iniciar(){
	var mapG = initializeMap();
	$('#ciudad1').click( function(){ changeCoord1(mapG); return false; });
	$('#ciudad2').click( function(){ changeCoord2(mapG); return false; });
	$('#ciudad3').click( function(){ changeCoord3(mapG); return false; });
	$('#ciudad4').click( function(){ changeCoord4(mapG); return false; });
	$('#geoloc').click( function(){ changeCoord5(mapG); return false; });
}

function initializeMap() {
	  
  // Create an array of styles.
  var styles = [
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [
            {
                color: "#e9e9e9"
            },
            {
                lightness: 17
            }
        ]
    },
    {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
            {
                color: "#f5f5f5"
            },
            {
                lightness: 20
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#ffffff"
            },
            {
                lightness: 17
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
            {
                color: "#ffffff"
            },
            {
                lightness: 29
            },
            {
                weight: 0.2
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
            {
                color: "#ffffff"
            },
            {
                lightness: 18
            }
        ]
    },
    {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
            {
                color: "#ffffff"
            },
            {
                lightness: 16
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
            {
                color: "#f5f5f5"
            },
            {
                lightness: 21
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
            {
                color: "#dedede"
            },
            {
                lightness: 21
            }
        ]
    },
    {
        elementType: "labels.text.stroke",
        stylers: [
            {
                visibility: "on"
            },
            {
                color: "#ffffff"
            },
            {
                lightness: 16
            }
        ]
    },
    {
        elementType: "labels.text.fill",
        stylers: [
            {
                saturation: 36
            },
            {
                color: "#333333"
            },
            {
                lightness: 40
            }
        ]
    },
    {
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
            {
                color: "#f2f2f2"
            },
            {
                lightness: 19
            }
        ]
    },
    {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#fefefe"
            },
            {
                lightness: 20
            }
        ]
    },
    {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
            {
                color: "#fefefe"
            },
            {
                lightness: 17
            },
            {
                weight: 1.2
            }
        ]
    }
  ];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(40.416424, -3.703436),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('googleMap'),
    mapOptions);

  var myLatlng1 = new google.maps.LatLng(40.418009, -3.701979);
  var marker1 = new google.maps.Marker({
    position: myLatlng1,
    title:"Evento 1"
  });
  
  var contentString1 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading"><img class="img-responsive" src="images/reyleon.png" style="width:auto;height:200px;"></img></h1>'+
      '<div id="bodyContent">'+
      '<h3>El Rey León</h3>'+
	  '<p>Musical</p>'+
      '<p>Ver detalles del evento: <a href="evento.html" target="_blank">'+
      'El Rey León</a> '+'</p>'+
      '</div>'+
      '</div>';
	  
  var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
  });
  
  var myLatlng2 = new google.maps.LatLng(40.423389, -3.708591);
  var marker2 = new google.maps.Marker({
    position: myLatlng2,
    title:"Evento 2"
  });
  var contentString2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading"><img class="img-responsive" src="http://placehold.it/300x200"></h1>'+
      '<div id="bodyContent">'+
      '<h3>Evento 2 </h3>'+
	  '<p>Lorem Ipsum</p>'+
      '<p>Ver detalles del evento: <a href="#">'+
      'Evento 2</a> '+'</p>'+
      '</div>'+
      '</div>';
	  
  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
  });
  
  var myLatlng3 = new google.maps.LatLng(40.408373, -3.703082);
  var marker3 = new google.maps.Marker({
    position: myLatlng3,
    title:"Evento 3"
  });
  var contentString3 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading"><img class="img-responsive" src="http://placehold.it/300x200"></h1>'+
      '<div id="bodyContent">'+
      '<h3>Evento 3 </h3>'+
	  '<p>Lorem Ipsum</p>'+
      '<p>Ver detalles del evento: <a href="#">'+
      'Evento 3</a> '+'</p>'+
      '</div>'+
      '</div>';
	  
  var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
  });
  var myLatlng4 = new google.maps.LatLng(40.416216, -3.675933);
  var marker4 = new google.maps.Marker({
    position: myLatlng4,
    title:"Evento 4"
  });
  var contentString4 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading"><img class="img-responsive" src="http://placehold.it/300x200"></h1>'+
      '<div id="bodyContent">'+
      '<h3>Evento 4 </h3>'+
	  '<p>Lorem Ipsum</p>'+
      '<p>Ver detalles del evento: <a href="#">'+
      'Evento 4</a> '+'</p>'+
      '</div>'+
      '</div>';
	  
  var infowindow4 = new google.maps.InfoWindow({
    content: contentString4
  });
  var myLatlng5 = new google.maps.LatLng(40.415165, -3.714937);
  var marker5 = new google.maps.Marker({
    position: myLatlng5,
    title:"Evento 5"
  });
  var contentString5 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading"><img class="img-responsive" src="http://placehold.it/300x200"></h1>'+
      '<div id="bodyContent">'+
      '<h3>Evento 5</h3>'+
	  '<p>Lorem Ipsum</p>'+
      '<p>Ver detalles del evento: <a href="#">'+
      'Evento 5</a> '+'</p>'+
      '</div>'+
      '</div>';
	  
  var infowindow5 = new google.maps.InfoWindow({
    content: contentString5
  });

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
  // To add the marker to the map, call setMap();
  marker1.setMap(map);  
  marker2.setMap(map);  
  marker3.setMap(map);  
  marker4.setMap(map);  
  marker5.setMap(map); 
  marker1.addListener('click', function() {
    infowindow1.open(map, marker1);
  });
  marker2.addListener('click', function() {
    infowindow2.open(map, marker2);
  });
  marker3.addListener('click', function() {
    infowindow3.open(map, marker3);
  });
  marker4.addListener('click', function() {
    infowindow4.open(map, marker4);
  });
  marker5.addListener('click', function() {
    infowindow5.open(map, marker5);
  });

  return map;
}

function changeCoord3(mapG){
  mapG.setCenter(new google.maps.LatLng(40.416424, -3.703436));
  mapG.setZoom(14);
}

function changeCoord1(mapG){
  mapG.setCenter(new google.maps.LatLng(41.389494, 2.180867));
  mapG.setZoom(14);
}

function changeCoord4(mapG){
  mapG.setCenter(new google.maps.LatLng(39.470837, -0.374139));
  mapG.setZoom(14);
}

function changeCoord2(mapG){
  mapG.setCenter(new google.maps.LatLng(43.262846, -2.934984));
  mapG.setZoom(14);
}

function changeCoord5(mapG){
  mapG.setCenter(new google.maps.LatLng(40.559901, -4.014974));
  mapG.setZoom(15);
}