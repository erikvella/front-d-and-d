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
  <div class="box debug">
      <h1>Lista delle razze:</h1>
      <ul>
        <li v-for="race in store.races" :key="race.id">
        <router-link :to="{name:'charactersRace' , params:{race_slug : race.slug}}">{{ race.name }}</router-link>
        </li> 
      </ul>
    </div>

    <div class="box debug">
      <h1>Lista delle skills:</h1>
      <ul>
        <li v-for="skill in store.skills" :key="skill.id">{{ skill.name }}</li>
      </ul>
    </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.box{
  margin-left: 30px;
  padding: 15px;
  ul{
    list-style: none;
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