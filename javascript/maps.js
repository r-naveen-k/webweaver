var locations = [
    ['First step hotels,agra', 27.1626855, 78.0034762, 1],
    ['First step hotels,Paris', 48.846398,2.320428, 2],
    ['First step hotels,Toronto', 43.631109, -79.419993, 3],
    ['First step hotels,Singapore', 1.278097, 103.867304, 4],
    ['First step hotels,Karachi', 24.842708,67.061314, 5],
    ['First step hotels,Dubai', 25.027493,55.087634, 6],
    ['First step hotels,Abhu Dabhi', 24.494526,54.338729, 7],
    ['First step hotels,London', 51.476066,-0.087385, 8],
    ['First step hotels,Sydney', -33.908071,151.270097, 9],
    ['First step hotels,New York', 40.578959,-73.936350, 10],
    ['First step hotels,Cairo', 30.041534,31.239502, 11,],
    ['First step hotels,Hyderabad', 17.410819,78.477137, 12]

];
function InitMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: new google.maps.LatLng(28.614884, 77.208917),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}