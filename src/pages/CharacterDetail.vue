  <script>
    import axios from 'axios';
    import { store } from '../data/store';
    import Loader from '../components/partials/Loader.vue';
    export default {
      name: 'CharacterDetail',
      data() {
        return {
          character:{},
          
          isLoaded: false
        }
      },
     components:{
       Loader
     },
      methods: {
        getCharacter(slug){
          axios.get(store.apiUrl + 'characters/get-character/' + slug)
               .then(res => {
                if(!res.data.success){
                  // se l'API resituisce il fallimento della chiamata reindirizzo alla pagina 404
                  this.$router.push({name: 'error404'});
                };

                this.isLoaded = true;
                console.log('tutti i dati del pg' ,  res.data);

                this.details = res.data;
                console.log(this.details);
                this.character = this.details.character;
                console.log(this.character);              
               })
   
        }
      },
      mounted() {
        
        this.getCharacter(this.$route.params.slug);
      },
      computed: {}
    }
  </script>
<template>
  <Loader v-if="!isLoaded" />
  <div class="container" v-else>
    <h1>Nome del personaggio: {{ character.name }}</h1>
    <em>Razza personaggio: {{ character.race.name }}</em>
    <p class="margin">Altezza: {{ character.height }} m - Peso: {{ character.weight }} Kg</p>
    <p class="margin">Descrizione: {{ character.background }}</p>
    <h2 class="margin">Statistiche del personaggio:</h2>
    <ul>
      <li>Classe armatura: {{ character.armor_class }}</li>
      <li>for: {{ character.for }}</li>
      <li>des: {{ character.des }}</li>
      <li>cos: {{ character.cos }}</li>
      <li>int: {{ character.int }}</li>
      <li>sag: {{ character.sag }}</li>
      <li>car: {{ character.car }}</li>
    </ul>
    <h2 class="margin">Abilità speciali del personaggio:</h2>
    <ul v-if="character.skills.length > 0">
      <li v-for="skill in character.skills" :key="skill.id">{{ skill.name }} -> {{ skill.description }}</li>
    </ul>
    <h3 v-else>Questo personaggio non ha abilità particolari</h3>
    <div class="margin">
      <img :src="character.picture" alt="">
    </div>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.margin{
  margin-top: 12px;
  img{
    height: 700px;
  }
}

ul{
  list-style: none;
}
</style>