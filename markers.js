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


//All of these markers are scaled for 1400 x 725 dimensions
//adjust everything off that base or scale down to base 1000 and then that'll make for an easier calc 

const latLngCalc = (lat, lng) => {
    // marker is getting offset by the page height, need to work on that bug
    // lat long coords of 0, 0 are 0, pageHeight on container, so this currently accounts for that in coords. 
    // read docs for more details 
    //marker positions to top left, but we want marker over point, so need to adjust for dimensions 
    const height = $(window).height();
    const width = $(window).width();

    //take lat, div by 1440
    //take lng, div by 725 
    //then take input height and width and multiply 


    return L.latLng(((lat * height) + height), (lng * width))
    // return L.latLng(((lat) + height), (lng))
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
    const popupContent = (`
        <section class="popup ${attrType}" >
            <section class="popup-picture" >
                <img src="${img.url}" alt="${img.alt}">
            </section>
            <h3 class="popup-title">${name}</h3>
            <section class="popup-buttons">
                <button class="tile-button" data-photo-link=${photoLink}>☆ Photo Gallery</button>
                <button class="tile-button" data-video-link=${videoLink}>☆ Video Gallery</button>
            </section>
        </section>`)

    return L.popup().setContent(popupContent);
};


// Toddlers & Kids Markers
const pirateShipPopup = generatePopup('pirateShip');
export const pirateShip = L.marker(latLngCalc(0.6896551724137931, 0.19791666666666666), {
    icon: toddlersIcon,
    zIndexOffset: 600,
    pane: 'toddlers'
}).bindPopup(pirateShipPopup, {
    autoPan: false,
})

const toddlerSlidePopup = generatePopup('toddlerSlide');
export const toddlerSlide = L.marker(latLngCalc(0.7475862068965518, 0.24444444444444444), {
    icon: toddlersIcon,
    pane: 'toddlers'
}).bindPopup(toddlerSlidePopup, {
    autoPan: false
})

const toddlerBowlPopup = generatePopup('toddlerBowl');
export const toddlerBowl = L.marker(latLngCalc(0.44275862068965516, 0.7243055555555555), {
    icon: toddlersIcon,
    pane: 'toddlers'
}).bindPopup(toddlerBowlPopup, {
    autoPan: false
})

// For Everyone Markers
const lazyRiverPopup = generatePopup('lazyRiver');
export const lazyRiver = L.marker(latLngCalc(0.7641379310344828, 0.08055555555555556), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(lazyRiverPopup, {
    autoPan: false
})

const circusPopup = generatePopup('circus');
export const circus = L.marker(latLngCalc(0.7724137931034483, 0.16805555555555557), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(circusPopup, {
    autoPan: false
})

const pirateLagoonPopup = generatePopup('pirateLagoon');
export const pirateLagoon = L.marker(latLngCalc(0.670344827586207, 0.1638888888888889), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(pirateLagoonPopup, {
    autoPan: false
})

const smallLagoonPopup = generatePopup('smallLagoon');
export const smallLagoon = L.marker(latLngCalc(0.6717241379310345, 0.30694444444444446), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(smallLagoonPopup, {
    autoPan: false
})

const wavepoolPopup = generatePopup('wavepool');
export const wavepool = L.marker(latLngCalc(0.5420689655172414, 0.3506944444444444), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(wavepoolPopup, {
    autoPan: false
})

const beachPopup = generatePopup('beach');
export const beach = L.marker(latLngCalc(0.7062068965517241, 0.4423611111111111), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(beachPopup, {
    autoPan: false
})

const flatSlidePopup = generatePopup('flatSlide');
export const flatSlide = L.marker(latLngCalc(0.5779310344827586, 0.4986111111111111), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(flatSlidePopup, {
    autoPan: false
})

const windSlidePopup = generatePopup('windSlide');
export const windSlide = L.marker(latLngCalc(0.6110344827586207, 0.5270833333333333), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(windSlidePopup, {
    autoPan: false
})

const funnelShutePopup = generatePopup('funnelShute');
export const funnelShute = L.marker(latLngCalc(0.5613793103448276, 0.6583333333333333), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(funnelShutePopup, {
    autoPan: false
})

const spiralShutePopup = generatePopup('spiralShute');
export const spiralShute = L.marker(latLngCalc(0.526896551724138, 0.7583333333333333), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(spiralShutePopup, {
    autoPan: false
})

const clamshellPopup = generatePopup('clamshell');
export const clamshell = L.marker(latLngCalc(0.4496551724137931, 0.8305555555555556), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(clamshellPopup, {
    autoPan: false
})

const funWallPopup = generatePopup('funWall');
export const funWall = L.marker(latLngCalc(0.34758620689655173, 0.7819444444444444), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(funWallPopup, {
    autoPan: false
})

// Family Slides Markers
const lazyRiverSlidePopup = generatePopup('lazyRiverSlide');
export const lazyRiverSlide = L.marker(latLngCalc(0.7558620689655172, 0.11041666666666666), {
    icon: familySlideIcon,
    pane: 'family'
}).bindPopup(lazyRiverSlidePopup, {
    autoPan: false
})

const cresentSlidePopup = generatePopup('cresentSlide');
export const cresentSlide = L.marker(latLngCalc(0.6551724137931034, 0.28125), {
    icon: familySlideIcon,
    pane: 'family'
}).bindPopup(cresentSlidePopup, {
    autoPan: false
})

// Extreme Slides Markers
const loopSlidePopup = generatePopup('loopSlide');
export const loopSlide = L.marker(latLngCalc(0.6372413793103449, 0.5930555555555556), {
    icon: extremeIcon,
    pane: 'extreme'
}).bindPopup(loopSlidePopup, {
    autoPan: false
})

const curvySlidePopup = generatePopup('curvySlide');
export const curvySlide = L.marker(latLngCalc(0.5655172413793104, 0.5625), {
    icon: extremeIcon,
    pane: 'extreme'
}).bindPopup(curvySlidePopup, {
    autoPan: false
})

const speedSlidePopup = generatePopup('speedSlide');
export const speedSlide = L.marker(latLngCalc(0.4772413793103448, 0.5611111111111111), {
    icon: extremeIcon,
    pane: 'extreme'
}).bindPopup(speedSlidePopup, {
    autoPan: false
})

const bigSlidePopup = generatePopup('bigSlide');
export const bigSlide = L.marker(latLngCalc(0.5351724137931034, 0.7118055555555556), {
    icon: extremeIcon,
    pane: 'extreme'
}).bindPopup(bigSlidePopup, {
    autoPan: false
})

const carouselSlidePopup = generatePopup('carouselSlide');
export const carouselSlide = L.marker(latLngCalc(0.4303448275862069, 0.9152777777777777), {
    icon: extremeIcon,
    pane: 'extreme'
}).bindPopup(carouselSlidePopup, {
    autoPan: false
})

// WC Markers
const nwRestroomPopup = generatePopup('nwRestroom');
export const nwRestroom = L.marker(latLngCalc(0.8055172413793104, 0.2048611111111111), {
    icon: wcIcon,
    pane: 'wc'
}).bindPopup(nwRestroomPopup, {
    autoPan: false
})

const pirateRestroomPopup = generatePopup('pirateRestroom');
export const pirateRestroom = L.marker(latLngCalc(0.7393103448275862, 0.27708333333333335), {
    icon: wcIcon,
    pane: 'wc'
}).bindPopup(pirateRestroomPopup, {
    autoPan: false
})

const beachRestroomPopup = generatePopup('beachRestroom');
export const beachRestroom = L.marker(latLngCalc(0.766896551724138, 0.3770833333333333), {
    icon: wcIcon,
    pane: 'wc'
}).bindPopup(beachRestroomPopup, {
    autoPan: false
})

const centralRestroomPopup = generatePopup('centralRestroom');
export const centralRestroom = L.marker(latLngCalc(0.6275862068965518, 0.4083333333333333), {
    icon: wcIcon,
    pane: 'wc'
}).bindPopup(centralRestroomPopup, {
    autoPan: false
})

const mainSWRestroomPopup = generatePopup('mainSWRestroom');
export const mainSWRestroom = L.marker(latLngCalc(0.32, 0.6256944444444444), {
    icon: wcIcon,
    pane: 'wc'
}).bindPopup(mainSWRestroomPopup, {
    autoPan: false
})

const mainSERestroomPopup = generatePopup('mainSERestroom');
export const mainSERestroom = L.marker(latLngCalc(0.35586206896551725, 0.7097222222222223), {
    icon: wcIcon,
    pane: 'wc'
}).bindPopup(mainSERestroomPopup, {
    autoPan: false
})

// Locker Markers
const NWLockersPopup = generatePopup('NWLockers');
export const NWLockers = L.marker(latLngCalc(0.8096551724137931, 0.2263888888888889), {
    icon: lockersIcon,
    pane: 'lockers'
}).bindPopup(NWLockersPopup, {
    autoPan: false
})

const SELockersPopup = generatePopup('SELockers');
export const SELockers = L.marker(latLngCalc(0.37103448275862067, 0.6763888888888889), {
    icon: lockersIcon,
    pane: 'lockers'
}).bindPopup(SELockersPopup, {
    autoPan: false
})

// Restaurant Markers
const centralFoodPopup = generatePopup('centralFood');
export const centralFood = L.marker(latLngCalc(0.6537931034482759, 0.34097222222222223), {
    icon: foodIcon,
    zIndexOffset: 600,
    pane: 'food'
}).bindPopup(centralFoodPopup, {
    autoPan: false
})

const beachFoodPopup = generatePopup('beachFood');
export const beachFood = L.marker(latLngCalc(0.7144827586206897, 0.4131944444444444), {
    icon: foodIcon,
    pane: 'food'
}).bindPopup(beachFoodPopup, {
    autoPan: false
})

const mainFoodPopup = generatePopup('mainFood');
export const mainFood = L.marker(latLngCalc(0.30482758620689654, 0.5854166666666667), {
    icon: foodIcon,
    pane: 'food'
}).bindPopup(mainFoodPopup, {
    autoPan: false
})

// Parking Markers 
const mainParkingPopup = generatePopup('mainParking');
export const mainParking = L.marker(latLngCalc(0.18482758620689654, 0.5104166666666666), {
    icon: parkingIcon,
    pane: 'parking'
}).bindPopup(mainParkingPopup, {
    autoPan: false
})

// First Aid Markers
const mainAidPopup = generatePopup('mainAid');
export const mainAid = L.marker(latLngCalc(0.4317241379310345, 0.6375), {
    icon: aidIcon,
    pane: 'firstaid'
}).bindPopup(mainAidPopup, {
    autoPan: false
})