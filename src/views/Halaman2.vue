<template>
 <section>
   <div class="halaman2" id="halaman2">
      <div class="container-fluid p-0">
        <img :src="images.cover1" alt="habout" class="w-100">
        <h1 class="mt-5 centered text-black style fw-bold" style="font-size:3vw;">Our Blogs</h1>
      </div>
    </div>
    
   <div class="p-3 mb-2 bg-info text-black">
<div class="container"> 
   <div class="container-fluid d-flex">
    <div class="container-fluid ml-5 mx-auto my-5 pt-5 mt-5 align-items-center" style="width: 700px;">
      <h1 class="text-center">Artikel Kami</h1>
        <div class="card-group">
         <div class="card"> 
           <div class="p-3 mb-2 bg-info text-black">
          <div class="card" style="width:auto;">
            <img class="card-img-top" :src="images.gambar3" alt="Card image 3">
              <div class="card-body">
                <h5 class="card-title">Artikel Belum Tersedia</h5>
                <p class="card-text">
                  <router-link to="/Olahraga" type="button" class="btn d-block btn-dark">Lebih Lanjut</router-link> kosong </p>
                <div class="row">
                <div class="col">
                 Info Kesehatan
               </div>
                </div>
              </div>
          </div>
          
          
        
<br>
<br>


        <div class="card" style="width:auto;">
       <div class="card">
          <img class="card-img-top" :src="images.card2" alt="Card image 4">
            <div class="card-body">
             <h5 class="card-title">Artikel Belum Tersedia</h5>
              <p class="card-text">Kosong</p>
                  <router-link to="/about" type="button" class="btn d-block btn-dark">Lebih Lanjut</router-link>                
                  <div class="col">
                   Info Rumah Sakit
                   </div>
            </div>
       </div>
  
       
<br>
<br>

          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
             <li class="page-item Enable">
               <a class="page-link" href="/Blog" tabindex="-1">Previous</a>
                 </li>
                   <li class="page-item"><a class="page-link" href="Blog">1</a></li>
                  <li class="page-item"><a class="page-link" href="Blog/Halaman2">2</a></li>
                <li class="page-item"><a class="page-link" href="Blog/Halaman3">3</a></li>
             <li class="page-item">
           <a class="page-link" href="/Halaman3">Next</a>

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
                logo: require('@/assets/logo/logo.png'),
                gambar3: require('@/assets/logo/olahraga.jpg')
            }
        }
    }
}
</script>
<style>
</style>
