<template>
    <main v-if="place">
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" :style="{ 'background-image': 'url(' + require('@/assets/' + place.image) +')'}">
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>Bienvenido a {{place.title}}</h1>
            </div>
          </div>
        </div>
        <div class="carousel-item" :style="{ 'background-image': 'url(' + require('@/assets/places.jpeg') +')'}">
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>¿Qué Comer?</h1>
              <p>Some representative placeholder content for the second slide of the carousel.</p>
              <p><router-link :to="{name: 'foods', hash: '#foods' }" class="btn btn-lg btn-light">Ver más</router-link></p>
            </div>
          </div>
        </div>
        <div class="carousel-item" :style="{ 'background-image': 'url(' + require('@/assets/activities.jpeg') +')'}">
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>¿Dónde Dormir?</h1>
              <p>Some representative placeholder content for the second slide of the carousel.</p>
              <p><router-link :to="{name: 'lodgings', hash: '#lodgings'}" class="btn btn-lg btn-light">Ver más</router-link></p>
            </div>
          </div>
        </div>
        <div class="carousel-item" :style="{ 'background-image': 'url(' + require('@/assets/directory.jpeg') +')'}">
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>¿Qué Hacer?</h1>
              <p>Some representative placeholder content for the second slide of the carousel.</p>
              <p><router-link :to="{name: 'plans', hash: '#plans'}" class="btn btn-lg btn-light">Ver más</router-link></p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="container">
      <div class="row gy-5">
        <div class="col">
          <p>
            {{place.description}}
          </p>
        </div>
      </div>
      <router-view></router-view>
    </div>
    </main>
</template>

<script>

export default {
    props: {
        id: {
            type: String,
            required: true
        },
    },

    data() {
      return {
        place: null
      }
    },

    created() {
      this.getPlace()
    },

    methods: {
      async getPlace() {
        const places = [
          {
            'title': 'Pereira',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'image': 'pereira.jpeg',
            'id':'pereira',
            'foods': [
              {
                'name': 'LocalFoods',
              }
            ],
            'plans': [
              {
                'name': 'Plan 1'
              }
            ],
            'lodgings': [
              {
                'name': 'La casa bonita'
              }
            ]
          },
          {
            'title': 'Apía',
            'description': 'Descripción',
            'image': 'mountain.jpeg',
            'id':'apia',
            'foods': [
              {
                'name': 'LocalFoods',
              }
            ],
            'plans': [
              {
                'name': 'Plan 1'
              }
            ],
            'lodgings': [
              {
                'name': 'La casa bonita'
              }
            ]
          },
          {
            'title': 'Balboa',
            'description': 'Descripción',
            'image': 'mountain.jpeg',
            'id':'balboa',
            'foods': [
              {
                'name': 'LocalFoods',
              }
            ],
            'plans': [
              {
                'name': 'Plan 1'
              }
            ],
            'lodgings': [
              {
                'name': 'La casa bonita'
              }
            ]
          },
          {
            'title': 'Belén de Umbría',
            'description': 'Descripción',
            'image': 'mountain.jpeg',
            'id':'belen-de-umbria',
            'foods': [
              {
                'name': 'LocalFoods',
              }
            ],
            'plans': [
              {
                'name': 'Plan 1'
              }
            ],
            'lodgings': [
              {
                'name': 'La casa bonita'
              }
            ]
          },
          {
            'title': 'Dosquebradas',
            'description': 'Descripción',
            'image': 'mountain.jpeg',
            'id':'dosquebradas',
            'foods': [
              {
                'name': 'LocalFoods',
              }
            ],
            'plans': [
              {
                'name': 'Plan 1'
              }
            ],
            'lodgings': [
              {
                'name': 'La casa bonita'
              }
            ]
          },
          {
            'title': 'Guática',
            'description': 'Descripción',
            'image': 'mountain.jpeg',
            'id':'guatica',
            'foods': [
              {
                'name': 'LocalFoods',
              }
            ],
            'plans': [
              {
                'name': 'Plan 1'
              }
            ],
            'lodgings': [
              {
                'name': 'La casa bonita'
              }
            ]
          },
          {
            'title': 'La Celia',
            'description': 'Descripción',
            'image': 'mountain.jpeg',
            'id':'la-celia',
            'foods': [
              {
                'name': 'LocalFoods',
              }
            ],
            'plans': [
              {
                'name': 'Plan 1'
              }
            ],
            'lodgings': [
              {
                'name': 'La casa bonita'
              }
            ]
          },
          {
            'title': 'La Virginia',
            'description': 'Descripción',
            'image': 'mountain.jpeg',
            'id':'la-virginia',
            'foods': [
              {
                'name': 'LocalFoods',
              }
            ],
            'plans': [
              {
                'name': 'Plan 1'
              }
            ],
            'lodgings': [
              {
                'name': 'La casa bonita'
              }
            ]
          },
          {
            'title': 'Marsella',
            'description': 'Descripción',
            'image': 'mountain.jpeg',
            'id':'marsella',
            'foods': [
              {
                'name': 'LocalFoods',
              }
            ],
            'plans': [
              {
                'name': 'Plan 1'
              }
            ],
            'lodgings': [
              {
                'name': 'La casa bonita'
              }
            ]
          },
          {
            'title': 'Mistrató',
            'description': 'Descripción',
            'image': 'mountain.jpeg',
            'id':'mistrato',
            'foods': [
              {
                'name': 'LocalFoods',
              }
            ],
            'plans': [
              {
                'name': 'Plan 1'
              }
            ],
            'lodgings': [
              {
                'name': 'La casa bonita'
              }
            ]
          },
          {
            'title': 'Pueblo Rico',
            'description': 'Descripción',
            'image': 'mountain.jpeg',
            'id':'pueblo-rico',
            'foods': [
              {
                'name': 'LocalFoods',
              }
            ],
            'plans': [
              {
                'name': 'Plan 1'
              }
            ],
            'lodgings': [
              {
                'name': 'La casa bonita'
              }
            ]
          },
          {
            'title': 'Quinchía',
            'description': 'Descripción',
            'image': 'mountain.jpeg',
            'id':'quinchia',
            'foods': [
              {
                'name': 'LocalFoods',
              }
            ],
            'plans': [
              {
                'name': 'Plan 1'
              }
            ],
            'lodgings': [
              {
                'name': 'La casa bonita'
              }
            ]
          },
          {
            'title': 'Santa Rosa de Cabal',
            'description': 'Descripción',
            'image': 'mountain.jpeg',
            'id':'santa-rosa-de-cabal',
            'foods': [
              {
                'name': 'LocalFoods',
              }
            ],
            'plans': [
              {
                'name': 'Plan 1'
              }
            ],
            'lodgings': [
              {
                'name': 'La casa bonita'
              }
            ]
          },
          {
            'title': 'Santuario',
            'description': 'Descripción',
            'image': 'mountain.jpeg',
            'id':'santuario',
            'foods': [
              {
                'name': 'LocalFoods',
              }
            ],
            'plans': [
              {
                'name': 'Plan 1'
              }
            ],
            'lodgings': [
              {
                'name': 'La casa bonita'
              }
            ]
          }
        ]
        const place_info = places.filter(place => place.id == this.id )
        if (place_info.length > 0) {
          this.place = place_info[0]
        } else {
          this.$router.push('/')
        }
      }
    },
    watch: {
      id () {
        this.getPlace()
      }
    }

}
</script>