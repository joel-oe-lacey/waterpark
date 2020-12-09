# Setup
This is currently configured with webpack, could be swapped to inline dependencies.
1. Clone down the repo or open locally.
2. Ensure node is installed.
3. "npm install" in the root directory

# Structure
## Map Coordinates
The map is generated using leaflet, though it requires an unconventional approach.

[It utilizes an image overlay to display the map image.](https://leafletjs.com/examples/crs-simple/crs-simple.html)

However typically with leaflet the map would be zoomed by the user, they can scroll out of bounds etc. 

Here we are explicitly setting the map to browser width and disabling zoom. The bounds here are dynamically based on the browser width, with a hardcoded value set under 1200px width. **Might want to change this**

To account for this markers have to be normalized by taking the latitude and longitude of the point and dividing by browser dimensions. There is a tool to do this within util.js. Markers are then plotted off that ratio on load, and normalized for a browser height offset being applied. Map markers are absolutely positioned in CSS to avoid them offseting each other. 

## Integrating Responsive Popup  
Markers in leaflet are designed to display out of bounds and auto-pan for visibility, due to the fixed nature of the map autopan is disabled, so markers need to be manipulated to display within boundaries. [There is a leaflet plugin to handle this.](https://www.npmjs.com/package/leaflet-responsive-popup) or [an alternative Rrose](https://github.com.cnpmjs.org/sephcoster/rrose) depending on how you're bundling. Responsive popup is currently installed. 

## Stacking Context & Positioning Overrides
I don't have a great grasp on stacking contexts, but to offer some background on why positioning overrides and resets are being used in a few places i'll dive into why it seems markers offset each other in their placement. 

It seems that as the image overlay is handled by a transform, this creates a stacking context. As icons by default are position:relative the fact that they are assigned a z-index does not create a stacking context. As a result they all sit on the parent context which is the map itself, offsetting each other. 

This is currently solved by absolutely positioning the markers, creating contexts for them, which allows them to utilize their z-index. This can be seen with a z-index tool such as [this](https://github.com/gwwar/z-context) which displays the z-index as calculated by the browser, and which demonstrates the z-index effectively being triggered once positioning is assigned.

This all creates an issue for popups on chromium or webkit based browsers however who handle stacking contexts differently. To resolve this absolute positioning has to be set on the wrapping popup container to create it's own context and then inline left and bottom styling needs to be overwritten to align to the plotting coordinates.

# Design Decisions
## Responsiveness
General design decisions were targeted around making the page as scalable as possible by default. As a result, relatively few media queries are used. 

Map scaling is calculated off of browser dimensions to provide a more consistent map display. The downside to this approach is browser scaling. I'm not sure on best practice here, but maybe this should be reworked, or a re-render should be done on scale. 

## Horizontal scroll
Originall I had mocked out a scroll capacity with arrows, however after some reading and design testing I found you could always see a portion of the next tab visible on mobile displays to indicate scrollability. [A point discussed here.](https://uxplanet.org/horizontal-scrolling-in-mobile-643c81901af3) Should the arrow approach be desired, those functions are still available in util.js, though they need some tweaking for smoothness and visibility control. 

## Tile sizing & placement
Tile animations and filtering are handled in isotope. As a result, column display and generation is also handled that way. While they offer percentage layouts as an option for a display that might generate fewer white space gaps, in my trials display was too variable, and so fixed dimensions are utilized for the tiles. 

In terms of number of tiles displayed per view, I was unable to size them two across while retaining reability, and so opted for a one across display on mobile. 


# To Do 
Things which need fixing.
1. Bounds limitation for popups to avoid clipping, perhaps via leaflet plugin. 
2. Map scaling debate outlined above.
3. Minor point, but current icon images for map markers taken from psd have a bit of right padding, that could be removed and the .leaflet-marker-icon padding-left adjusted accordingly if desired.
4. What do we want to do when there’s no image or video? Like a WC. Currently if clicked the fancy box link just disappears as that's default functionality. I imagine this should be changed.
5. I wasn't sure if/what testing environment is being used by the team, so there aren't any unit tests, but I'd be happy to put some together in keeping with existing suites. 

## To customize for deployment
### Adding Icons
Once icons are finalized they need to be added to the page for the map tabs, for the tile buttons, and to the respective tiles. 

### Adding attractions
Attractions can be added to the attractions.js file with their relevant information. There is a function in util.js to generate the html template based on all attractions from attractions.js for static use. 
