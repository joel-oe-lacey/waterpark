import {
    aidIcon,
    extremeIcon,
    familySlideIcon,
    forEveryoneIcon,
    foodIcon,
    lockersIcon,
    parkingIcon,
    toddlersIcon,
    wcIcon
} from './icons';

import {
    attractionsByMarker
} from './attractions'

import $ from 'jquery';

const latLngCalc = (lat, lng) => {
    // markers are offset by the page height, so that is normalized below 
    let height = $(window).height();
    let width = $(window).width();
    width = width >= 1200 ? width : 1200;
    height = height > 600 ? height : 600;

    return L.latLng(((lat * height) + height), (lng * width))
}

const generatePopup = targetMarker => {
    const attr = attractionsByMarker[targetMarker];
    const {
        attrType,
        name,
        photoLink,
        videoLink,
        img,
    } = attr;

    //styling can be altered by attrType if you want type specific popup design 
    //add photos & videos to their respective objects under attractions to populate the fancybox links 
    const popupContent = (`
        <section class="popup ${attrType}" >
            <section class="popup-picture" >
                <img src="${img.url}" alt="${img.alt}">
            </section>
            <h3 class="popup-title">${name}</h3>
            <section class="popup-buttons">
                <a
                    class="tile-buttons"
                    href="${img.url}" data-fancybox="images"
                    data-caption="${name}">☆ Photo Gallery
                </a>
                <a 
                    class="tile-buttons" 
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    data-fancybox >☆ Video Gallery
                </a>
            </section>
        </section>`)

    return L.popup({
        closeButton: false,
        autoPan: false,
    }).setContent(popupContent);
};

// Toddlers & Kids Markers
const pirateShipPopup = generatePopup('pirateShip');
export const pirateShip = L.marker(latLngCalc(0.6896551724137931, 0.19791666666666666), {
    icon: toddlersIcon,
    pane: 'toddlers'
}).bindPopup(pirateShipPopup)

const toddlerSlidePopup = generatePopup('toddlerSlide');
export const toddlerSlide = L.marker(latLngCalc(0.7475862068965518, 0.24444444444444444), {
    icon: toddlersIcon,
    pane: 'toddlers'
}).bindPopup(toddlerSlidePopup)

const toddlerBowlPopup = generatePopup('toddlerBowl');
export const toddlerBowl = L.marker(latLngCalc(0.44275862068965516, 0.7243055555555555), {
    icon: toddlersIcon,
    pane: 'toddlers'
}).bindPopup(toddlerBowlPopup)

// For Everyone Markers
const lazyRiverPopup = generatePopup('lazyRiver');
export const lazyRiver = L.marker(latLngCalc(0.7641379310344828, 0.08055555555555556), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(lazyRiverPopup)

const circusPopup = generatePopup('circus');
export const circus = L.marker(latLngCalc(0.7724137931034483, 0.16805555555555557), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(circusPopup)

const pirateLagoonPopup = generatePopup('pirateLagoon');
export const pirateLagoon = L.marker(latLngCalc(0.670344827586207, 0.1638888888888889), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(pirateLagoonPopup)

const smallLagoonPopup = generatePopup('smallLagoon');
export const smallLagoon = L.marker(latLngCalc(0.6717241379310345, 0.30694444444444446), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(smallLagoonPopup)

const wavepoolPopup = generatePopup('wavepool');
export const wavepool = L.marker(latLngCalc(0.5420689655172414, 0.3506944444444444), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(wavepoolPopup)

const beachPopup = generatePopup('beach');
export const beach = L.marker(latLngCalc(0.7062068965517241, 0.4423611111111111), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(beachPopup)

const flatSlidePopup = generatePopup('flatSlide');
export const flatSlide = L.marker(latLngCalc(0.5779310344827586, 0.4986111111111111), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(flatSlidePopup)

const windSlidePopup = generatePopup('windSlide');
export const windSlide = L.marker(latLngCalc(0.6110344827586207, 0.5270833333333333), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(windSlidePopup)

const funnelShutePopup = generatePopup('funnelShute');
export const funnelShute = L.marker(latLngCalc(0.5613793103448276, 0.6583333333333333), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(funnelShutePopup)

const spiralShutePopup = generatePopup('spiralShute');
export const spiralShute = L.marker(latLngCalc(0.526896551724138, 0.7583333333333333), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(spiralShutePopup)

const clamshellPopup = generatePopup('clamshell');
export const clamshell = L.marker(latLngCalc(0.4496551724137931, 0.8305555555555556), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(clamshellPopup)

const funWallPopup = generatePopup('funWall');
export const funWall = L.marker(latLngCalc(0.34758620689655173, 0.7819444444444444), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(funWallPopup)

// Family Slides Markers
const lazyRiverSlidePopup = generatePopup('lazyRiverSlide');
export const lazyRiverSlide = L.marker(latLngCalc(0.7558620689655172, 0.11041666666666666), {
    icon: familySlideIcon,
    pane: 'family'
}).bindPopup(lazyRiverSlidePopup)

const cresentSlidePopup = generatePopup('cresentSlide');
export const cresentSlide = L.marker(latLngCalc(0.6551724137931034, 0.28125), {
    icon: familySlideIcon,
    pane: 'family'
}).bindPopup(cresentSlidePopup)

// Extreme Slides Markers
const loopSlidePopup = generatePopup('loopSlide');
export const loopSlide = L.marker(latLngCalc(0.6372413793103449, 0.5930555555555556), {
    icon: extremeIcon,
    pane: 'extreme'
}).bindPopup(loopSlidePopup)

const curvySlidePopup = generatePopup('curvySlide');
export const curvySlide = L.marker(latLngCalc(0.5655172413793104, 0.5625), {
    icon: extremeIcon,
    pane: 'extreme'
}).bindPopup(curvySlidePopup)

const speedSlidePopup = generatePopup('speedSlide');
export const speedSlide = L.marker(latLngCalc(0.4772413793103448, 0.5611111111111111), {
    icon: extremeIcon,
    pane: 'extreme'
}).bindPopup(speedSlidePopup)

const bigSlidePopup = generatePopup('bigSlide');
export const bigSlide = L.marker(latLngCalc(0.5351724137931034, 0.7118055555555556), {
    icon: extremeIcon,
    pane: 'extreme'
}).bindPopup(bigSlidePopup)

const carouselSlidePopup = generatePopup('carouselSlide');
export const carouselSlide = L.marker(latLngCalc(0.4303448275862069, 0.9152777777777777), {
    icon: extremeIcon,
    pane: 'extreme'
}).bindPopup(carouselSlidePopup)

// WC Markers
const nwRestroomPopup = generatePopup('nwRestroom');
export const nwRestroom = L.marker(latLngCalc(0.8055172413793104, 0.2048611111111111), {
    icon: wcIcon,
    pane: 'wc'
}).bindPopup(nwRestroomPopup)

const pirateRestroomPopup = generatePopup('pirateRestroom');
export const pirateRestroom = L.marker(latLngCalc(0.7393103448275862, 0.27708333333333335), {
    icon: wcIcon,
    pane: 'wc'
}).bindPopup(pirateRestroomPopup)

const beachRestroomPopup = generatePopup('beachRestroom');
export const beachRestroom = L.marker(latLngCalc(0.766896551724138, 0.3770833333333333), {
    icon: wcIcon,
    pane: 'wc'
}).bindPopup(beachRestroomPopup)

const centralRestroomPopup = generatePopup('centralRestroom');
export const centralRestroom = L.marker(latLngCalc(0.6275862068965518, 0.4083333333333333), {
    icon: wcIcon,
    pane: 'wc'
}).bindPopup(centralRestroomPopup)

const mainSWRestroomPopup = generatePopup('mainSWRestroom');
export const mainSWRestroom = L.marker(latLngCalc(0.32, 0.6256944444444444), {
    icon: wcIcon,
    pane: 'wc'
}).bindPopup(mainSWRestroomPopup)

const mainSERestroomPopup = generatePopup('mainSERestroom');
export const mainSERestroom = L.marker(latLngCalc(0.35586206896551725, 0.7097222222222223), {
    icon: wcIcon,
    pane: 'wc'
}).bindPopup(mainSERestroomPopup)

// Locker Markers
const NWLockersPopup = generatePopup('NWLockers');
export const NWLockers = L.marker(latLngCalc(0.8096551724137931, 0.2263888888888889), {
    icon: lockersIcon,
    pane: 'lockers'
}).bindPopup(NWLockersPopup)

const SELockersPopup = generatePopup('SELockers');
export const SELockers = L.marker(latLngCalc(0.37103448275862067, 0.6763888888888889), {
    icon: lockersIcon,
    pane: 'lockers'
}).bindPopup(SELockersPopup)

// Restaurant Markers
const centralFoodPopup = generatePopup('centralFood');
export const centralFood = L.marker(latLngCalc(0.6537931034482759, 0.34097222222222223), {
    icon: foodIcon,
    pane: 'food'
}).bindPopup(centralFoodPopup)

const beachFoodPopup = generatePopup('beachFood');
export const beachFood = L.marker(latLngCalc(0.7144827586206897, 0.4131944444444444), {
    icon: foodIcon,
    pane: 'food'
}).bindPopup(beachFoodPopup)

const mainFoodPopup = generatePopup('mainFood');
export const mainFood = L.marker(latLngCalc(0.30482758620689654, 0.5854166666666667), {
    icon: foodIcon,
    pane: 'food'
}).bindPopup(mainFoodPopup)

// Parking Markers 
const mainParkingPopup = generatePopup('mainParking');
export const mainParking = L.marker(latLngCalc(0.18482758620689654, 0.5104166666666666), {
    icon: parkingIcon,
    pane: 'parking'
}).bindPopup(mainParkingPopup)

// First Aid Markers
const mainAidPopup = generatePopup('mainAid');
export const mainAid = L.marker(latLngCalc(0.4317241379310345, 0.6375), {
    icon: aidIcon,
    pane: 'firstaid'
}).bindPopup(mainAidPopup)