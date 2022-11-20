<template>
    <main>
        <div class="container-fluid">
            <div class="row g-0">
                <div class="col-8">
                    <div id="map" />
                </div>
                <div class="col-4 ">
                    <div class="accordion" id="accordionPanelsStayOpenExample">
                        <div v-for="place in places" class="accordion-item">
                            <h2 class="accordion-header" :id="`panelsStayOpen-heading${place.properties.url}`">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#panelsStayOpen-collapse${place.properties.url}`" aria-expanded="true" :aria-controls="`panelsStayOpen-collapse${place.properties.url}`">
                                {{ place.properties.title}}
                            </button>
                            </h2>
                            <div :id="`panelsStayOpen-collapse${place.properties.url}`" class="accordion-collapse collapse" :aria-labelledby="`panelsStayOpen-heading${place.properties.url}`">
                                <div class="accordion-body">
                                    <img :src="require('@/assets/' + place.properties.image)" class="card-img-top" alt="Imagen de wirestock en Freepik">
                                    <p>{{ place.properties.description }}</p>
                                    <p> <router-link :to="`/lugares/${place.properties.url}`" class="btn btn-secondary">Ver más</router-link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </main>
</template>


<script>
import mapboxgl from "mapbox-gl";

import { onMounted, ref } from "vue";

export default {

  setup() {
    const places = ref();
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
                    'description': 'Descripción',
                    'image': 'mountain.jpeg',
                    'url':'pereira'
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
                        'description': 'Descripción',
                        'image': 'mountain.jpeg',
                        'url':'apia'
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
                        'description': 'Descripción',
                        'image': 'mountain.jpeg',
                        'url':'balboa'
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
                        'description': 'Descripción',
                        'image': 'mountain.jpeg',
                        'url':'belen-de-umbria'
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
                        'description': 'Descripción',
                        'image': 'mountain.jpeg',
                        'url':'dosquebradas'
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
                        'description': 'Descripción',
                        'image': 'mountain.jpeg',
                        'url':'guatica'
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
                        'description': 'Descripción',
                        'image': 'mountain.jpeg',
                        'url':'la-celia'
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
                        'description': 'Descripción',
                        'image': 'mountain.jpeg',
                        'url':'la-virginia'
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
                        'description': 'Descripción',
                        'image': 'mountain.jpeg',
                        'url':'marsella'
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
                        'description': 'Descripción',
                        'image': 'mountain.jpeg',
                        'url':'mistrato'
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
                        'description': 'Descripción',
                        'image': 'mountain.jpeg',
                        'url':'pueblo-rico'
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
                        'description': 'Descripción',
                        'image': 'mountain.jpeg',
                        'url':'quinchia'
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
                        'description': 'Descripción',
                        'image': 'mountain.jpeg',
                        'url':'santa-rosa-de-cabal'
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
                        'description': 'Descripción',
                        'image': 'mountain.jpeg',
                        'url':'santuario'
                    }
                }
            ]
        };

        places.value = geojson.features

        // disable map rotation using right click + drag
        map.dragRotate.disable();
        
        // disable map rotation using touch rotation gesture
        map.touchZoomRotate.disableRotation();


        map.on('load', () => {
            map.addSource('municipios-risaralda', {
                type: 'geojson',
                data: geojson 
            })

            map.addLayer({
                id: "places",
                type: "symbol",
                source: "municipios-risaralda",
            })
            
            geojson.features.forEach(function(feature){
                const popUp = new mapboxgl.Popup()
                .setHTML(`
                    <h3>${feature.properties.title}</h3>
                    <p>${feature.properties.description}</p>
                    `)
                .addTo(map);

                const myLocationMarker = new mapboxgl.Marker()
                    .setLngLat( feature.geometry.coordinates )
                    .setPopup( popUp )
                    .addTo( map );
                })
            });
    });
    return { places };
  },
};
</script>

<style>
#map {
  height: 100vh;
}
</style>