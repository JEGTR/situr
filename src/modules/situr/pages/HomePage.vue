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
        <div class="carousel-item active">
          <img src="@/assets/coffe.jpeg" class="d-block w-100 h-100 darker-image" alt="Image by jcomp on Freepik">
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>Bienvenido a SITUR</h1>
              <p>Sistema de información turistica de Risaralda.</p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/places.jpeg" class="d-block w-100 h-100 darker-image" alt="Image by wirestock on Freepik">
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>¿Dónde ir?</h1>
              <p>Some representative placeholder content for the second slide of the carousel.</p>
              <p> <router-link to="/lugares" class="btn btn-lg btn-light">Ver más</router-link></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/activities.jpeg" class="d-block w-100 h-100 darker-image" alt="Image by Freepik">
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>¿Qué Hacer?</h1>
              <p>Some representative placeholder content for the second slide of the carousel.</p>
              <p> <router-link to="/actividades" class="btn btn-lg btn-light">Ver más</router-link></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/directory.jpeg" class="d-block w-100 h-100 darker-image" alt="Image by rawpixel.com on Freepik">
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>Directorio</h1>
              <p>Some representative placeholder content for the second slide of the carousel.</p>
              <p> <router-link to="/directorio" class="btn btn-lg btn-light">Ver más</router-link></p>
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

    <!-- FOOTER -->
    <footer class="container">
      <p class="float-end"><a href="#">Back to top</a></p>
      <p>&copy; 2017–2022 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
    </footer>
    </main>
</template>