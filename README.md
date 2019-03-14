# Vue-Test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
## Mapbox Component
`vue-mapbox` is the npm package used.

* https://soal.github.io/vue-mapbox/#/
* https://www.mapbox.com/api-documentation
* https://www.mapbox.com/help/how-access-tokens-work/


Must define a height and width for the mapbox display or it will not show up. Also, the default `position: absolute` did not work, so changed to `position: relative` and it works fine now.

If you take out `text-align: center` from the default CSS from `vue-cli` then the map centers just fine. Seems to be a problem with Webpack. Solution suggested [here](https://github.com/phegman/vue-mapbox-gl/issues/11).

## A different Mapbox Component

`vue-mapbox` is having alignment issues, so going to try `mapbox-gl-vue`.

* https://www.npmjs.com/package/mapbox-gl-vue

## Change to Leaflet from mapbox

Changed to [Leaflet](https://www.npmjs.com/package/vue2-leaflet) because it is open source and doesn't require a API key. As well, it is based simply on OSM and other tiles can be pulled in if I want to. It seems to work good and renders with little effort by me.

* [This link](https://github.com/KoRiGaN/Vue2Leaflet/issues/157) explains how to fix rendering issues.
* [This link](https://github.com/KoRiGaN/Vue2Leaflet/issues/96) explains how to get markers to render.
* https://leafletjs.com/

## Strava Integration

I am using Strava to pull activity data. [This is a good resource](https://codepen.io/alyda/pen/zGERzL?editors=0010) for the Strava API and how to use it with JS.

### Other Resources

* [Strava API Reference](https://developers.strava.com/docs/reference/)
* [Leaflet map layer possibilities](https://leaflet-extras.github.io/leaflet-providers/preview/)

## Todos

* Add link to blog posts from rides
* Import photos attached to Strava to Map popups
* DONE after import of rides, zoom to fit
* DONE pull correct rides from Strava
* DONE Table based on `vue-virtual-table`
* DONE Add lines to map and select whether they come up with popups or all displayed.
* DONE Add popups with summary stats of each ride.
* CANCEL Save rides to local database (mongodb via Loopback) **possible**
* LATER user authentication
* LATER Finish Strava authentication dance