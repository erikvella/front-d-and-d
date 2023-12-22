<script>
import axios from 'axios';
import {store} from './data/store'
import BlogComponent from './components/BlogComponent.vue';
import Loader from './components/partials/Loader.vue';
import Navigator from './components/partials/Navigator.vue';
export default{
  name : 'App',
  data(){
    return{
      titolo : 'Hello D&D',
      isLoaded: false,
      links: []
    }
  },
  components:{
    BlogComponent,
    Navigator,
    Loader
  },
  methods:{
    getApi(endpoint){
      this.isLoaded = false;
      axios.get(endpoint)
           .then(results => {
            this.isLoaded = true;
            store.characters = results.data.data;
            this.links = results.data.links;
        
           })
    }
  },
  mounted(){
    this.getApi(store.apiUrl + 'characters');
  }

}
</script>

<template>
  <Loader v-if="!isLoaded" />
<div class="container debug" v-else>
  <h1>{{ titolo }}</h1>
  <BlogComponent />
  <Navigator :links="links" @callApi="getApi" />
</div>
</template>

<style lang="scss">

</style>
