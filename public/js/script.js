// 1. select the hamburger icon
const hamburgericon = document.querySelector(".icon");
// 2. write the event handler to show or hide  the menu
const toggleMenu = function() {
    const navbar = document.querySelector('.list')
    navbar.classList.toggle('open');
}
// 3. use addevenntlistener to attach the hamburger icon to the event handler 
hamburgericon.addEventListener('click', toggleMenu);

/* <script>
    let data = <%- JSON.stringify(data) %>;
            const africa = { lat: 7.3359, lng: 22.0492 };
            let map;
            function initMap() {
                const africa = { lat: 7.3359, lng: 22.0492 };
              const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 4,
                center: africa,
                mapTypeId: 'roadmap'
              });
              for(each of data) {
                if (each.isApproved == true)  {
                  if (each.coords) {
                
                latLng=each.location;
                latLng = latLng.replace("(", "");
                latLng = latLng.replace(")", "");
                latLng = latLng.split(",")
                lat = Number(latLng[0])
                long = Number(latLng[1])
                console.log(latLng);
              
             const marker = new google.maps.Marker({
              position: new google.maps.LatLng(lat, long),
              map,
                title: each.title,
                
              });
              const contentString =
        `<div id="markerContent">` +
        `<h1>${each.title}</h1>` +
        `<div><p>${each.subject}</p></div>` +
        `<div><p>${each.type}</p></div>` +
        `<div><p>${each.source}</p></div>` +
          `<div><p>${each.image}</p></div>` +
        `</div>`;
           
              const infowindow = new google.maps.InfoWindow({
              content: contentString
              
              });
              marker.addListener("click", () => {
              infowindow.open(map, marker);
         
            });
          } //closes loop for coords check 
          }
            } //closes loop
            } //close init map function
            
          </script> */