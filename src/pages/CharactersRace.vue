  <script>
  import axios from 'axios';
  import { store } from '../data/store';
    export default {
      name: 'CharactersRace',
      data() {
        return {
          characters : [],
          race: ''
        }
      },
      components:{},
      methods: {
        getApi(slug){
          axios.get(store.apiUrl + 'characters-by-race/' + slug)
               .then(res => {
                console.log(res.data);
                this.race = res.data.name;
                this.characters = res.data.characters;
               })
        }
      },
      mounted() {
        this.getApi(this.$route.params.race_slug);
      },
      computed: {},
    }
  </script>
<template>
  <div>
    <h1>Lista dei personaggi che appartengono alla razza {{ race }}</h1>
    <ul>
      <li v-for="character in characters" :key="character.id">
        <router-link :to="{name:'characterDetail' , params:{slug:character.slug}}">Name: {{ character.name }}</router-link>
      </li>
    </ul>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ul{
  list-style: none;
  li{
    margin-top: 10px;
    a{
      text-decoration: none;
      color: aliceblue;
      &:hover{
        color: yellow;
        text-decoration: underline;
      }
    }
  }
}
</style>