<script>
import { store } from '../data/store';
import axios from 'axios';

export default{
  name: 'BlogComponent',
  data(){
    return{
      title: 'Characters list',
      tosearch:'',
      store
 }
  },
  components:{},
  methods:{
    getApi(){
          const endpoint = (this.tosearch.length > 0) ? store.apiUrl + 'search/' + this.tosearch : store.apiUrl + 'characters/'
          axios.get(endpoint)
           .then(results => {
            console.log(endpoint)
            store.characters = results.data.data;
            store.paginator.links = results.data.links;
            store.paginator.firstPageUrl = results.data.first_page_url;
            store.paginator.lastPageUrl = results.data.last_page_url;
            store.paginator.currentPage = results.data.current_page;
            store.paginator.lastPage = results.data.last_page;
            this.tosearch = '';
           })
        }
  },
  mounted(){},
  computed:{}
}

</script>


<template>

  <div>
    <h1>{{ title }}</h1>
    <div class="form">
      <input
        v-model.trim = "tosearch"
        placeholder = "search character by name"
        type = "text"
        @keyup.enter = "getApi"
      >
    </div>
    
  </div>
  

  <ul>
    <li v-for="character in store.characters" :key="character.id">
      <router-link :to="{name:'characterDetail' , params:{slug:character.slug}}">Name: {{ character.name }}</router-link>
      <p>Race: {{ character.race.name }}</p>
    </li>
  </ul>

</template>

<style lang="scss" scoped>
a{
        color: aliceblue;
        text-decoration: none;
        text-transform: uppercase;
        &.active{
          color: yellow;
        }
        &:hover{
          color: yellow;
          text-decoration: underline;
        }
      }
</style>