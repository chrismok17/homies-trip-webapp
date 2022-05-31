mapboxgl.accessToken = 'pk.eyJ1IjoiY2hpY2tlbmJpbmdib25nIiwiYSI6ImNsM25keThmODBiNWozZHFoNjI4cnB3d24ifQ.L6FwznXuUYHof2W--CoPcg';

// map
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-118.242766, 34.0536909],
    zoom: 8.75
});

// controls
const controls = new mapboxgl.NavigationControl();
map.addControl(controls, "bottom-right") 

// Hover Markers
map.on('load', () => {
    map.addSource('places', {
    'type': 'geojson',
    'data': {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {
            'description':
            '<h1>Desert Palms Hotel</h1>'
        },
        'geometry': {
            'type': 'Point',
            'coordinates': [-117.91648, 33.803744]
            }
        },
    {
    'type': 'Feature',
    'properties': {
    'description':
    '<h1>Six Flags Theme Park</h1>'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-118.5970454, 34.4250568]
    }
    },
    {
    'type': 'Feature',
    'properties': {
    'description':
    '<h1>Comfort Inn & Suites</h1>'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-118.384801, 34.182056]
    }
    },
    {
    'type': 'Feature',
    'properties': {
    'description':
    '<h1>Universal Studios</h1>'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-118.352736, 34.137665]
    }
    },
    {
    'type': 'Feature',
    'properties': {
    'description':
    "<h1>Disneyland</h1>"
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-117.91786224395487, 33.809092952517155]
    }
    },
    ]
    }
    });
    // Add a layer showing the places.
    map.addLayer({
    'id': 'places',
    'type': 'circle',
    'source': 'places',
    'paint': {
    'circle-color': '#4264fb',
    'circle-radius': 6,
    'circle-stroke-width': 2,
    'circle-stroke-color': '#ffffff'
    }
    });
     
    // Create a popup, but don't add it to the map yet.
    const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
    });
     
    map.on('mouseenter', 'places', (e) => {
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = 'pointer';
     
    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;
     
    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
     
    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(coordinates).setHTML(description).addTo(map);
    });
     
    map.on('mouseleave', 'places', () => {
    map.getCanvas().style.cursor = '';
    popup.remove();
    })
});