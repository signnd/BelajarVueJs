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
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
              Reservasi
            </button>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.placeholder" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title">Rumah Sakit 2</h5>
            <p class="card-text">Deskripsi</p>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
              Reservasi
            </button>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.placeholder" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title">Rumah Sakit 3</h5>
            <p class="card-text">Deskripsi</p>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
              Reservasi
            </button>
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
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
              Reservasi
            </button>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.placeholder" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title">Rumah Sakit 5</h5>
            <p class="card-text">Deskripsi</p>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
              Reservasi
            </button>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.placeholder" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title">Rumah Sakit 6</h5>
            <p class="card-text">Deskripsi</p>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
              Reservasi
            </button>
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
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
              Reservasi
            </button>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.placeholder" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title">Rumah Sakit 8</h5>
            <p class="card-text">Deskripsi</p>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
              Reservasi
            </button>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.placeholder" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title">Rumah Sakit 9</h5>
            <p class="card-text">Deskripsi</p>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
              Reservasi
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  <!-- Modal -->
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Reservasi</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <img :src="images.speedid" alt="speedid" class="speedid-size pt-3">
        <div class="modal-body">
          <h4 class="font-weight-bold">
            Anda dapat melakukan registrasi langsung lewat aplikasi SpeedID dengan mencari rumah sakit "Rumah Sakit Ini" pada fitur SpeedQ.
          </h4>
          <br>
          <h5 class="text-left">Belum Install?</h5>
          <ol class="text-left">
            <li>Download SpeedID</li>
            <li>Klik SpeedQ</li>
            <li>Cari Lokasi yang Anda Inginkan</li>
            <li>Tambahkan "Rumah Sakit Ini" ke Favorite (Klik ★)</li>
            <li>Pilih Dokter dan Hari Layanan</li>
            <li>Tiket Anda di My-Ticket</li>
          </ol>
        </div>
        <div class="modal-footer">
          <div class="containe">
            <div class="row">
              <div class="col">
                <a href="https://play.google.com/store/apps/details?id=com.bamboomedia.speedid&hl=in&gl=US"
                  target="_blank"><img :src="images.playstore" alt="playstore" class="logo-download"></a>
              </div>
              <div class="col">
                <a href="https://apps.apple.com/id/app/speedid/id1439413446" target="_blank"><img :src="images.apple"
                    alt="apple" class="logo-download"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  


</template>

<script>
export default {
    data() {
        return {
            images: {
                cover1: require('@/assets/hero/flat.png'),
                cover2: require('@/assets/gallery/section_bg01.png'),
                placeholder: require('@/assets/placeholder.png'),    
                apple: require('@/assets/modal/apple.png'), 
                playstore: require('@/assets/modal/playstore.png'), 
                speedid: require('@/assets/modal/SpeedID.png')            
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

.speedid-size{
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}

.logo-download{
 width: 100%;
}
</style>