<script>
import { store } from '../data/store';
export default{
  name: 'BlogComponent',
  data(){
    return{
      titolo: 'Lista dei personaggi giocabili',
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
      <p>Name: {{ character.name }}</p>
      <p>Race: {{ character.race.name }}</p>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
</style>