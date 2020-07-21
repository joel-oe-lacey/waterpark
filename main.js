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
    [800, 1500]
];
var image = L.imageOverlay(mapImage, bounds).addTo(mapid);

mapid.fitBounds(bounds);


//should only have map scrolling available on certain width, use window? 
//or should 