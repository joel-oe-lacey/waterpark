// UTILITY FUNCTIONS

// MARKER PLACEMENT
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

// HTML GENERATION
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

// SCROLLING CONTROL FOR TABS
// const scrollTabs = (event) => {
//     //don't display if position 0, or max
//     const leftBound = 0;
//     const rightBound = $('.tabs-cont').width();
//     console.log('right', rightBound)

//     const button = event.target.id;
//     const position = $('.tabs-cont').scrollLeft();

//     //visibility instead of hidden 
//     if (button === "tab-left") {
//         $(".tabs-cont").animate({
//             scrollLeft: position - 120
//         }, 800);
//     } else if (button === "tab-right") {
//         $(".tabs-cont").animate({
//             scrollLeft: position + 120
//         }, 800);
//     }

//     setTimeout(setTabBtnVisibility(rightBound), 1000)
// }

// const setTabBtnVisibility = (width) => {
//     const position = $('.tabs-cont').scrollLeft();
//     console.log('pos', position)

//     if (position === 0) {
//         $(`#tab-left`).css({
//             'display': `none`,
//         })
//     } else if (position === width) {
//         $(`#tab-right`).css({
//             'display': `none`,
//         })
//     } else {
//         $(`.tab-nav`).css({
//             'display': `inherit`,
//         })
//     }
// }
// $('.tab-nav').on('click', scrollTabs);

//Add this html either side of the tabs-container
{/* <img id="tab-left" class="tab-nav" src="./assets/arrow.svg" alt="left directional arrow"/>
<img id="tab-right" class="tab-nav" src="./assets/arrow.svg" alt="right directional arrow" /> */}

//initial associated styles
// .tab-nav {
//     display: none;
//     object-fit: contain;
//     height: 100%;
//     width: 10%;
// }

// #tab-left {
//     transform: rotate(90deg);
// }

// #tab-right {
//     transform: rotate(-90deg);

//     @media screen and (max-width: 1200px) {
//         display: initial;
//     }
// }

// GRID TILE POSITIONING
//To adjust tile grid positioning, set gutter gaps
//add to html within "tiles"
{/* <div class="gutter-sizer"></div> */}

//add to isotope config
    // fitRows: {
    //     gutter: '.gutter-sizer'
    // }

// add relative styles
// .gutter-sizer {
//     @media (max-width:1400px) and (min-width:1200px) {
//         width: 4%
//     }
// }