<template>
    <div id="map" />
</template>


<script>
import mapboxgl from "mapbox-gl";

import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
        console.log("Initilizing map")
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [ -75.883889, 4.896667 ], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });

        const geojson = {
            'type': 'FeatureCollection',
            'features': [
                {
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-75.69456, 4.81428]
                },
                'properties': {
                    'title': 'Pereira',
                    'description': 'Descripción'
                }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.943333, 5.105278]
                    },
                    'properties': {
                        'title': 'Apía',
                        'description': 'Descripción'
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -75.957222, 4.949444]
                    },
                    'properties': {
                        'title': 'Balboa',
                        'description': 'Descripción'
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -75.868889, 5.200556]
                    },
                    'properties': {
                        'title': 'Belén de Umbría',
                        'description': 'Descripción'
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -75.676111, 4.836111 ]
                    },
                    'properties': {
                        'title': 'Dosquebradas',
                        'description': 'Descripción'
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -75.798333, 5.316389 ]
                    },
                    'properties': {
                        'title': 'Guática',
                        'description': 'Descripción'
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -76.003889, 5.001944 ]
                    },
                    'properties': {
                        'title': 'La Celia',
                        'description': 'Descripción'
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -75.883889, 4.896667 ]
                    },
                    'properties': {
                        'title': 'La Virginia',
                        'description': 'Descripción'
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -75.739167, 4.936667 ]
                    },
                    'properties': {
                        'title': 'Marsella',
                        'description': 'Descripción'
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -75.882778, 5.297778 ]
                    },
                    'properties': {
                        'title': 'Mistrató',
                        'description': 'Descripción'
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -76.029444, 5.2225 ]
                    },
                    'properties': {
                        'title': 'Pueblo Rico',
                        'description': 'Descripción'
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -75.729444, 5.339444 ]
                    },
                    'properties': {
                        'title': 'Quinchía',
                        'description': 'Descripción'
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -75.621111, 4.867222 ]
                    },
                    'properties': {
                        'title': 'Santa Rosa de Cabal',
                        'description': 'Descripción'
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -75.964444, 5.074722 ]
                    },
                    'properties': {
                        'title': 'Santuario',
                        'description': 'Descripción'
                    }
                }
            ]
        };
        for (const feature of geojson.features) {

            const myLocationMarker = new mapboxgl.Marker()
                .setLngLat( feature.geometry.coordinates )
                .setPopup( new mapboxgl.Popup()
                    .setHTML(`
                    <h3>${feature.properties.title}</h3>
                    <p>${feature.properties.description}</p>
                    `) )
                .addTo( map );
        }


      map.on('load', () => {
      // TODO: Here we want to load a layer
      // TODO: Here we want to load/setup the popup
      });
    });
    return {};
  },
};
</script>

<style>
#map {
  height: 100vh;
}
</style>