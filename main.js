import './styles.less';
import mapImage from './assets/01_1920x1080_Map.jpg';

import './assets/arrow.svg';
import './assets/02_640x426_1.jpg';
import './assets/03_640x426_2.jpg';
import './assets/04_640x426_3.jpg';
import './assets/05_640x426_4.jpg';

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

//if width under certain size, set a fixed height and width 
// what if someone rescales?  
const width = $(window).width();
const height = $(window).height();

// console.log('w', width)
// console.log('h', height)

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
    attributionControl: false,
    doubleClickZoom: false
});

//save the ratio of img dimensions/browser dimensions for point scaling 
//read more here: https://leafletjs.com/examples/crs-simple/crs-simple.html 
//pixel vs map unit 
const widthRatio = 1920 / width;
const heightRatio = 1080 / height;

//zindex set for firefox container variation 
L.imageOverlay(mapImage, bounds, {
    interactive: true,
    zIndex: -1000
}).addTo(mapid);

function onMapClick(e) {
    //to calculate location lat, lng
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;
    console.log('mainLatlng', e.latlng)
    console.log('normalizedCoords', `${lat/height}, ${lng/width}`);
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
mapid.createPane('firstaid')

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
    mainAid,
    testMarker
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

const markerGroup = L.layerGroup([pirateShip,
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
])

markerGroup
.eachLayer(function (layer) {
    layer.setZIndexOffset(800);
})
.addTo(mapid);

//isotope animations
const $grid = $('.tiles').isotope({
    // options
    itemSelector: '.tile',
    layoutMode: 'fitRows'
});


//would use Set but not supported by IE  
const selectedTabs = {};

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
    //On first click unselect all buttons and markers
    if (!Object.keys(selectedTabs).length) {
        Object.keys(desatColorMap).forEach(tab => {
            $(`#${tab}`).css({
                'background-color': `${desatColorMap[tab]}`,
            })
            $(`.leaflet-${tab}-pane`).css({
                'display': `none`,
            })
        })
        $(`.tab`).addClass('recessed');
    } 

    //on initial and subsequent clicks unselect and reselect buttons and markers
    //using display: none for the pane over removing the whole feature group is more performant
    if (!selectedTabs[selection]) {
        selectedTabs[selection] = selection;
        $(`#${selection}`).css({
            'background-color': `${colorMap[selection]}`,
            'transition': 'background-color 500ms'
        })
        $(`.leaflet-${selection}-pane`).css({
            'display': `initial`,
        })
        $(`#${selection}`).removeClass('recessed');
    } else {
        delete selectedTabs[selection]
        $(`#${selection}`).css({
            'background-color': `${desatColorMap[selection]}`,
            'transition': 'background-color 500ms'
        })
        $(`.leaflet-${selection}-pane`).css({
            'display': `none`,
        })
        $(`#${selection}`).addClass('recessed');
    }
}

//create isotope filter based on classname selector
//https://isotope.metafizzy.co/filtering.html
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
        //change this case to something less redundant? 
        $grid.isotope({
            filter: 'none'
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
    markers[targetMarker].openPopup()

    //need to set scroll to top
}

$('.marker-nav').on('click', navToMarker);

//scrolling controls for tabs 
const scrollTabs = (event) => {
    //don't display if position 0, or max
    const leftBound = 0;
    const rightBound = $('.tabs-cont').width();
    console.log('right', rightBound)

    const button = event.target.id;
    const position = $('.tabs-cont').scrollLeft();

    //visibility instead of hidden 
    if (button === "tab-left") {
        $(".tabs-cont").animate({
            scrollLeft: position - 120
        }, 800);
    } else if (button === "tab-right") {
        $(".tabs-cont").animate({
            scrollLeft: position + 120
        }, 800);
    }

    setTimeout(setTabBtnVisibility(rightBound), 1000)
}

const setTabBtnVisibility = (width) => {
    const position = $('.tabs-cont').scrollLeft();
    console.log('pos', position)

    if (position === 0) {
        $(`#tab-left`).css({
            'display': `none`,
        })
    } else if (position === width) {
        $(`#tab-right`).css({
            'display': `none`,
        })
    } else {
        $(`.tab-nav`).css({
            'display': `inherit`,
        })
    }
}

$('.tab-nav').on('click', scrollTabs);

//overrides random height offset added by leaflet
$('.leaflet-overlay-pane').css({
    "height":`${height}`
})
