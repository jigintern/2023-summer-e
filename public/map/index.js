// // This example creates a simple polygon representing the Bermuda Triangle.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: { lat: 35.41934524435214, lng: 139.59822422578932 },
    mapTypeId: "terrain",
  });
  // Define the LatLng coordinates for the polygon's path.
  const yellow = [
    new google.maps.LatLng(35.419213, 139.5977589),
    new google.maps.LatLng(35.419213, 139.5977589),
    new google.maps.LatLng(35.419213, 139.5977589),
    new google.maps.LatLng(35.419628, 139.598197),
    new google.maps.LatLng(35.4191981, 139.5984126),
    new google.maps.LatLng(35.4194622, 139.5986164),
    new google.maps.LatLng(35.4190029, 139.5998846),
    new google.maps.LatLng(35.4183205, 139.6002201),
    new google.maps.LatLng(35.4184467, 139.6008824),
    new google.maps.LatLng(35.417847285462614, 139.60077746701705),
    new google.maps.LatLng(35.41744249182248, 139.60044365502725),
    new google.maps.LatLng(35.41733900623941, 139.60091699244495),
    new google.maps.LatLng(35.41770310687166, 139.60138766791263)
    // 
    // new google.maps.LatLng(35.41733900623941, 139.60091699244495)
  ];
    
  const red = [
    new google.maps.LatLng(35.4191981, 139.5984126),
    new google.maps.LatLng(35.4194622, 139.5986164),
    new google.maps.LatLng(35.4190029, 139.5998846),
    new google.maps.LatLng(35.4183205, 139.6002201),
    new google.maps.LatLng(35.4184467, 139.6008824),
    new google.maps.LatLng(35.4194375, 139.6001506),
    new google.maps.LatLng(35.4195942, 139.5993785),
  ];
    // Construct the polygon.
    const dangerZone = new google.maps.Polygon({
        paths: yellow,
        strokeColor: "#FFDD00",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FFFF00",
        fillOpacity: 0.35,
        map:map
    });
    const deadlyZone = new google.maps.Polygon({
      paths: singida,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map:map
  });
  
 // dangerZone.setMap(map);
}
window.initMap = initMap;