const indexAttractions = () => {
    return Object.keys(selectedAttractions).reduce((visibleAttractions, attrType) => {
        visibleAttractions = [...visibleAttractions, ...selectedAttractions[attrType]]
        return visibleAttractions;
    }, [])
}

const generateTiles = attractions => {
    return attractions.map(attr => {
        const {
            attrType,
            name,
            photoLink,
            videoLink,
            img,
            markerName
        } = attr;
        const color = colorMap[attrType];

        return (`
        <section class="tile">
            <section class="tile-picture" style="border-bottom: 2px solid ${color}">
                <span class="tile-icon" role="img" aria-label="glyph" style="color:${color}">☆</span>
                <img src='${img.url}' alt="${img.alt}">
            </section>
            <h3 class="tile-title" style="color:${color}">${name}</h3>
            <section class="tile-buttons">
                <button class="tile-button" data-marker=${markerName}>☆</button>
                <button class="tile-button" data-photo-link=${photoLink}>☆</button>
                <button class="tile-button" data-video-link=${videoLink}>☆</button>
            </section>
        </section>`)
    })
}