<template>
<nav aria-label="breadcrumb" class="container">
  <ol class="breadcrumb pt-5 mt-5">
    <li class="breadcrumb-item"><a href="/">{{ $translate(["Rumah", "Home"]) }}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{ $translate(["Layanan", "Services"]) }}</li>
  </ol>
</nav>

  <section>
    <h2 class="font-weight-bold text-center pb-3">
      {{ $translate(["Layanan Terbaik", "Best Services"]) }}
    </h2>
  </section>

  <section>
    <div class="container">
      <div class="row d-flex py-5 mb-5">
        <div class="col-4">
          <i class="fas fa-notes-medical d-flex justify-content-center"></i>
          <div>
            <h5 class="service-title text-center">
              {{
                $translate(["Penyembuhan Tradisional", "Traditional Healing"])
              }}
            </h5>
            <p class="service-text">
              {{
                $translate([
                  "Kami memberi pilihan penyembuhan holistik untuk kesehatan yang paripurna.",
                  "We can give many options for health hospitality",
                ])
              }}
            </p>
          </div>
        </div>
        <div class="col-4">
          <i class="fas fa-stethoscope d-flex justify-content-center"></i>
          <h5 class="service-title text-center">
            {{ $translate(["Dokter Terpilih", "Specialized Doctors"]) }}
          </h5>
          <p class="service-text">
            {{
              $translate([
                "Kami memilih dokter-dokter terbaik dan layanan unggulan rumah sakit yang ada di Bali.",
                "We select the best doctors from top quality hospital that are available in Bali.",
              ])
            }}
          </p>
        </div>
        <div class="col-4 mb-3">
          <i class="fas bi-house-door-fill d-flex justify-content-center"></i>
          <h5 class="service-title text-center">
            {{ $translate(["Rumah Yoga", "Yoga House"]) }}
          </h5>
          <p class="service-text">
            {{
              $translate([
                "Kami menghubungkan anda dengan pembimbing Yoga terbaik di Bali",
                "We have many connection with the best Yoga trainer in Bali",
              ])
            }}
          </p>
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