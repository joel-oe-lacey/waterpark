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
const height = $(window).height();

const latLngCalc = (lat, lng) => {
    // marker is getting offset by the page height, need to work on that bug
    // lat long coords of 0, 0 are 0, pageHeight on container, so this currently accounts for that in coords. 
    // read docs for more details 
    //marker positions to top left, but we want marker over point, so need to adjust for dimensions 
    const latMarkerNorm = 55;
    const lngMarkerNorm = -22;

    // return L.latLng((lat + height + latMarkerNorm), (lng + lngMarkerNorm))
    return L.latLng((lat + height), (lng))
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

    const popupContent = (`
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

    return L.popup().setContent(popupContent);
};


// Toddlers & Kids Markers
const pirateShipPopup = generatePopup('pirateShip');export const pirateShip = L.marker(latLngCalc(500, 285), {
    icon: toddlersIcon,
    pane: 'toddlers'
}).bindPopup(pirateShipPopup, {
    autoPan: false
})

const toddlerSlidePopup = generatePopup('toddlerSlide');
export const toddlerSlide = L.marker(latLngCalc(542, 352), {
    icon: toddlersIcon,
    pane: 'toddlers'
}).bindPopup(toddlerSlidePopup, {
    autoPan: false
})

const toddlerBowlPopup = generatePopup('toddlerBowl');
export const toddlerBowl = L.marker(latLngCalc(321, 1043), {
    icon: toddlersIcon,
    pane: 'toddlers'
}).bindPopup(toddlerBowlPopup, {
    autoPan: false
})

// For Everyone Markers
const lazyRiverPopup = generatePopup('lazyRiver');
export const lazyRiver = L.marker(latLngCalc(554, 116), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(toddlerSlidePopup, {
    autoPan: false
})

const circusPopup = generatePopup('circus');
export const circus = L.marker(latLngCalc(560, 242), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(circusPopup, {
    autoPan: false
})

const pirateLagoonPopup = generatePopup('pirateLagoon');
export const pirateLagoon = L.marker(latLngCalc(486, 236), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(pirateLagoonPopup, {
    autoPan: false
})

const smallLagoonPopup = generatePopup('smallLagoon');
export const smallLagoon = L.marker(latLngCalc(487, 442), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(smallLagoonPopup, {
    autoPan: false
})

const wavepoolPopup = generatePopup('wavepool');
export const wavepool = L.marker(latLngCalc(393, 505), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(wavepoolPopup, {
    autoPan: false
})

const beachPopup = generatePopup('beach');
export const beach = L.marker(latLngCalc(512, 637), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(beachPopup, {
    autoPan: false
})

const flatSlidePopup = generatePopup('flatSlide');
export const flatSlide = L.marker(latLngCalc(419, 718), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(flatSlidePopup, {
    autoPan: false
})

const windSlidePopup = generatePopup('windSlide');
export const windSlide = L.marker(latLngCalc(443, 759), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(windSlidePopup, {
    autoPan: false
})

const funnelShutePopup = generatePopup('funnelShute');
export const funnelShute = L.marker(latLngCalc(407, 948), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(funnelShutePopup, {
    autoPan: false
})

const spiralShutePopup = generatePopup('spiralShute');
export const spiralShute = L.marker(latLngCalc(382, 1092), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(spiralShutePopup, {
    autoPan: false
})

const clamshellPopup = generatePopup('clamshell');
export const clamshell = L.marker(latLngCalc(326, 1196), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(clamshellPopup, {
    autoPan: false
})

const funWallPopup = generatePopup('funWall');
export const funWall = L.marker(latLngCalc(252, 1126), {
    icon: forEveryoneIcon,
    pane: 'everyone'
}).bindPopup(funWallPopup, {
    autoPan: false
})

// Family Slides Markers
const lazyRiverSlidePopup = generatePopup('lazyRiverSlide');
export const lazyRiverSlide = L.marker(latLngCalc(548, 159), {
    icon: familySlideIcon,
    pane: 'family'
}).bindPopup(lazyRiverSlidePopup, {
    autoPan: false
})

const cresentSlidePopup = generatePopup('cresentSlide');
export const cresentSlide = L.marker(latLngCalc(475, 405), {
    icon: familySlideIcon,
    pane: 'family'
}).bindPopup(cresentSlidePopup, {
    autoPan: false
})

// Extreme Slides Markers
const loopSlidePopup = generatePopup('loopSlide');
export const loopSlide = L.marker(latLngCalc(462, 854), {
    icon: extremeIcon,
    pane: 'extreme'
}).bindPopup(loopSlidePopup, {
    autoPan: false
})

const curvySlidePopup = generatePopup('curvySlide');
export const curvySlide = L.marker(latLngCalc(410, 810), {
    icon: extremeIcon,
    pane: 'extreme'
}).bindPopup(curvySlidePopup, {
    autoPan: false
})

const speedSlidePopup = generatePopup('speedSlide');
export const speedSlide = L.marker(latLngCalc(346, 808), {
    icon: extremeIcon,
    pane: 'extreme'
}).bindPopup(speedSlidePopup, {
    autoPan: false
})

const bigSlidePopup = generatePopup('bigSlide');
export const bigSlide = L.marker(latLngCalc(388, 1025), {
    icon: extremeIcon,
    pane: 'extreme'
}).bindPopup(bigSlidePopup, {
    autoPan: false
})

const carouselSlidePopup = generatePopup('carouselSlide');
export const carouselSlide = L.marker(latLngCalc(312, 1318), {
    icon: extremeIcon,
    pane: 'extreme'
}).bindPopup(carouselSlidePopup, {
    autoPan: false
})

// WC Markers
const nwRestroomPopup = generatePopup('nwRestroom');
export const nwRestroom = L.marker(latLngCalc(584, 295), {
    icon: wcIcon,
    pane: 'wc'
}).bindPopup(nwRestroomPopup, {
    autoPan: false
})

const pirateRestroomPopup = generatePopup('pirateRestroom');
export const pirateRestroom = L.marker(latLngCalc(536, 399), {
    icon: wcIcon,
    pane: 'wc'
}).bindPopup(pirateRestroomPopup, {
    autoPan: false
})

const beachRestroomPopup = generatePopup('beachRestroom');
export const beachRestroom = L.marker(latLngCalc(556, 543), {
    icon: wcIcon,
    pane: 'wc'
}).bindPopup(beachRestroomPopup, {
    autoPan: false
})

const centralRestroomPopup = generatePopup('centralRestroom');
export const centralRestroom = L.marker(latLngCalc(455, 588), {
    icon: wcIcon,
    pane: 'wc'
}).bindPopup(centralRestroomPopup, {
    autoPan: false
})

const mainSWRestroomPopup = generatePopup('mainSWRestroom');
export const mainSWRestroom = L.marker(latLngCalc(232, 901), {
    icon: wcIcon,
    pane: 'wc'
}).bindPopup(mainSWRestroomPopup, {
    autoPan: false
})

const mainSERestroomPopup = generatePopup('mainSERestroom');
export const mainSERestroom = L.marker(latLngCalc(258, 1022), {
    icon: wcIcon,
    pane: 'wc'
}).bindPopup(mainSERestroomPopup, {
    autoPan: false
})

// Locker Markers
const NWLockersPopup = generatePopup('NWLockers');
export const NWLockers = L.marker(latLngCalc(587, 326), {
    icon: lockersIcon,
    pane: 'lockers'
}).bindPopup(NWLockersPopup, {
    autoPan: false
})

const SELockersPopup = generatePopup('SELockers');
export const SELockers = L.marker(latLngCalc(269, 974), {
    icon: lockersIcon,
    pane: 'lockers'
}).bindPopup(SELockersPopup, {
    autoPan: false
})

// Restaurant Markers
const centralFoodPopup = generatePopup('centralFood');
export const centralFood = L.marker(latLngCalc(474, 491), {
    icon: foodIcon,
    pane: 'food'
}).bindPopup(centralFoodPopup, {
    autoPan: false
})

const beachFoodPopup = generatePopup('beachFood');
export const beachFood = L.marker(latLngCalc(518, 595), {
    icon: foodIcon,
    pane: 'food'
}).bindPopup(beachFoodPopup, {
    autoPan: false
})

const mainFoodPopup = generatePopup('mainFood');
export const mainFood = L.marker(latLngCalc(221, 843), {
    icon: foodIcon,
    pane: 'food'
}).bindPopup(mainFoodPopup, {
    autoPan: false
})

// Parking Markers 
const mainParkingPopup = generatePopup('mainParking');
export const mainParking = L.marker(latLngCalc(134, 735), {
    icon: parkingIcon,
    pane: 'parking'
}).bindPopup(mainParkingPopup, {
    autoPan: false
})

// First Aid Markers
const mainAidPopup = generatePopup('mainAid');
export const mainAid = L.marker(latLngCalc(313, 918), {
    icon: aidIcon,
    pane: 'firstaid'
}).bindPopup(mainAidPopup, {
    autoPan: false
})