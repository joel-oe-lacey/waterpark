// For finding coordinates for placing map markers 
// Reference doc on coordinate normalization 
// function onMapClick(e) {
//     const width = $(window).width();
//     const height = $(window).height();
//     //to calculate location lat, lng
//     const lat = e.latlng.lat;
//     const lng = e.latlng.lng;
//     console.log('mainLatlng', e.latlng)
//     console.log('normalizedCoords', `${lat/height}, ${lng/width}`);
// }

// mapid.on('click', onMapClick);
import {
    attractionsByMarker
} from './attractions'

//To generate HTML for static placement based on generated attractions lists 
const generateTiles = attractions => {
    return Object.keys(attractions).reduce((html, attr) => {
        const {
            attrType,
            name,
            photoLink,
            videoLink,
            img,
            markerName
        } = attractions[attr];

        //replace glyph with respective icon in a mapping table once available
        html = html + `
            <article class="tile ${attrType}-tile">
                <section class="tile-picture">
                    <span class="tile-icon" role="img" aria-label="glyph">☆</span>
                    <img src="${img.url}" alt="${img.alt}">
                </section>
                <h3 class="tile-title">${name}</h3>
                <section class="tile-buttons">
                    <a class="tile-buttons marker-nav" data-marker="${markerName}">☆</a>
                    <a
                        class="tile-buttons"
                        href="${photoLink}" 
                        data-fancybox="images"
                        data-caption="${name}">☆
                    </a>
                    <a 
                        class="tile-buttons" 
                        href="${videoLink}"
                        data-fancybox >☆
                    </a>
                </section>
            </article>`
        
        return html;
    }, '')
}

// console.log(generateTiles(attractionsByMarker))