   <script>

   import { store } from '../../data/store';
   export default {
      name: 'BlogAside',
      data() {
        return {
          store
        }
      },
      computed: {},
      mounted() {},
      methods: {}
    }
  </script>
<template>

<div class="row">
  <div class="box">
      <h2>Races list</h2>
      <ul>
        <li v-for="race in store.races" :key="race.id">
        <router-link :to="{name:'charactersRace' , params:{race_slug : race.slug}}">{{ race.name }}</router-link>
        </li> 
      </ul>
    </div>

    <div class="box">
      <h2>Skills list</h2>
      <ul>
        <li v-for="skill in store.skills" :key="skill.id">{{ skill.name }}</li>
      </ul>
    </div>
</div>
  
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.box{
  margin-left: 30px;
  padding: 15px;
}

</style>