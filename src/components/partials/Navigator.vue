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
          // per evitare la doppia chiamata all'api quando uso il navigator , taglio la stringa dell'Api con substring così da tagliare i primi 26 caratteri e lasciare solo la parte finale 
          linkUrl = linkUrl.substring(26);
          this.$emit('callApi' , linkUrl);
        }
      },
      computed: {},
      mounted() {}
    }
  </script>
<template>
  <div class="nav-wrapper ">
    <button v-for="link in links" :key="link.label" v-html="link.label" :disabled="link.active || !link.url" @click="callApi(link.url)" class="btn btn-light"></button>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.nav-wrapper{
  margin-top: 10px;
  text-align: center;
  button{
    padding: 5px;
    margin: 8px;
    border-radius: 12px;
    color: rgb(11, 11, 11);
  }
}
</style>