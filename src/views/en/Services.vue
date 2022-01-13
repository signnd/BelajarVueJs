<template>
<section>
    <div class="services" id="services">
      <div class="container-fluid p-0">
        <img :src="images.cover1" alt="services" class="w-100">
        <h1 class="mt-5 centered text-black style fw-bold" style="font-size:3vw;">Services</h1>
      </div>
    </div>
</section>

<nav aria-label="breadcrumb" class="container">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Services</li>
  </ol>
</nav>

    <div class="container">
        <div class="row d-flex">
          <div class="col-5">
          <i class="fas fa-plane-departure"></i>
              <h5 class="service-title">Medical Tourism Guidelines</h5>
              <p class="service-text">A guide for someone who needs medical care.</p>
          </div>
          <div class="col-5">
          <i class="fas fa-notes-medical"></i>
          <div>
            <h5 class="service-title">Medical training</h5>
            <p class="service-text"> Seminars and Training Workshops for Government, Health Clusters, Hospitals, Insurance Providers, Hospitality, and other interested parties.</p>
          </div>
          </div>
          <div class="col-5">
          <i class="fas fa-stethoscope"></i>
              <h5 class="service-title">Medical research</h5>
              <p class="service-text">The information and research gleaned from conducting research and surveys significantly raises awareness in medical tourism through our findings and up-to-date information.</p>
          </div>
          <div class="col-5 mb-4">
          <i class="fas fa-heart"></i>
              <h5 class="service-title">Medical advisor</h5>
              <p class="service-text">Help provide medical assessments, reviews or audits of medical practices provided by providers or non-providers from insurance or companies that provide health insurance for their workers.</p>
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
            }
        }
    }
}
</script>

<style>
.container{
  position: relative;
  display:inline-block;
}

.container-fluid {
  overflow: hidden;
  position: relative;
  text-align: left;
  width: 100%;
}

.service-title {
  font-family: 'Segoe UI', Verdana, sans-serif, sans-serif;
  font-weight:bold;
  text-align: center;
}

.service-text {
  font-family:Calibri, sans-serif;
  font-weight:normal;
  text-align: center;
}

.breadcrumb {
    margin-bottom: 0;
    background-color: white;
}


</style>