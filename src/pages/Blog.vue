<script>
import axios from 'axios';
import {store} from '../data/store'
import BlogComponent from '../components/BlogComponent.vue';
import Loader from '../components/partials/Loader.vue';
import Navigator from '../components/partials/Navigator.vue';
import BlogAside from '../components/partials/BlogAside.vue';

export default{
  name : 'Blog',
  data(){
    return{
      isLoaded: false,
      store,
      links: [],
    
    }
  },
  components:{
    BlogComponent,
    BlogAside,
    Navigator,
    Loader
  },
  methods:{
    getApi(endpoint){
      this.isLoaded = false;
      axios.get(store.apiUrl + endpoint)
           .then(results => {
            switch(endpoint){
              case 'races':
              store.races = results.data;
              break;
              case 'skills':
              store.skills = results.data;
              break;
              default :
              this.isLoaded = true;
              store.characters = results.data.data;
              this.links = results.data.links;
        
            }
         
           })
    }
  },
  mounted(){
    this.getApi('characters');
    this.getApi('races');
    this.getApi('skills');
  }

}
</script>

<template>
  <Loader v-if="!isLoaded" />

  <div class="d-flex flex-column flex-lg-row gap-2" v-else>

    <div class="card-custom">
      <div class="card-custom__content">
        <div class="container d-flex flex-column h-100 justify-content-between ">

          <BlogComponent/>

          <Navigator :links="links" @callApi="getApi" />

        </div>
      </div>
    </div>
   
 
    <!-- blog aside with races and skills lists  -->
 
    <BlogAside />
    
    

  </div>

</template>

<style lang="scss" scoped>

</style>
