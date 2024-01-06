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
  <div class="container card-custom d-lg-flex gap-lg-3" v-else>
    <div class="info">
      <h2>Character Name: {{ character.name }}</h2>
      <em>Race: {{ character.race.name }}</em>
      <p>Author: {{ character.user.name }}</p>
      <p>Height: {{ character.height }} m - Weight: {{ character.weight }} Kg</p>
      <p>Description: {{ character.background }}</p>
      <h3>Stats:</h3>
      <ul>
        <li>Armor Class: {{ character.armor_class }}</li>
        <li>Strength: {{ character.for }}</li>
        <li>Dexterity: {{ character.des }}</li>
        <li>Constitution: {{ character.cos }}</li>
        <li>Intelligence: {{ character.int }}</li>
        <li>Wisdom: {{ character.sag }}</li>
        <li>Charisma: {{ character.car }}</li>
      </ul>
      <h3>Special Abilities:</h3>
      <ul v-if="character.skills.length > 0">
        <li v-for="skill in character.skills" :key="skill.id">{{ skill.name }} -> {{ skill.description }}</li>
      </ul>
      <h4 v-else>This charatecter does not have any ability</h4>
      <router-link  :to="{name: 'blog'}" class="btn btn-light mt-5">
        <i class="fa-solid fa-angle-left"></i>
      </router-link>
    </div>
    <div class="image">
      <img :src="character.picture" alt="" class="w-100 h-100 object-fit-cover rounded-3">
    </div>
  </div>
  
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.info ,
.image{
  width: 100%;
}
@media screen and (min-width:576px){
  .info , .image{
  width: 49%;
  }
}
ul{
  list-style: none;
}
</style>