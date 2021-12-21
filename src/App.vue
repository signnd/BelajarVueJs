<template>
<!-- Navbar atas -->
<div class="header-area" id="nav">
  <nav class="container navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Rumah sakit</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav mr-auto">
        <router-link to="/" class="nav-item nav-link">Home</router-link>
        <router-link to="/About" class="nav-item nav-link">About</router-link>
        <router-link to="/Career" class="nav-item nav-link">Career</router-link>
        <router-link to="/Login" class="nav-item nav-link">Login</router-link>
      </div>
    </div>
  </nav>
</div>
<div>
  <h1>test</h1>
</div>
  <router-view/>
</template>



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
</style>