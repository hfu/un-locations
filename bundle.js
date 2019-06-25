(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _goto = function _goto(map, feature) {
  console.log(feature.properties.label);
  map.flyTo({
    center: feature.geometry.coordinates,
    zoom: 18 //speed: 0.6,
    //curve: 1

  });
};

var main = function main(geojson) {
  var list = [0, 1, 9, 10, 12, 14, 15];
  var N = list.length;
  var i = 0;
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'https://hfu.github.io/macrostyle/style.json',
    attributionControl: true,
    hash: true
  });
  map.on('moveend', function (e) {
    _goto(map, geojson.features[list[++i % N]]);
  });

  _goto(map, geojson.features[list[++i % N]]);
};

fetch('https://hfu.github.io/un-locations/un-locations.geojson').then(function (response) {
  return response.json();
}).then(function (geojson) {
  return main(geojson);
});

},{}]},{},[1]);
