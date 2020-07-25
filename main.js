import './styles.less';
import waterslide from './assets/02_640x426_1.jpg';
import mapImage from './assets/01_1920x1080_Map.jpg';
import foodIcon from './assets/foodIcon.png';
import $ from 'jquery';

import {
    map
} from 'leaflet';

//these should be based on browser
//then you'll need to scale your point placement accordingly, relative to image size 
//all points should be placed in relative size also? 
const width = $(window).width();
const height = $(window).height();

//is center making a difference compared to set bounds?
const mapid = L.map('map', {
    crs: L.CRS.Simple,
    // minZoom: 1,
    // maxZoom: 4,
    center: [height/2, width/2],
    zoom: 0,
    zoomControl: false,
    scrollWheelZoom: false,
});



//save the ratio of img dimensions/browser dimensions for point scaling 
//read more here: https://leafletjs.com/examples/crs-simple/crs-simple.html 
//pixel vs map unit 
const widthRatio = 1920/width;
const heightRatio = 1080/height;
 
const testBounds = L.latLngBounds([0, 0], [height, width])

// console.log('testBound', testBounds)
// console.log('northw', testBounds.getSouthWest())
// console.log('southe', testBounds.getNorthEast())
// console.log('bounds', testBounds)

//used to normalize coordinate and scale for zoom 
// var southWest = mapid.unproject([0, height], mapid.getMaxZoom() );
// var northEast = mapid.unproject([width, 0], mapid.getMaxZoom() );
// var bounds = new L.LatLngBounds(southWest, northEast);
// // var bounds = new L.LatLngBounds([0,height], [width, 0]);
// console.log('bounds', bounds)
console.log('img', L.imageOverlay(mapImage, testBounds).addTo(mapid).getBounds());

// mapid.fitBounds(testBounds);
// mapid.setMaxBounds(bounds);

var popup = L.popup();

// function onMapClick(e) {
//     console.log('latlong', e.latlng)
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(mapid);
// }

function onMapClick(e) {
    var mapWidth = mapid._container.offsetWidth;
    var mapHeight = mapid._container.offsetHeight;
    console.log('w', e.containerPoint.x * width / mapWidth);
    console.log('h', e.containerPoint.y * height / mapHeight);
    console.log(e);
}

mapid.on('click', onMapClick);

var testIcon = L.icon({
    iconUrl: foodIcon,
    // iconSize: [38, 95],
    // iconAnchor: [22, 94],
    // popupAnchor: [-3, -76],
    // shadowUrl: 'my-icon-shadow.png',
    // shadowSize: [68, 95],
    // shadowAnchor: [22, 94]
});

// marker is getting offset by the page height, need to work on that bug
// lat long coords of 0, 0 are 0, pageHeight on container, so this currently accounts for that in coords. 
// read docs for more details 

//marker positions to top left, but we want marker over point, so need to adjust for dimensions 
const latMarkerNorm = 55;
const lngMarkerNorm = -22;
const latLngPlot = L.latLng((129 + height + latMarkerNorm), (115 + lngMarkerNorm))
console.log('marker', L.marker(latLngPlot, {
    icon: testIcon,
    // pane: 'overlayPane'
}).addTo(mapid).getLatLng());