

function getLocation() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    $("#demo").val(position.coords.latitude);
    $("#demo2").val(position.coords.longitude);
    document.getElementById("oculto").style.visibility = "visible";
    console.log(document.getElementById("demo").value+" y "+document.getElementById("demo2").value)
  //x.innerHTML = "Latitude: " + position.coords.latitude + 
  //"<br>Longitude: " + position.coords.longitude;
}
function init(lat, long){
    console.log(lat+" "+long);
   var mapOption = {
     center: new google.maps.LatLng(-12.06244,-77.12272),
     zoom: 15,
     mapTypeId:google.maps.MapTypeId.ROADMAP
   };
   var map = new google.maps.Map(document.getElementById("map"),mapOption);

   // Marcador 1
   var marker = new google.maps.Marker({
      position: { lat: parseInt(document.getElementById("demo").value), lng: parseInt(document.getElementById("demo2").value) }, // coodernadas del marcador 1
      icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
   });
   marker.setMap(map);

   // Marcador 2
   var marker2 = new google.maps.Marker({
      position: { lat: lat, lng: long }, // coordenadas del marcador 2
      icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
   });
   marker2.setMap(map);
}

