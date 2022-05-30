mapboxgl.accessToken = 'pk.eyJ1IjoiY2hpY2tlbmJpbmdib25nIiwiYSI6ImNsM25keThmODBiNWozZHFoNjI4cnB3d24ifQ.L6FwznXuUYHof2W--CoPcg';

fetch("https://vacationwiththeboys.herokuapp.com/lalv22/calendar")
    .then(res => res.json)
    .then(data => console.log(data))

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-117.918976, 33.812511],
    zoom: 14
});

// controls
const controls = new mapboxgl.NavigationControl();
map.addControl(controls, "bottom-right") 

const desertpalms = new mapboxgl.Marker()
    .setLngLat([-117.91648, 33.803744])
    .setPopup(new mapboxgl.Popup().setHTML("<p>Desert Palms Hotel</p>"))
    .addTo(map);

