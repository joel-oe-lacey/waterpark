import './styles.less';
import mapImage from './assets/01_1920x1080_Map.jpg';
import foodIcon from './assets/foodIcon.png';

import {
    map
} from 'leaflet';

const mapid = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: 1,
    maxZoom: 4,
    center: [0, 0],
    zoom: 1,
    zoomControl: false,
    scrollWheelZoom: false
});

// var bounds = [
//     [0, 0],
//     [600, 1000]
// ];
var w = 1920,
    h = 1080;

var southWest = mapid.unproject([0, h], mapid.getMaxZoom() - 1);
var northEast = mapid.unproject([w, 0], mapid.getMaxZoom() - 1);
var bounds = new L.LatLngBounds(southWest, northEast);
// var bounds = new L.LatLngBounds([0,h], [w, 0]);
console.log('bounds', bounds)
L.imageOverlay(mapImage, bounds).addTo(mapid);

mapid.fitBounds(bounds);
L.tileLayer('', { attribution: 'test map'}).addTo(mapid);
mapid.setMaxBounds(bounds);

var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(mapid);
// }

function onMapClick(e) {

    var mapWidth = mapid._container.offsetWidth;
    var mapHeight = mapid._container.offsetHeight;
    console.log(e.containerPoint.x * w / mapWidth);
    console.log(e.containerPoint.y * h / mapHeight);
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

L.marker([1008, 329], {
    icon: testIcon
}).addTo(mapid);