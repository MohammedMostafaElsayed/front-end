/*navigator.geolocation.getCurrentPosition(success);
function success(x){
  initMap(x.coords.latitude, x.coords.longitude);
}*/

let map ; 
let country = document.querySelector('#con');
let marker;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: { lat: 0, lng: 0 },
  });
    marker = new google.maps.Marker({
    position: { lat: 0, lng: 0 },
    map,
    title: "Hello World!",
  });

}
function change_country(){
  switch (country.value) {
    case 'Egypt':
      map.setCenter({lat: 30.033333, lng: 31.233334});
      marker.setPosition({lat: 30.033333, lng: 31.233334});
      map.setZoom(6);
      break;
    case 'Italy':
      map.setCenter({lat: 41.902782, lng: 12.496366});
      marker.setPosition({lat: 41.902782, lng: 12.496366});
      map.setZoom(6);
      break;
    case 'England':
      map.setCenter({ lat: 55.3781, lng: -3.4360 });
      marker.setPosition({ lat: 55.3781, lng: -3.4360 });
      map.setZoom(6);
      break;
    case 'Span':
      map.setCenter({ lat: 40.416775, lng: -3.703790 });
      marker.setPosition({ lat: 40.416775, lng: -3.703790 });
      map.setZoom(6);
      break;
    default:
      map.setCenter({lat: 0, lng: 0});
      marker.setPosition({ lat: 0, lng: 0});
      map.setZoom(2);
      break;
  }
}
country.addEventListener('change', ()=>{
  change_country();
})

window.initMap = initMap;

