window.L = require('Leaflet/dist/leaflet-src');
window.L.Icon.Default.imagePath = 'http://api.tiles.mapbox.com/mapbox.js/' + 'v' + require('./package.json').version + '/images';

L.npmap = module.exports = {
    VERSION: require('./package.json').version
    /*
    ,
    geocoder: require('./src/geocoder'),
    marker: require('./src/marker'),
    tileLayer: require('./src/tile_layer'),
    legendControl: require('./src/legend_control'),
    geocoderControl: require('./src/geocoder_control'),
    gridControl: require('./src/grid_control'),
    gridLayer: require('./src/grid_layer'),
    markerLayer: require('./src/marker_layer'),
    map: require('./src/map'),
    config: require('./src/config')
    */
};