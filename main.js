import './styles.less';
import mapImage from './assets/01_1920x1080_Map.jpg';

import waterslide from './assets/02_640x426_1.jpg';
import kidsArea from './assets/03_640x426_2.jpg';
import restaurant from './assets/04_640x426_3.jpg';
import firstAid from './assets/05_640x426_4.jpg';

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
 
const testBounds = L.latLngBounds([0, 0], [height, width]);
L.imageOverlay(mapImage, testBounds).addTo(mapid).getBounds();

function onMapClick(e) {
    var mapWidth = mapid._container.offsetWidth;
    var mapHeight = mapid._container.offsetHeight;
    console.log('w', e.containerPoint.x * width / mapWidth);
    console.log('h', e.containerPoint.y * height / mapHeight);
    console.log(e.latlng);
    console.log(e);
}

mapid.on('click', onMapClick);

const latLngCalc = (lat, lng) => {
    // marker is getting offset by the page height, need to work on that bug
    // lat long coords of 0, 0 are 0, pageHeight on container, so this currently accounts for that in coords. 
    // read docs for more details 
    //marker positions to top left, but we want marker over point, so need to adjust for dimensions 
    const latMarkerNorm = 55;
    const lngMarkerNorm = -22;

    // return L.latLng((lat + height + latMarkerNorm), (lng + lngMarkerNorm))
    return L.latLng((lat + height ), (lng ))
}

//split to separate files 
//icons
import aidIconImg from './assets/aidIcon.png';
import extremeIconImg from './assets/extremeIcon.png';
import familySlideIconImg from './assets/familySlideIcon.png';
import forEveryoneIconImg from './assets/forEveryoneIcon.png';
import foodIconImg from './assets/foodIcon.png';
import lockersIconImg from './assets/lockersIcon.png';
import parkingIconImg from './assets/parkingIcon.png';
import toddlersIconImg from './assets/toddlersIcon.png';
import wcIconImg from './assets/wcIcon.png';

const testIcon = L.icon({
    iconUrl: foodIconImg,
    iconSize: [60, 52],
    iconAnchor: [22, 55],
});
const aidIcon = L.icon({
    iconUrl: aidIconImg,
    iconSize: [60, 52],
    iconAnchor: [22, 55],
});
const extremeIcon = L.icon({
    iconUrl: extremeIconImg,
    iconSize: [60, 52],
    iconAnchor: [22, 55],
})
const familySlideIcon = L.icon({
    iconUrl: familySlideIconImg,
    iconSize: [60, 52],
    iconAnchor: [22, 55],
})
const forEveryoneIcon = L.icon({
    iconUrl: forEveryoneIconImg,
    iconSize: [60, 52],
    iconAnchor: [22, 55],
})
const foodIcon = L.icon({
    iconUrl: foodIconImg,
    iconSize: [60, 52],
    iconAnchor: [22, 55],
})
const lockersIcon = L.icon({
    iconUrl: lockersIconImg,
    iconSize: [60, 52],
    iconAnchor: [22, 55],
})
const parkingIcon = L.icon({
    iconUrl: parkingIconImg,
    iconSize: [60, 52],
    iconAnchor: [22, 55],
})
const toddlersIcon = L.icon({
    iconUrl: toddlersIconImg,
    iconSize: [40, 40],
    iconAnchor: [0, 0],
})
const wcIcon = L.icon({
    iconUrl: wcIconImg,
    iconSize: [60, 52],
    iconAnchor: [22, 55],
})

//markers
L.marker(latLngCalc(130, 115), {
    icon: testIcon,
    // pane: 'overlayPane'
}).addTo(mapid);

L.marker(latLngCalc(500, 285), {
    icon: toddlersIcon,
}).addTo(mapid);

L.marker(latLngCalc(315, 1315), {
    icon: extremeIcon,
}).addTo(mapid);

L.marker(latLngCalc(571, 241), {
    icon: forEveryoneIcon,
}).addTo(mapid);