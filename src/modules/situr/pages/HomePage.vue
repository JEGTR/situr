<template>
    <main>
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" :style="{ 'background-image': 'url(' + require('@/assets/coffe.jpeg') +')'}">
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>Bienvenido a SITUR</h1>
              <p>Sistema de información turistica de Risaralda.</p>
            </div>
          </div>
        </div>
        <div class="carousel-item" :style="{ 'background-image': 'url(' + require('@/assets/places.jpeg') +')'}">
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>¿Dónde ir?</h1>
              <p>Some representative placeholder content for the second slide of the carousel.</p>
              <p> <router-link :to="{name: 'places'}" class="btn btn-lg btn-light">Ver más</router-link></p>
            </div>
          </div>
        </div>
        <div class="carousel-item" :style="{ 'background-image': 'url(' + require('@/assets/activities.jpeg') +')'}">
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>¿Qué Hacer?</h1>
              <p>Some representative placeholder content for the second slide of the carousel.</p>
              <p> <router-link :to="{name: 'activities'}" class="btn btn-lg btn-light">Ver más</router-link></p>
            </div>
          </div>
        </div>
        <div class="carousel-item" :style="{ 'background-image': 'url(' + require('@/assets/directory.jpeg') +')'}">
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>Directorio</h1>
              <p>Some representative placeholder content for the second slide of the carousel.</p>
              <p> <router-link :to="{name: 'directory'}" class="btn btn-lg btn-light">Ver más</router-link></p>
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
    </main>
</template>