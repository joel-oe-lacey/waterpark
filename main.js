import './styles.less';
import mapImage from './assets/01_1920x1080_Map.jpg';

import {
    map
} from 'leaflet';

const mapid = L.map('map', {
    crs: L.CRS.Simple,
    zoomControl: false,
    scrollWheelZoom: false
});

var bounds = [
    [0, 0],
    [800, 1400]
];
var image = L.imageOverlay(mapImage, bounds).addTo(mapid);

mapid.fitBounds(bounds);
L.tileLayer('', { attribution: 'test map'}).addTo(mapid);
mapid.setMaxBounds(new L.LatLngBounds([0, 0], [800, 1400]));

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mapid);
}

mapid.on('click', onMapClick);


//should only have map scrolling available on certain width, use window? 
//or should 