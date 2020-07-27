import {
    testIcon,
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


// Toddlers & Kids Markers
export const pirateShip = L.marker(latLngCalc(500, 285), {
    icon: toddlersIcon,
    pane: 'toddlers'
})

export const toddlerSlide = L.marker(latLngCalc(542, 352), {
    icon: toddlersIcon,
    pane: 'toddlers'
})

// For Everyone Markers
export const lazyRiver = L.marker(latLngCalc(554, 116), {
    icon: forEveryoneIcon,
    pane: 'everyone'
})

export const circus = L.marker(latLngCalc(560, 242), {
    icon: forEveryoneIcon,
    pane: 'everyone'
})

export const pirateLagoon = L.marker(latLngCalc(486, 236), {
    icon: forEveryoneIcon,
    pane: 'everyone'
})

export const smallLagoon = L.marker(latLngCalc(487, 442), {
    icon: forEveryoneIcon,
    pane: 'everyone'
})

export const wavepool = L.marker(latLngCalc(393, 505), {
    icon: forEveryoneIcon,
    pane: 'everyone'
})

export const beach = L.marker(latLngCalc(512, 637), {
    icon: forEveryoneIcon,
    pane: 'everyone'
})

export const flatSlide = L.marker(latLngCalc(419, 718), {
    icon: forEveryoneIcon,
    pane: 'everyone'
})

export const windSlide = L.marker(latLngCalc(443, 759), {
    icon: forEveryoneIcon,
    pane: 'everyone'
})

export const funnelShute = L.marker(latLngCalc(407, 948), {
    icon: forEveryoneIcon,
    pane: 'everyone'
})

export const spiralShute = L.marker(latLngCalc(382, 1092), {
    icon: forEveryoneIcon,
    pane: 'everyone'
})

export const clamshell = L.marker(latLngCalc(326, 1196), {
    icon: forEveryoneIcon,
    pane: 'everyone'
})

export const funWall = L.marker(latLngCalc(252, 1126), {
    icon: forEveryoneIcon,
    pane: 'everyone'
})

// Family Slides Markers
export const lazyRiverSlide = L.marker(latLngCalc(548, 159), {
    icon: familySlideIcon,
    pane: 'family'
})

export const cresentSlide = L.marker(latLngCalc(475, 405), {
    icon: familySlideIcon,
    pane: 'family'
})