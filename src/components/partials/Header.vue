  <script>
  import axios from 'axios';
  import { store } from '../../data/store'
    export default {
      name: 'Header',
      data() {
        return {
          tosearch:''
        }
      },
      computed: {},
      mounted() {},
      methods: {
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
      }
    }
  </script>
<template>
  <header>
    <nav>
      <ul>
        <li>
           <router-link :to="{name: 'home'}">home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">about</router-link>
        </li>
        <li>
          <router-link :to="{name: 'blog'}">lista personaggi</router-link>
        </li>
        <li>
          <router-link :to="{name: 'contacts'}">contatti</router-link>
        </li>
      </ul>
    </nav>
    <div class="form">
      <input
        v-model.trim = "tosearch"
        placeholder = "Cerca"
        type = "text"
        @keyup.enter = "getApi"
      >
    </div>
  </header>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
 header{
  position: fixed;
  text-align: center;
  width: 100%;
  padding: 15px;
  ul{
    list-style: none;
    li{
      display: inline-block;
      margin: 0 15px;
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
    }
  }
 }
</style>