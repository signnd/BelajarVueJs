<template>
 <section>
   <div class="blog" id="blog">
      <div class="container-fluid p-0">
        <img :src="images.cover1" alt="habout" class="w-100">
        <h1 class="mt-5 centered text-black style fw-bold" style="font-size:3vw;">Blog</h1>
      </div>
    </div>
    
    
   <div class="container-fluid d-flex">
    <div class="container-fluid ml-5 my-5 pt-5 mt-5 align-items-center" style="width: 1000px;">
      <h1 class="">Artikel Kami</h1>
        <div class="card-group">
          <div class="card" style="width:auto;">
            <img class="card-img-top" :src="images.card1" alt="Card image 1">
              <div class="card-body">
                <h5 class="card-title">Artikel Belum Tersedia</h5>
                <p class="card-text">Kosong</p>
                  <router-link to="/About" class="btn d-block btn-outline-primary text-wrap">Lebih Lanjut</router-link>
                <div class="row">
                <div class="col">
                 Info Kesehatan
               </div>
                </div>
              </div>



        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.card1" alt="Card image 2">
            <div class="card-body">
             <h5 class="card-title">Artikel Belum Tersedia</h5>
              <p class="card-text">Kosong</p>
                <router-link to="/About" class="btn d-block btn-outline-primary text-wrap">Lebih Lanjut</router-link>
                  <div class="col">
                   Info Rumah Sakit
                   </div>



          <div class="card" style="width:auto;">
            <img class="card-img-top" :src="images.card1" alt="Card image 3">
              <div class="card-body">
                <h5 class="card-title">Artikel Belum Tersedia</h5>
                  <p class="card-text">Kosong</p>
                <router-link to="/About" class="btn d-block btn-outline-primary text-wrap">Lebih Lanjut</router-link>
             <div class="col">
           Info 
          </div>

          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
             <li class="page-item disabled">
               <a class="page-link" href="#" tabindex="-1">Previous</a>
                 </li>
                   <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
             <li class="page-item">
           <a class="page-link" href="#">Next</a>
          </li>
         </ul>
        </nav>
          </div>
           </div>
            </div>
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
                about: require('@/assets/gallery/popular_sub3.png'),
                logo: require('@/assets/logo/logo.png')
            }
        }
    }
}
</script>

<style>

</style>
