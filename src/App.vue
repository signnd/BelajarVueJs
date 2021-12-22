<template>
  <!-- Navbar atas -->
  <div class="header-area" id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-white navbar-fixed-top">
      <div class="container">
        <nav class="navbar navbar-white bg-white">
          <a class="navbar-brand my-1" href="/">
            <img :src="images.logo" height="38" alt="logo">
          </a>
        </nav>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav my-1">
            <router-link to="/Doctors" class="nav-item nav-link fs-4 mx-2">Doctors</router-link>            
            <router-link to="/Contact" class="nav-item nav-link fs-4 mx-2">Contact</router-link>            
            <router-link to="/About" class="nav-item nav-link fs-4 mx-2">About</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <router-view />
</template>

<script>
export default {
    data() {
        return {
            images: {
                logo: require('@/assets/logo/logo.png')
            }
        }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  }

#nav a {
  font-weight: bold;
  color: #2c3e50;
  
}

#nav a.router-link-exact-active {
  color: #6ec3ff;
}

#nav a:hover{
  color: #6ec3ff;
}

#nav form{
    color: #6ec3ff;
}

.container{
  color: white;
}
</style>