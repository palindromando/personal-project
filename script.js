// Initialize and add the map
function initMap() {
    const africa = { lat: 7.3359, lng: 22.0492 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: africa,
      mapTypeId: 'roadmap'
    });
  }