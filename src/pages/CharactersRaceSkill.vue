  <script>
  import axios from 'axios';
  import { store } from '../data/store';
    export default {
      name: 'CharactersRaceSkill',
      data() {
        return {
          characters : [],
          type: '',
          title: ''
        }
      },
      components:{},
      methods: {
        getApi(slug){
          axios.get(`${store.apiUrl}characters-by-${this.type}/${slug}`)
               .then(res => {
                 this.title = res.data.name;
                 console.log(res.data.name);
                this.characters = res.data.characters;
               })
        }
      },
      mounted() {
        this.type = this.$route.params.type;
        this.getApi(this.$route.params.slug);
      },
      computed: {},
    }
  </script>
<template>
  <div>
    <h1>Lista dei personaggi che appartengono alla {{ type }} {{ title }}</h1>
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