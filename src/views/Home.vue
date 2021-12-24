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
          <img class="d-block mt-5 pt-2 w-100 h-3" :src="images.cover1" alt="First slide">
          <div class="carousel-caption d-block text-dark text-left align-middle">
              <h1 class="font-weight-bold" style="font-size:7vw;">Slide 1</h1>
              <p style="font-size:2vw;">Kami adalah website medis</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block mt-5 pt-2 w-100 h-3" :src="images.cover2" alt="Third slide">
          <div class="carousel-caption d-block text-dark text-left align-middle">
            <h1 class="font-weight-bold" style="font-size:7vw;">Slide 2</h1>
            <p style="font-size:2vw;">Yuk berwisata medis</p>
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

  <section>
    <div class="row">
      <div class="container ml-2 mt-4" style="width: 600px">
        <div class="card-group">
          <div class="card" style="width=100px;">
          <img class="card-img-top" :src="images.card1" alt="Card image 1">
            <div class="card-body">
              <h5 class="card-title">Card 1</h5>
              <p class="card-text">Card text 1</p>
              <router-link to="/" class="btn btn-primary">Link</router-link>
            </div>
          </div>
        <div class="card">
          <img class="card-img-top" :src="images.card2" alt="Card image 2">
            <div class="card-body">
              <h5 class="card-title">Card 2</h5>
              <p class="card-text">Card text 2</p>
              <router-link to="/" class="btn btn-primary">Link</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Flexbox -->
  <section>
      <div class="d-flex p-2 bg-primary text-white text-middle font-weight-bold">Work In Progress</div>
  </section>

</template>
    
    
<script>
export default {
    data() {
        return {
            images: {
                cover1: require('@/assets/hero/hero.png'),
                cover2: require('@/assets/hero/hero2.jpg'),
                card1: require('@/assets/gallery/blog1.png'),
                card2: require('@/assets/gallery/blog2.png'),
                card3: require('@/assets/gallery/blog3.png')
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
  top: 160px;
}

.carousel .carousel-item {
  height: 600px;
}

.carousel-item img {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 300px;
}

.row {
  margin-left: 10px;
}

.card {
  width: 18em;
  margin-left: 10px;
  margin-top: 10px;
}

.card-img-top {
  padding-inline: 10px;
  padding-block: 10px ;
}

.card-title {
  font-family: 'Segoe UI', Verdana, sans-serif, sans-serif;
  font-weight:bold;
}

.card-text {
  font-family:Calibri, sans-serif;
  font-weight:normal;
}


</style>