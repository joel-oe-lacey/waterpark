import './styles.less';
import mapImage from './assets/01_1920x1080_Map.jpg';

import waterslide from './assets/02_640x426_1.jpg';
import kidsArea from './assets/03_640x426_2.jpg';
import restaurant from './assets/04_640x426_3.jpg';
import firstAid from './assets/05_640x426_4.jpg';

var $ = require('jquery');
var jQueryBridget = require('jquery-bridget');
var Isotope = require('isotope-layout');
// make Isotope a jQuery plugin
jQueryBridget('isotope', Isotope, $);
import {
    map
} from 'leaflet';
window.jQuery = $;
var fancybox = require('@fancyapps/fancybox');
// jQueryBridget('fancybox', Fancybox, $);

//these should be based on browser
//then you'll need to scale your point placement accordingly, relative to image size 
//all points should be placed in relative size also? 
const width = $(window).width();
const height = $(window).height();

const bounds = L.latLngBounds([0, 0], [height, width]);
//is center making a difference compared to set bounds?
const mapid = L.map('map', {
    crs: L.CRS.Simple,
    center: bounds.getCenter(),
    zoom: 0,
    zoomControl: false,
    scrollWheelZoom: false,
    dragging: true,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0,
    attributionControl: false
});

//save the ratio of img dimensions/browser dimensions for point scaling 
//read more here: https://leafletjs.com/examples/crs-simple/crs-simple.html 
//pixel vs map unit 
const widthRatio = 1920 / width;
const heightRatio = 1080 / height;

L.imageOverlay(mapImage, bounds, {
    interactive: true
}).addTo(mapid);

function onMapClick(e) {
    var mapWidth = mapid._container.offsetWidth;
    var mapHeight = mapid._container.offsetHeight;
    console.log('w', e.containerPoint.x * width / mapWidth);
    console.log('h', e.containerPoint.y * height / mapHeight);
    console.log(e.latlng);
    console.log(e);
}

// mapid.on('click', onMapClick);

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

const markers = { pirateShip,
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
};

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

//isotope animations
const $grid = $('.tiles').isotope({
    // options
    itemSelector: '.tile',
    layoutMode: 'fitRows'
});


const selectedTabs = {};
//would use Set but not supported by IE  

//color map obj
//assign via jquery
//assign class to recess button 
const colorMap = {
    toddlers: 'hsl(277, 56%, 66%)',
    everyone: 'hsl(237, 54%, 64%)',
    family: 'hsl(213, 67%, 57%)',
    extreme: 'hsl(174, 53%, 49%)',
    wc: 'hsl(69, 47%, 54%)',
    lockers: 'hsl(40, 90%, 61%)',
    food: 'hsl(30, 90%, 61%)',
    parking: 'hsl(14, 78%, 58%)',
    firstaid: 'hsl(356, 66%, 56%)',
}

const desatColorMap = {
    toddlers: 'hsl(277, 0%, 66%)',
    everyone: 'hsl(237, 0%, 64%)',
    family: 'hsl(213, 0%, 57%)',
    extreme: 'hsl(174, 0%, 49%)',
    wc: 'hsl(69, 0%, 54%)',
    lockers: 'hsl(40, 0%, 61%)',
    food: 'hsl(30, 0%, 61%)',
    parking: 'hsl(14, 0%, 58%)',
    firstaid: 'hsl(356, 0%, 56%)',
}

const selectTab = selection => {
    if (!Object.keys(selectedTabs).length) {
        Object.keys(desatColorMap).forEach(tab => {
            $(`#${tab}`).css({
                'background-color': `${desatColorMap[tab]}`,
            })
        })
        $(`.tab`).addClass('recessed');
    } 
    if (!selectedTabs[selection]) {
        selectedTabs[selection] = selection;
        $(`#${selection}`).css({
            'background-color': `${colorMap[selection]}`,
            'transition': 'background-color 500ms'
        })
        $(`#${selection}`).removeClass('recessed');
    } else {
        delete selectedTabs[selection]
        $(`#${selection}`).css({
            'background-color': `${desatColorMap[selection]}`,
            'transition': 'background-color 500ms'
        })
        $(`#${selection}`).addClass('recessed');
    }
}

const generateFilter = () => {
    return Object.keys(selectedTabs).reduce((filterString, selection) => {
        if (!filterString) {
            filterString = `.${selection}-tile`
        } else {
            filterString = filterString + `, .${selection}-tile`
        }
        return filterString;
    }, '')
}

const filterMap = e => {
    const tabID = e.target.parentNode.id;
    selectTab(tabID)
    const filter = generateFilter();

    if(filter) {
        $grid.isotope({
            filter
        });
    } else {
        $grid.isotope({
            filter: '*'
        });
    }
}

$('.tab').on('click', filterMap);

$('[data-fancybox="images"]').fancybox({
    buttons: [
        'slideShow',
        'share',
        'zoom',
        'fullScreen',
        'close'
    ],
    thumbs: {
        autoStart: true
    }
});

import {
    attractionsByMarker
} from './attractions'

const navToMarker = event => {
    const targetMarker = event.target.dataset.marker;
    const popupContent = generatePopup(targetMarker);
    const popup = L.popup().setContent(popupContent);
    markers[targetMarker].bindPopup(popup, {
        autoPan: false
    }).openPopup('')

    //need to set scroll to top
}

$('.marker-nav').on('click', navToMarker);

//open marker, create popup. 
//need title, need image, type
//pass object through as datapoint 
//store everything in an imported object stored under a key of markerID 
//then target that here
//if certain properties are empty don't display on popup

const generatePopup = targetMarker => {
    const attr = attractionsByMarker[targetMarker];
    const {
            attrType,
            name,
            photoLink,
            videoLink,
            img,
    } = attr;

    return (`
        <section class="popup ${attrType}" >
            <section class="popup-picture" >
                <img src="${img.url}" alt="${img.alt}">
            </section>
            <h3 class="popup-title">${name}</h3>
            <section class="popup-buttons">
                <button class="tile-button" data-photo-link=${photoLink}>☆</button>
                <button class="tile-button" data-video-link=${videoLink}>☆</button>
            </section>
        </section>`)
    };