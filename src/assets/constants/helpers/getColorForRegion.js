
function getColorForRegion(region) {
    //const colorRegion = countries.map.continents

    switch (region) {
        case 'Africa':
            return 'blue';
        case 'Americas':
            return 'green';
        case 'Asia':
            return 'red';
        case 'Europe':
            return 'yellow';
        case 'Oceania':
            return 'purple';
        default:
            return 'black';
    }
}
export default getColorForRegion