<template>
<!-- Slideshow -->
  <section>
    <div id="slideshow" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#slideshow" data-slide-to="0" class="active"></li>
        <li data-target="#slideshow" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block mt-5 pt-2 w-100" :src="images.cover1" alt="First slide">
          <div class="carousel-caption d-block text-dark text-left align-middle">
              <h1 class="font-weight-bold" style="font-size:7vw;">Judul</h1>
              <p style="font-size:2vw;">Pada suatu hari</p>
          </div>
        </div>
        <div class="carousel-item">
<<<<<<< HEAD
          <img class="d-block mt-5 pt-2 w-100" :src="images.cover1" alt="Second slide">
          <div class="carousel-caption d-block text-dark text-left align-middle">
            <h1 class="font-weight-bold" style="font-size:7vw;">Judul</h1>
            <p style="font-size:2vw;">Pada suatu hari</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block mt-5 pt-2 w-100" :src="images.cover1" alt="Third slide">
          <div class="carousel-caption d-block text-dark text-left align-middle">
=======
          <img class="d-block mt-5 pt-2 w-100 h-3" :src="images.cover2" alt="Third slide">
          <div class="carousel-caption d-none d-md-block text-dark text-left align-middle">
>>>>>>> upstream/main
            <h1 class="font-weight-bold" style="font-size:7vw;">Judul</h1>
            <p style="font-size:2vw;">Pada suatu hari</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#slideshow" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#slideshow" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </section>

  <!-- Flexbox -->
  <section>
      <div class="d-block p-2 bg-primary text-white text-middle font-weight-bold">Work In Progress</div>
  </section>

  <section>

  </section>
</template>
    
    
<script>
export default {
    data() {
        return {
            images: {
                cover1: require('@/assets/hero/hero.png'),
                cover2: require('@/assets/hero/hero2.jpg')
            }
        }
    }
}
</script>
    
<style lang="css">
.container {
  position: relative;
  text-align: left;
  color: rgb(0, 0, 0);
}

.carousel-caption{
  position: absolute;
  top:10em;
}

.carousel .carousel-item {
  height: 385px;
}

.carousel-item img {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 300px;
}


</style> 
