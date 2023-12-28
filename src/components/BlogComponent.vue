<script>
import { store } from '../data/store';
export default{
  name: 'BlogComponent',
  data(){
    return{
      titolo: 'Characters list',
      store
 }
  },
  components:{},
  methods:{},
  mounted(){},
  computed:{}
}

</script>

<template>
  <h1>{{ titolo }}</h1>
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