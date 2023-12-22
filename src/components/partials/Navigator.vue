  <script>
    export default {
      name: 'Navigator',
      props:{
        links: Array
      },
      data() {
        return {}
      },
      methods: {
        callApi(linkUrl){
           this.$emit('callApi' , linkUrl);
        }
      },
      computed: {},
      mounted() {}
    }
  </script>
<template>
  <div class="nav-wrapper">
    <button v-for="link in links" :key="link.label" v-html="link.label" :disabled="link.active || !link.url" @click="callApi(link.url)"></button>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.nav-wrapper{
  margin-top: 10px;
  text-align: center;
  button{
    padding: 12px;
    margin: 8px;
    border-radius: 12px;
    
    color: rgb(11, 11, 11);
  }
}
</style>