<script>
  import { store } from '../data/store';
  import axios from 'axios';

  export default {
    name: 'Home',
    data() {
      return {
        store,
        lastCharacters: [],
        currentIndex: 0,
      };
    },
    computed: {
      displayedCharacters() {
        return this.lastCharacters.slice(this.currentIndex, this.currentIndex + 3);
      },
    },
    created() {
      this.getApi();
    },
    methods: {
      getApi() {
        axios.get(store.apiUrl + 'characters-list')
          .then(response => {
            store.characters = response.data;
            console.log(store.characters);
            this.lastCharacters = response.data.reverse().slice(0, 8);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      },
      nextCharacters() {
        this.currentIndex += 3;
      },
      prevChar() {
        this.currentIndex -= 3;
      },
      selectRandomCharacter() {
        const randomIndex = Math.floor(Math.random() * store.characters.length);
        const randomCharacter = store.characters[randomIndex];
        this.$router.push({
          name: 'characterDetail',
          params: { slug: randomCharacter.slug },
        });
      },
    },
  };
</script>

<template>
  
  <div class="container card-custom">
    <h1>D&D characters</h1>
    <p class="lh-base">
      Welcome adventurers, guardians of realms, and wizards of magical lands ! <br />
      On this site, you can view the characters from your database. <br />
    </p>
    <p>
      Are you ready to immerse yourselves in an epic world where magic dances with the sword, and legends come to life? "Epic Realms: Unconquerable Legends" is the project that will lead you through timeless adventures in the heart of the Forgotten Realms. In this ambitious Dungeons & Dragons role-playing project, we invite you to explore unknown lands, face legendary monsters, and forge your destiny in a universe rich with mysteries. Whether you're a seasoned knight seeking fame, a cunning wizard in search of ancient secrets, or a stealthy rogue hungry for hidden treasures, "Epic Realms" offers a tailor-made gaming experience for every type of hero. 
    </p>
    <div class="gap-3 d-flex mb-3">
      <router-link :to="{name: 'blog'}" class="button" type="button">
        <span class="button-text" contenteditable="">Go to Characters List</span>
        <span class="button-background"></span>
        <span class="button-border"></span>
      </router-link>
      <div @click.prevent="selectRandomCharacter" class="button" type="button">
        <span class="button-text" contenteditable="">Play a Random Character</span>
        <span class="button-background"></span>
        <span class="button-border"></span>
    </div>
    </div>
    <div class="container d-flex flex-column justify-content-center align-items-center">
      <h4>Last characters added</h4>

      <ul class="d-flex flex-wrap justify-content-center align-items-center">

        <li class="card m-3 p-2 d-flex align-items-center" v-for="character in this.displayedCharacters" :key="character.id">

          <span>{{ character.name }}</span>

          <div v-if="character.picture" class="image">
            <img class="img-fluid object-fit-cover w-100 h-100" :src="character.picture">
          </div>

          <router-link class="btn btn-dark" :to="{name: 'characterDetail', params:{slug:character.slug}}">
            More info
          </router-link>

        </li>    
      </ul>
      <!-- buttons  -->
      <div class="buttons d-flex justify-content-between gap-2">
        <!-- go back -->
        <button  v-if="this.currentIndex > 0 " @click.prevent="prevChar">
          <i class="fa-solid fa-chevron-left fa-fade"></i>
        </button>
        <!-- go ahead -->
        <button  v-if="this.currentIndex < 6" @click.prevent="nextCharacters" >
          <i class="fa-solid fa-chevron-right fa-fade"></i>
        </button>     
      </div>
    </div>

  </div>


    

  
  <svg style="position: absolute;" width="0" height="0">
  <filter id="remove-black" color-interpolation-filters="sRGB">
    <feColorMatrix type="matrix" values="1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              -1 -1 -1 0 1" result="black-pixels"></feColorMatrix>
    <feComposite in="SourceGraphic" in2="black-pixels" operator="out"></feComposite>
  </filter>
</svg>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ul {
  list-style: none;
  .card {
    width: 270px;
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
}

  button {
        width: 50px;
        height: 50px;
        line-height: 40px;
        border-radius: 50%;
        background-color: rgba($color: #383535, $alpha: .4);
        color: white;
        &:hover{
          background-color: white;
          color:#383535;
        }
      }

  .debug {
    border: 1px solid red;
  }
</style>