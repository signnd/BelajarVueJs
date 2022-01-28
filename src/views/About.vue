<template>

                    <div class="col-lg-4 mb-3 d-flex align-items-stretch">
                      <div class="card">
                        <div class="card h-100">
                          <img class="card-img-top" src="${this.bahan.office.images[0]}" alt="Card image">
                          <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${this.bahan.name}</h5>
                            <p class="card-text">${this.bahan.office.name}</p>
                            <br>
                            <h4 class="card-text">${this.bahan.person}</h4>
                            <p class="card-text">${this.bahan.office.whatsapp}</p>
                            <p class="card-text">${this.bahan.office.address}</p>
                            <div class="pt-2"></div>
                            <div class="row">
                              <div class="col">
                                <button class="btn w-100 btn-primary align-self-end" data-toggle="modal"
                                  data-target="#Reservasi">Reservasi</button>
                              </div>
                                <div class="py-1 d-block d-sm-block d-md-block d-lg-none mt-auto"></div>
                              <div class="col">
                                <button class="btn w-100 btn-primary align-self-end" data-toggle="modal"
                                  data-target="#Jadwal">Jadwal</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


<div class="container-fluid">
<div class="row">
  <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-12">
                  <div class="container d-flex">
                    <div class="container my-5 align-items-center" style="width: 900px;">
                      <div class="card-group">
                        <div class="card" style="width:auto;">
                          <img class="card-img-top" src="${this.bahan.office.images[1]}" alt="Card image 1">
                          <div class="card-body text-center">
                            <h5 class="card-title" id="rs4">${this.bahan.name}</h5>
                            <p class="card-text">${this.bahan.office.name}</p>
                            <br>
                            <h4 class="card-text">${this.bahan.person}</h4>
                            <p class="card-text">${this.bahan.office.whatsapp}</p>
                            <p class="card-text">${this.bahan.office.address}</p>
                            <div class="pt-2"></div>
                            <div class="row">
                              <div class="col">
                                <button class="btn w-100 btn-primary" data-toggle="modal"
                                  data-target="#Reservasi" @click="setName('rs4')">Reservasi</button>
                              </div>
                                <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
                              <div class="col">
                                <button class="btn w-100 btn-primary" data-toggle="modal"
                                  data-target="#Jadwal">Jadwal</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-12">
                  <div class="container d-flex">
                    <div class="container my-5 align-items-center" style="width: 900px;">
                      <div class="card-group">
                        <div class="card" style="width:auto;">
                          <img class="card-img-top" src="${this.bahan.office.images[1]}" alt="Card image 1">
                          <div class="card-body text-center">
                            <h5 class="card-title" id="rs4">${this.bahan.name}</h5>
                            <p class="card-text">${this.bahan.office.name}</p>
                            <br>
                            <h4 class="card-text">${this.bahan.person}</h4>
                            <p class="card-text">${this.bahan.office.whatsapp}</p>
                            <p class="card-text">${this.bahan.office.address}</p>
                            <div class="pt-2"></div>
                            <div class="row">
                              <div class="col">
                                <button class="btn w-100 btn-primary" data-toggle="modal"
                                  data-target="#Reservasi" @click="setName('rs4')">Reservasi</button>
                              </div>
                                <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
                              <div class="col">
                                <button class="btn w-100 btn-primary" data-toggle="modal"
                                  data-target="#Jadwal">Jadwal</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-12">
                  <div class="container d-flex">
                    <div class="container my-5 align-items-center" style="width: 900px;">
                      <div class="card-group">
                        <div class="card" style="width:auto;">
                          <img class="card-img-top" src="${this.bahan.office.images[1]}" alt="Card image 1">
                          <div class="card-body text-center">
                            <h5 class="card-title" id="rs4">${this.bahan.name}</h5>
                            <p class="card-text">${this.bahan.office.name}</p>
                            <br>
                            <h4 class="card-text">${this.bahan.person}</h4>
                            <p class="card-text">${this.bahan.office.whatsapp}</p>
                            <p class="card-text">${this.bahan.office.address}</p>
                            <div class="pt-2"></div>
                            <div class="row">
                              <div class="col">
                                <button class="btn w-100 btn-primary" data-toggle="modal"
                                  data-target="#Reservasi" @click="setName('rs4')">Reservasi</button>
                              </div>
                                <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
                              <div class="col">
                                <button class="btn w-100 btn-primary" data-toggle="modal"
                                  data-target="#Jadwal">Jadwal</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-12">
                  <div class="container d-flex">
                    <div class="container my-5 align-items-center" style="width: 900px;">
                      <div class="card-group">
                        <div class="card" style="width:auto;">
                          <img class="card-img-top" src="${this.bahan.office.images[1]}" alt="Card image 1">
                          <div class="card-body text-center">
                            <h5 class="card-title" id="rs4">${this.bahan.name}</h5>
                            <p class="card-text">${this.bahan.office.name}</p>
                            <br>
                            <h4 class="card-text">${this.bahan.person}</h4>
                            <p class="card-text">${this.bahan.office.whatsapp}</p>
                            <p class="card-text">${this.bahan.office.address}</p>
                            <div class="pt-2"></div>
                            <div class="row">
                              <div class="col">
                                <button class="btn w-100 btn-primary" data-toggle="modal"
                                  data-target="#Reservasi" @click="setName('rs4')">Reservasi</button>
                              </div>
                                <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
                              <div class="col">
                                <button class="btn w-100 btn-primary" data-toggle="modal"
                                  data-target="#Jadwal">Jadwal</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-12">
                  <div class="container d-flex">
                    <div class="container my-5 align-items-center" style="width: 900px;">
                      <div class="card-group">
                        <div class="card" style="width:auto;">
                          <img class="card-img-top" src="${this.bahan.office.images[1]}" alt="Card image 1">
                          <div class="card-body text-center">
                            <h5 class="card-title" id="rs4">${this.bahan.name}</h5>
                            <p class="card-text">${this.bahan.office.name}</p>
                            <br>
                            <h4 class="card-text">${this.bahan.person}</h4>
                            <p class="card-text">${this.bahan.office.whatsapp}</p>
                            <p class="card-text">${this.bahan.office.address}</p>
                            <div class="pt-2"></div>
                            <div class="row">
                              <div class="col">
                                <button class="btn w-100 btn-primary" data-toggle="modal"
                                  data-target="#Reservasi" @click="setName('rs4')">Reservasi</button>
                              </div>
                                <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
                              <div class="col">
                                <button class="btn w-100 btn-primary" data-toggle="modal"
                                  data-target="#Jadwal">Jadwal</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-12">
                  <div class="container d-flex">
                    <div class="container my-5 align-items-center" style="width: 900px;">
                      <div class="card-group">
                        <div class="card" style="width:auto;">
                          <img class="card-img-top" src="${this.bahan.office.images[1]}" alt="Card image 1">
                          <div class="card-body text-center">
                            <h5 class="card-title" id="rs4">${this.bahan.name}</h5>
                            <p class="card-text">${this.bahan.office.name}</p>
                            <br>
                            <h4 class="card-text">${this.bahan.person}</h4>
                            <p class="card-text">${this.bahan.office.whatsapp}</p>
                            <p class="card-text">${this.bahan.office.address}</p>
                            <div class="pt-2"></div>
                            <div class="row">
                              <div class="col">
                                <button class="btn w-100 btn-primary" data-toggle="modal"
                                  data-target="#Reservasi" @click="setName('rs4')">Reservasi</button>
                              </div>
                                <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
                              <div class="col">
                                <button class="btn w-100 btn-primary" data-toggle="modal"
                                  data-target="#Jadwal">Jadwal</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-12">
                  <div class="container d-flex">
                    <div class="container my-5 align-items-center" style="width: 900px;">
                      <div class="card-group">
                        <div class="card" style="width:auto;">
                          <img class="card-img-top" src="${this.bahan.office.images[1]}" alt="Card image 1">
                          <div class="card-body text-center">
                            <h5 class="card-title" id="rs4">${this.bahan.name}</h5>
                            <p class="card-text">${this.bahan.office.name}</p>
                            <br>
                            <h4 class="card-text">${this.bahan.person}</h4>
                            <p class="card-text">${this.bahan.office.whatsapp}</p>
                            <p class="card-text">${this.bahan.office.address}</p>
                            <div class="pt-2"></div>
                            <div class="row">
                              <div class="col">
                                <button class="btn w-100 btn-primary" data-toggle="modal"
                                  data-target="#Reservasi" @click="setName('rs4')">Reservasi</button>
                              </div>
                                <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
                              <div class="col">
                                <button class="btn w-100 btn-primary" data-toggle="modal"
                                  data-target="#Jadwal">Jadwal</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-12">
                  <div class="container d-flex">
                    <div class="container my-5 align-items-center" style="width: 900px;">
                      <div class="card-group">
                        <div class="card" style="width:auto;">
                          <img class="card-img-top" src="${this.bahan.office.images[1]}" alt="Card image 1">
                          <div class="card-body text-center">
                            <h5 class="card-title" id="rs4">${this.bahan.name}</h5>
                            <p class="card-text">${this.bahan.office.name}</p>
                            <br>
                            <h4 class="card-text">${this.bahan.person}</h4>
                            <p class="card-text">${this.bahan.office.whatsapp}</p>
                            <p class="card-text">${this.bahan.office.address}</p>
                            <div class="pt-2"></div>
                            <div class="row">
                              <div class="col">
                                <button class="btn w-100 btn-primary" data-toggle="modal"
                                  data-target="#Reservasi" @click="setName('rs4')">Reservasi</button>
                              </div>
                                <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
                              <div class="col">
                                <button class="btn w-100 btn-primary" data-toggle="modal"
                                  data-target="#Jadwal">Jadwal</button>
                              </div>
                            </div>
                          </div>
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
                about: require('@/assets/gallery/pexels-tom-fisk-1692693.jpg'),
                logo: require('@/assets/logo/logo.png')
            }
        }
    },
    methods: {
      cari() {
        console.log("Cari")
      },
          getNextData() {
      window.onscroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          console.log("success")
          this.cari();
        }
      }
    }
  },
  mounted() {
      this.getNextData()
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

.img-about {
  max-width: 100%;
  max-height: 100%;
}

.centered{  
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.t-color{
  color: #6ec3ff;
}
</style>