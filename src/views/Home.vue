<template>
<!-- Slideshow -->
  <section>
    <div id="slideshow" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#slideshow" data-slide-to="0" class="active"></li>
        <li data-target="#slideshow" data-slide-to="1"></li>
        <li data-target="#slideshow" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100 " :src="images.cover1" alt="First slide">
          <div class="carousel-caption d-none d-md-block text-dark text-left align-middle">
            <h1 class="font-weight-bold">Judul</h1>
            <p>Pada suatu hari</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" :src="images.cover1" alt="Second slide">
          <div class="carousel-caption d-none d-md-block text-dark text-left align-middle">
            <h1 class="font-weight-bold">Judul</h1>
            <p>Pada suatu hari</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" :src="images.cover1" alt="Third slide">
          <div class="carousel-caption d-none d-md-block text-dark text-left align-middle">
            <h1 class="font-weight-bold">Judul</h1>
            <p>Pada suatu hari</p>
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

  <!--  -->
  <section>
      <div id="bg" class="p-3 mb-2 bg-primary text-white fw-bold">Work In Progress</div>
  </section>
</template>
    
    
<script>
export default {
    data() {
        return {
            images: {
                cover1: require('@/assets/hero/hero.png')
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
  top: 200px;
}

.carousel-inner .carousel-item{
  height: 550px;
}


</style> 