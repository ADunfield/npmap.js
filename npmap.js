/* global L */

var version = require('./package.json').version;

window.L.Icon.Default.imagePath = 'http://d1smq4hh6dg11v.cloudfront.net/npmap.js/' + version + '/images';

L.npmap = module.exports = {
  VERSION: version,
  control: {
    edit: require('./src/control/edit'),
    fullscreen: require('./src/control/fullscreen'),
    geocoder: require('./src/control/geocoder'),
    home: require('./src/control/home'),
    legend: require('./src/control/legend'),
    locate: require('./src/control/locate'),
    measure: require('./src/control/measure'),
    overview: require('./src/control/overview'),
    print: require('./src/control/print'),
    scale: require('./src/control/scale'),
    share: require('./src/control/share'),
    smallzoom: require('./src/control/smallzoom'),
    switcher: require('./src/control/switcher')
  },
  icon: {
    maki: require('./src/icon/maki'),
    npmaki: require('./src/icon/npmaki')
  },
  layer: {
    _cluster: require('./src/layer/cluster'),
    arcgisserver: {
      dynamic: require('./src/layer/arcgisserver/dynamic'),
      tiled: require('./src/layer/arcgisserver/tiled')
    },
    bing: require('./src/layer/bing'),
    csv: require('./src/layer/csv'),
    geojson: require('./src/layer/geojson'),
    github: require('./src/layer/github'),
    kml: require('./src/layer/kml'),
    mapbox: require('./src/layer/mapbox'),
    cartodb: require('./src/layer/cartodb'),
    tiled: require('./src/layer/tiled'),
    wms: require('./src/layer/wms')
  },
  map: require('./src/map'),
  preset: {
    baselayers: require('./src/preset/baselayers.json'),
    colors: require('./src/preset/colors.json'),
    layers: require('./src/preset/overlays.json'),
    maki: require('./node_modules/maki/_includes/maki.json'),
    npmaki: require('./node_modules/npmaki/_includes/maki.json')
  },
  tooltip: require('./src/tooltip'),
  util: {
    _: require('./src/util/util'),
    topojson: require('./src/util/topojson')
  }
};
