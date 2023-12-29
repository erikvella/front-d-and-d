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



  <div class="card-custom">
    <div class="card-custom__content">
      <h2>Races list</h2>
      <ul>
        <li v-for="race in store.races" :key="race.id">
        <router-link :to="{name:'charactersRaceSkill' , params:{slug : race.slug , type:'race'}}">{{ race.name }}</router-link>
        </li> 
      </ul>
    </div>
     
    </div>

    <div class="card-custom">
      <div class="card-custom__content">
        <h2>Skills list</h2>
        <ul>
          <li v-for="skill in store.skills" :key="skill.id">
          <router-link :to="{name:'charactersRaceSkill' , params:{slug: skill.slug , type:'skill'}}">{{ skill.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    

  
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


</style>