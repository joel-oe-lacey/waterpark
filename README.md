# Interactive Park Map 
## Introduction
This is an interactive map, utilizing a static image mapping overlay, created as part of a contract.

It is designed for the consumer to modify in several places, touched upon in some documentation below. Placeholders are currently used for most visual elements: for map locations, images, ride types, and plotted points. A star glyph (☆) is currently present as a placeholder for user icons. 

![landing](https://joel-oe-lacey-resources.s3.amazonaws.com/waterpark.png)
### [Staging Display](https://joel-oe-lacey.github.io/waterpark/)

### Libraries Utilized
- jQuery 
  - Handles the bulk of functionality
- Leaflet
  - Handles the coordinate system and popup plotting and interaction
- Fancybox
  - Handles interactive video and image displays
- Isotope
  - Handles tile filtering and corresponding filtering animations
- LESS 
  - Styling is all handled utilizing LESS and a prefixer for added browser compatibility where not explicitly set. 

# Documentation
## Structural Design Decisions
### Map Coordinates
The map is generated using leaflet, though it required an unconventional approach.

[It utilizes an image overlay to display the map image.](https://leafletjs.com/examples/crs-simple/crs-simple.html)

However typically with leaflet, the map would be zoomed by the user, they can scroll out of bounds etc. 

Here we are explicitly setting the map to browser width and disabling zoom. The bounds here are dynamically based on the browser width, with a hardcoded value set under 1200px width. **Might want to change this**

To account for this markers have to be normalized by taking the latitude and longitude of the point and dividing by browser dimensions. There is a tool to do this within util.js. Markers are then plotted off that ratio on load, and normalized for a browser height offset being applied. Map markers are absolutely positioned in CSS to avoid them offseting each other. 

### Integrating Responsive Popup  
Markers in leaflet are designed to display out of bounds and auto-pan for visibility, due to the fixed nature of the map autopan is disabled, so markers need to be manipulated to display within boundaries. [There is a leaflet plugin to handle this.](https://www.npmjs.com/package/leaflet-responsive-popup) or [an alternative Rrose](https://github.com.cnpmjs.org/sephcoster/rrose) depending on how you're bundling. Responsive popup is currently installed, but not yet integrated as this approach might not be compatible with the desired bundling process. 

### Stacking Context & Positioning Overrides
The map ran into some initial issues with stacking context. To offer some background on why positioning overrides and resets are being used in a few places i'll dive into why it seems markers offset each other in their placement. 

It seems that as the image overlay is handled by a transform, this creates a stacking context. As icons by default are position:relative the fact that they are assigned a z-index does not create a stacking context. As a result they all sit on the parent context which is the map itself, offsetting each other, instead of remaining constrained to their own layers. 

This is currently solved by absolutely positioning the markers, creating contexts for them, which allows them to utilize their z-index. This can be seen with a z-index tool such as [this](https://github.com/gwwar/z-context) which displays the z-index as calculated by the browser, and which demonstrates the z-index effectively being triggered once positioning is assigned.

This all creates an issue for popups on chromium or webkit based browsers however, who handle stacking contexts differently. To resolve this absolute positioning has to be set on the wrapping popup container to create it's own context and then inline left and bottom styling needs to be overwritten to align to the plotting coordinates.

## Stylistic Design Decisions
### Responsiveness
General design decisions were targeted around making the page as scalable as possible by default. As a result, relatively few media queries are used. 

Map scaling is calculated off of browser dimensions on initial load to provide a more consistent map display accross a range of viewports. The downside to this approach is browser scaling. Depending on preference, this should be perhaps be reworked, or a re-render should be done on re-scale. 

### Horizontal scroll
Originally I had mocked out a scroll interface with arrows for the map tabs, however after some reading and design testing I found you could always see a portion of the next tab visible on mobile displays to indicate scrollability. [A point discussed here.](https://uxplanet.org/horizontal-scrolling-in-mobile-643c81901af3) Should the arrow approach be desired, those functions are still available in util.js, though they need some tweaking for smoothness and visibility control. 

### Tile sizing & placement
Tile animations and filtering are handled in isotope. As a result, column display and generation is also handled that way. While they offer percentage layouts as an option for a display that might generate fewer white space gaps, in my trials display was too variable, and so fixed dimensions are utilized for the tiles. 

In terms of number of tiles displayed per view, I was unable to size them two across while retaining reability, and so opted for a one across display on mobile. 

## To customize for deployment
### Adding Attractions
Attractions can be added to the attractions.js file with their relevant information. There is a function in util.js to generate the html template based on all attractions from attractions.js for static use. 

### Finding Desired Map Coordinates
As mentioned, there is a function available in util.js for logging coordinates based on click interaction, which can then be utilized to plot points as desired. 

### Modifying Map Data
Markers, Icons and Popups and Map Layers all follow typical Leaflet structure for their creation, they are each contained within their own JS files. Documentation for each Leaflet item is [well outlined on the Leaflet site](https://leafletjs.com/reference-1.7.1.html). 

## To Do 
Map improvements to be implimented.
1. Bounds limitation for popups to avoid clipping, perhaps via leaflet plugin. 
2. Map scaling debate outlined above.
3. As I didn't hear back on what testing environment is being used by the team, if one is being used, there aren't any unit tests. This a point of attention to be addressed before deployment. 
