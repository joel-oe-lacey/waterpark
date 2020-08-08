import './styles-prefixed.less';
import mapImage from './assets/01_1920x1080_Map.jpg';

import './assets/arrow.svg';
import './assets/02_640x426_1.jpg';
import './assets/03_640x426_2.jpg';
import './assets/04_640x426_3.jpg';
import './assets/05_640x426_4.jpg';

const $ = require('jquery');
const jQueryBridget = require('jquery-bridget');
const Isotope = require('isotope-layout');
// join Isotope a jQuery plugin
jQueryBridget('isotope', Isotope, $);
import L from 'leaflet';
// This selector allows fancybox loading 
window.jQuery = $;
const fancybox = require('@fancyapps/fancybox');
const fancyboxCSS = require('@fancyapps/fancybox/dist/jquery.fancybox.css');

let width = $(window).width();
let height = $(window).height();

width = width >= 1200 ? width : 1200;
height = height >= 600 ? height : 600;

//reset bounds a re-render on browser size change? 

const bounds = L.latLngBounds([0, 0], [height, width]);
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

L.imageOverlay(mapImage, bounds, {
    interactive: true,
    zIndex: -1000
}).addTo(mapid);


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
    itemSelector: '.tile',
    layoutMode: 'fitRows',
    percentPosition: true
});

const selectedTabs = {};
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

const navToTiles = () => {
    $('html, body').animate({
        scrollTop: $(".tiles-container").offset().top
    }, 800);
}

$('.tile-hop').on('click', navToTiles)

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

$('[data-fancybox]').fancybox({
    youtube: {
        controls: 0,
        showinfo: 0
    },
    vimeo: {
        color: 'f00'
    }
});

const navToMarker = event => {
    const targetMarker = event.target.dataset.marker;
    markers[targetMarker].openPopup()
    $('html, body').animate({
        scrollTop: $("#map").offset().top
    }, 800);
}

$('.marker-nav').on('click', navToMarker);

// overrides height offset added by leaflet
$('.leaflet-overlay-pane').css({
    "height":`${height}`
})

import './store'