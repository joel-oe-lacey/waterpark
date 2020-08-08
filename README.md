# Setup
This is currently configured with webpack, could be swapped to inline dependencies.
1. Clone down the repo or open locally.
2. "npm install" in the root directory

## Map Coordinates
The map is generated using leaflet, though it requires an unconventional approach.

[It utilizes an image overlay to display the map image.](https://leafletjs.com/examples/crs-simple/crs-simple.html)

However typically with leaflet the map would be zoomed by the user, they can scroll out of bounds etc. 

Here we are explicitly setting the map to browser width and disabling zoom. The bounds here are dynamically based on the browser width, with a hardcoded value set under 1200px width. **Might want to change this**

To account for this markers have to be normalized by taking the latitude and longitude of the point and dividing by browser dimensions. There is a tool to do this within store.js. Markers are then plotted off that ratio on load, and normalized for a browser height offset being applied. Map markers are absolutely positioned in CSS to avoid them offseting each other. 

## Integrating Responsive Popup  
Markers in leaflet are designed to display out of bounds and auto-pan for visibility, due to the fixed nature of the map autopan is disabled, so markers need to be manipulated to display within boundaries. [There is a leaflet plugin to handle this.](https://www.npmjs.com/package/leaflet-responsive-popup) or [an alternative Rrose](https://github.com.cnpmjs.org/sephcoster/rrose) depending on how you're bundling. Responsive popup is currently installed. 

## Adding attractions
Attractions can be added to the attractions.js file with their relevant information. There is a function in store.js to generate the html template based on all attractions from attractions.js for static use. 

## Adding Icons
Once icons are finalized they need to be added to the page for the map tabs, for the tile buttons, and to the respective tiles. 

## Stacking Context & Positioning Overrides
I don't have a great grasp on stacking contexts, but to offer some background on why positioning overrides and resets are being used in a few places i'll dive into why it seems markers offset each other in their placement. 

It seems that as the image overlay is handled by a transform, this creates a stacking context. As icons by default are position:relative 

# Design Decisions
## Responsiveness
General design decisions were targeted around making the page as scalable as possible by default. As a result, relatively few media queries are used. 

## Horizontal scroll
Originall I had mocked out a scroll capacity with arrows, however after some reading and design testing I found you could always see a portion of the next tab visible on mobile displays to indicate scrollability. [A point discussed here.](https://uxplanet.org/horizontal-scrolling-in-mobile-643c81901af3) Should the arrow approach be desired, those functions are still available in store.js, though they need some tweaking for smoothness and visibility control. 

## Tile sizing & placement
Tile animations and filtering are handled in isotope. As a result, column display and generation is also handled that way. While they offer percentage layouts as an option for a display that might generate fewer white space gaps, in my trials display was too variable, and so fixed dimensions are utilized for the tiles. 

In terms of number of tiles displayed per view, I was unable to size them two across while retaining reability, and so opted for a one across display on mobile. 

