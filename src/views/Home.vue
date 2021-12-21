<template>
  <div class="home">
    <img :src="images.sample" class="img-fluid" alt="Responsive image">
  </div>
  <h1>asd</h1>
</template>
    
<script>
export default {
    data() {
        return {
            images: {
                sample: require('@/assets/hero/hero.png')
            }
        }
    }
}
</script>
    
<style lang="css">
</style> 