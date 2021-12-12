var locations = [
    ['First step hotels,agra', 27.1626855, 78.0034762, 1],
    ['First step hotels,Paris', 48.846398,2.320428, 2],
    ['First step hotels,Toronto', 43.631109, -79.419993, 3],
    ['First step hotels,Singapore', 1.278097, 103.867304, 4],
    
    ['First step hotels,Dubai', 25.027493,55.087634, 5],
    
    ['First step hotels,London', 51.476066,-0.087385, 6],
    ['First step hotels,Sydney', -33.908071,151.270097, 7],
    ['First step hotels,New York', 40.578959,-73.936350, 8],
    ['First step hotels,Cairo', 30.041534,31.239502, 9],
    ['First step hotels,Hyderabad', 17.410819,78.477137, 10]

];

            
var content=[[`<div id="content"><img src="/../../gallery_images/taj-mahal.jpg" style="width: 100%; height: 60%;"><div id="siteNotice"></div><h6 id="firstHeading" class="firstHeading">${locations[0][0]}</h4> <a  href="../../pages/hotels/agra.html" style="color:  rgb(79, 70, 211);"></a>click to visit hotel page<div ></div></div>`],
[`<div id="content"><img src="../../../gallery_images/effiletower.jpg" style="width: 100%; height: 60%;"><div id="siteNotice"></div><h6 id="firstHeading" class="firstHeading">${locations[1][0]}</h4><a href="../../pages/hotels/paris.html" style="color:  rgb(79, 70, 211);">click to visit hotel page </a>  <div ></div></div>`],
[`<div id="content"><img src="../../../gallery_images/toronto.jpg" style="width: 100%; height: 60%;"><div id="siteNotice"></div><h6 id="firstHeading" class="firstHeading">${locations[2][0]}</h4><a href="../../pages/hotels/toronto.html" style="color:  rgb(79, 70, 211);"  >click to visit hotel page </a>   <div </div></div>`],
[`<div id="content"><img src="../../../gallery_images/singapore.jpg" style="width: 100%; height: 60%;"><div id="siteNotice"></div><h6 id="firstHeading" class="firstHeading">${locations[3][0]}</h4><a href="../../pages/hotels/singapore.html" style="color:  rgb(79, 70, 211);">click to visit hotel page</a><div ></div></div>`],
[`<div id="content"><img src="../../../gallery_images/dubai.jpg" style="width: 100%; height: 60%;"><div id="siteNotice"></div><h6 id="firstHeading" class="firstHeading">${locations[4][0]}</h4><a href="../../pages/hotels/dubai.html" style="color:  rgb(79, 70, 211);">click to visit hotel page</a><div ></div></div>`],
[`<div id="content"><img src="../../../gallery_images/london.jpg" style="width: 100%; height: 60%;"><div id="siteNotice"></div><h6 id="firstHeading" class="firstHeading">${locations[5][0]}</h4><a href="../../pages/hotels/london.html" style="color:  rgb(79, 70, 211);">click to visit hotel page</a><div ></div></div>`],
[`<div id="content"><img src="../../../gallery_images/sydney.jpg" style="width: 100%; height: 60%;"><div id="siteNotice"></div><h6 id="firstHeading" class="firstHeading">${locations[6][0]}</h4><a href="../../pages/hotels/sydney.html" style="color:  rgb(79, 70, 211);">click to visit hotel page</a><div ></div></div>`],
[`<div id="content"><img src="../../../gallery_images/new-york.jpg" style="width: 100%; height: 60%;"><div id="siteNotice"></div><h6 id="firstHeading" class="firstHeading">${locations[7][0]}</h4><a href="../../pages/hotels/newyork.html" style="color:  rgb(79, 70, 211);">click to visit hotel page</a><div ></div></div>`],
[`<div id="content"><img src="../../../gallery_images/cairo.jpg" style="width: 100%; height: 60%;"><div id="siteNotice"></div><h6 id="firstHeading" class="firstHeading">${locations[8][0]}</h4><a href="../../pages/hotels/cairo.html" style="color:  rgb(79, 70, 211);">click to visit hotel page</a><div ></div></div>`],
[`<div id="content"><img src="../../../gallery_images/hyderabad.jpg" style="width: 100%; height: 60%;"><div id="siteNotice"></div><h6 id="firstHeading" class="firstHeading">${locations[9][0]}</h4><a href="../../pages/hotels/hyderabad.html" style="color:  rgb(79, 70, 211);">click to visit hotel page</a><div ></div></div>`]
];
function InitMap() {
    const image =
    "../gallery_images/icon.jpg";
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: new google.maps.LatLng(28.614884, 77.208917),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < locations.length; i++) {
        const location = locations[i];
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            title:location[0],
            label:"F",
        });
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(content[i][0]);
                infowindow.open(map,marker);
            }
        })(marker, i));
    }
}
