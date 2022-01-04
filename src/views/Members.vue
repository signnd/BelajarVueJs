<template>
<section>
    <div class="members" id="members">
      <div class="container-fluid p-0">
        <img :src="images.cover1" alt="habout" class="w-100">
        <h1 class="mt-5 centered text-black style fw-bold" style="font-size:3vw;">Our Members</h1>
      </div>
    </div>
</section>
<nav aria-label="breadcrumb" class="container">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Members</li>
  </ol>
</nav>
<form class="d-none d-md-block">
    <div class="container-fluid form-row f-color px-5">
      <div class="col-3 ml-5">
        <select class="form-control form-control-md">
          <option hidden>Lokasi</option>
          <option>Denpasar</option>
          <option>Tabanan</option>
          <option>Lokasi</option>
          <option>Klungkung</option>
          <option>Gianyar</option>
          <option>Buleleng</option>
        </select>
      </div>
      <div class="col-3">
        <select class="form-control form-control-md">
          <option hidden>Kategori</option>
          <option>Klinik</option>
          <option>Rumah Sakit</option>
          <option>Apotek</option>
        </select>
      </div>
      <div class="col-3">
        <input class="form-control mr-2" type="search" placeholder="Search">
      </div>
      <div class="col-2">
        <router-link :to="{name: 'Members'}">
          <button type="button" class="btn btn-md btn-block btn-outline-light">Search</button>
        </router-link>
      </div>
    </div>
</form>

<br>
<br>

<h2 class="font-weight-bold text-center pb-3">Result</h2>

<!-- Rumah Sakit Placeholder -->
<section>
  <div class="container d-flex">
    <div class="container my-5 align-items-center" style="width: 900px;">
      <div class="card-group">
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.placeholder" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title">Rumah Sakit 1</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/About" class="btn d-block btn-outline-primary text-wrap">Reservasi</router-link>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.placeholder" alt="Card image 2">
          <div class="card-body text-center">
            <h5 class="card-title">Rumah Sakit 2</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/Contact" class="btn d-block btn-outline-primary text-wrap">Reservasi</router-link>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.placeholder" alt="Card image 2">
          <div class="card-body text-center">
            <h5 class="card-title">Rumah Sakit 3</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/Members" class="btn d-block btn-outline-primary text-wrap">Reservasi</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="container d-flex">
    <div class="container my-5 align-items-center" style="width: 900px;">
      <div class="card-group">
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.placeholder" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title">Rumah Sakit 4</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/About" class="btn d-block btn-outline-primary text-wrap">Reservasi</router-link>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.placeholder" alt="Card image 2">
          <div class="card-body text-center">
            <h5 class="card-title">Rumah Sakit 5</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/Contact" class="btn d-block btn-outline-primary text-wrap">Reservasi</router-link>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.placeholder" alt="Card image 2">
          <div class="card-body text-center">
            <h5 class="card-title">Rumah Sakit 6</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/Members" class="btn d-block btn-outline-primary text-wrap">Reservasi</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="container d-flex">
    <div class="container my-5 align-items-center" style="width: 900px;">
      <div class="card-group">
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.placeholder" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title">Rumah Sakit 7</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/About" class="btn d-block btn-outline-primary text-wrap">Reservasi</router-link>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.placeholder" alt="Card image 2">
          <div class="card-body text-center">
            <h5 class="card-title">Rumah Sakit 8</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/Contact" class="btn d-block btn-outline-primary text-wrap">Reservasi</router-link>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.placeholder" alt="Card image 2">
          <div class="card-body text-center">
            <h5 class="card-title">Rumah Sakit 9</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/Members" class="btn d-block btn-outline-primary text-wrap">Reservasi</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



  


</template>

<script>
export default {
    data() {
        return {
            images: {
                cover1: require('@/assets/hero/flat.png'),
                cover2: require('@/assets/gallery/section_bg01.png'),
                placeholder: require('@/assets/placeholder.png')                
            }
        }
    }
}
</script>

<style>
.container{
  position: relative;
}

.container-fluid {
  overflow: hidden;
  position: relative;
  text-align: left;
  width: 100%;

}

.centered{  
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>