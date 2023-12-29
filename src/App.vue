  <script>
import Header from './components/partials/Header.vue'
    export default {
      name: 'App',
      data() {
        return {}
      },
      components:{
        Header
      },
      computed: {},
      mounted() {},
      methods: {}
    }
  </script>
<template>
  <Header />

  <div class="main-wrapper">
    <RouterView />
  </div>

</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

@use './scss/main.scss' as *;


</style>