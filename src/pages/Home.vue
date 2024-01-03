  <script>
  import { store } from '../data/store';
  import axios from 'axios';
    export default {
      name: 'Home',
      data() {
        return {
          store,
          lastCharacters: []
        }
      },
      computed: {},
      mounted() {
        this.getApi();
      },
      methods: {
        getApi(){
          axios.get(store.apiUrl + 'characters-list')
            .then(response => {
              this.lastCharacters = response.data.reverse().slice(0 , 5);
              console.log(this.lastCharacters);
       
            })
            
        }
      }
    }
  </script>
<template>
  
  <div class="card-custom">
    <div class="container card-custom__content">
      <h1>D&D characters</h1>
      <p class="lh-base">
        Welcome adventurers, guardians of realms, and wizards of magical lands ! <br />
        On this site, you can view the characters from your database. <br />
      </p>
      <p>
        Are you ready to immerse yourselves in an epic world where magic dances with the sword, and legends come to life? "Epic Realms: Unconquerable Legends" is the project that will lead you through timeless adventures in the heart of the Forgotten Realms. In this ambitious Dungeons & Dragons role-playing project, we invite you to explore unknown lands, face legendary monsters, and forge your destiny in a universe rich with mysteries. Whether you're a seasoned knight seeking fame, a cunning wizard in search of ancient secrets, or a stealthy rogue hungry for hidden treasures, "Epic Realms" offers a tailor-made gaming experience for every type of hero. 
      </p>
      <router-link  :to="{name: 'blog'}" class="btn btn-light">
        Go to blog section
      </router-link>
    </div>
    <div class="container card-custom__content">
      <h4>Last characters added</h4>
      <ul class="d-flex flex-column flex-xl-row gap-2">

        <li class="card me-1 p-2 w-100 d-flex justify-content-between" v-for="character in this.lastCharacters" :key="character.id">

          <span>{{ character.name }}</span>

          <div v-if="character.picture" class="image">
            <img class="img-fluid object-fit-cover w-100 h-100" :src="character.picture">
          </div>

          <router-link class="btn btn-dark" :to="{name: 'characterDetail', params:{slug:character.slug}}">
           More info
          </router-link>

        </li>

      </ul>
      
    </div>
  </div>


    

  
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .card {
    transition: .2 all ease;
    &:hover {
      scale: 1.1;
    }
    .image {
      width: 150px;
      height: 250px;
      padding: 10px 0;
      overflow: hidden;
    }
  }

  .debug {
    border: 1px solid red;
  }
</style>