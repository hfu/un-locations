const goto = (map, feature) => {
  console.log(feature.properties.label)
  map.flyTo({
    center: feature.geometry.coordinates,
    zoom: 18,
    //speed: 0.6,
    //curve: 1
  })
}

const main = (geojson) => {
  const list = [0, 1, 9, 10, 12, 14, 15]
  const N = list.length
  let i = 0
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'https://hfu.github.io/macrostyle/style.json',
    attributionControl: true,
    hash: true
  })
  map.on('moveend', e => {
    goto(map, geojson.features[list[++i % N]])
  })
  goto(map, geojson.features[list[++i % N]])
}

fetch('https://hfu.github.io/un-locations/un-locations.geojson')
  .then(response => response.json())
  .then(geojson => main(geojson))

