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
console.log(height);

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

//panes
mapid.createPane('toddlers')
mapid.createPane('everyone')
mapid.createPane('family')
mapid.createPane('extreme')
mapid.createPane('wc')
mapid.createPane('lockers')
mapid.createPane('food')
mapid.createPane('parking')
mapid.createPane('aid')

import {
    pirateShip,
    toddlerSlide,
    toddlerBowl,
    lazyRiver,
    circus,
    pirateLagoon,
    smallLagoon,
    wavepool,
    beach,
    flatSlide,
    windSlide,
    funnelShute,
    spiralShute,
    clamshell,
    funWall,
    lazyRiverSlide,
    cresentSlide,
    loopSlide,
    curvySlide,
    speedSlide,
    bigSlide,
    carouselSlide,
    nwRestroom,
    pirateRestroom,
    beachRestroom,
    centralRestroom,
    mainSWRestroom,
    mainSERestroom,
    NWLockers,
    SELockers,
    centralFood,
    beachFood,
    mainFood,
    mainParking,
    mainAid
} from './markers.js'

const toddler = L.layerGroup([pirateShip, toddlerSlide, toddlerBowl])
const everyone = L.layerGroup([lazyRiver, circus, pirateLagoon, smallLagoon, wavepool, beach, flatSlide, windSlide, funnelShute, spiralShute, clamshell, funWall]);
const family = L.layerGroup([lazyRiverSlide, cresentSlide])
const extreme = L.layerGroup([loopSlide, curvySlide, speedSlide, bigSlide, carouselSlide])
const wc = L.layerGroup([nwRestroom, pirateRestroom, beachRestroom, centralRestroom, mainSWRestroom, mainSERestroom])
const lockers = L.layerGroup([NWLockers, SELockers])
const food = L.layerGroup([centralFood, beachFood, mainFood])
const parking = L.layerGroup([mainParking])
const aid = L.layerGroup([mainAid])

// Add markers to their respective panes 
toddler.addTo(mapid);
everyone.addTo(mapid);
family.addTo(mapid);
extreme.addTo(mapid);
wc.addTo(mapid);
lockers.addTo(mapid);
food.addTo(mapid);
parking.addTo(mapid);
aid.addTo(mapid);

// first  

const filterMap = e => {
    // console.log('tab event', e)
    const tabID = e.target.parentNode.id;
    console.log(tabID)
    $(`#${tabID}`).toggleClass('greyscale');
    $('.everyone').css('display', 'none');
}

$('.tab').on('click', filterMap);

// Tile 
import attractionsByType from './attractions';
const colorMap = {
    toddlers: 'hsl(277, 56%, 66%)',
    everyone: '#7277d5',
    family: '#4a8bdb',
    extreme: '#3bbeb0',
    wc: '#b0c151',
    locker: '#f5ba42',
    food: '#f59b43',
    parking: '#e7663f',
    firstaid: '#d9434e'}

const generateTiles = attractionsByType.map(attr => {
    const {attrType, name, photoLink, videoLink, img, markerName} = attr;
    const color = colorMap[attrType];

    return (`
        <section class="tile">
            <section class="tile-picture" style="border-bottom: 2px solid ${color}">
                <span class="tile-icon" role="img" aria-label="glyph" style="color:${color}">☆</span>
                <img src='./assets/${img}' alt="A waterslide with a yellow carousel pattern">
            </section>
            <h3 class="tile-title" style="color:${color}">${name}</h3>
            <section class="tile-buttons">
                <button class="tile-button" data-marker=${markerName}>☆</button>
                <button class="tile-button" data-photo-link=${photoLink}>☆</button>
                <button class="tile-button" data-video-link=${videoLink}>☆</button>
            </section>
        </section>`
    )
})