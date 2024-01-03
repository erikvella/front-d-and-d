  <script>
    export default {
      name: 'Home',
      data() {
        return {}
      },
      computed: {},
      mounted() {},
      methods: {}
    }
  </script>
<template>
  
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

    

  
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>