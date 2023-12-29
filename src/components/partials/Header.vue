  <script>
 
    export default {
      name: 'Header',
      data() {
        return {
          
        }
      },
      computed: {},
      mounted() {},
      methods: {
        
      }
    }
  </script>
<template>
  <header>
    <nav>
      <ul>
        <li>
           <router-link :to="{name: 'home'}">home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">about</router-link>
        </li>
        <li>
          <router-link :to="{name: 'blog'}">characters list</router-link>
        </li>
        <li>
          <router-link :to="{name: 'contacts'}">contacts</router-link>
        </li>
      </ul>
    </nav>

    

  </header>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

 header{
  background-color:  rgba(60, 90, 92, 0.8);
  position: fixed;
  text-align: center;
  width: 100%;
  padding: 15px;
  ul{
    list-style: none;
    li{
      display: inline-block;
      margin: 0 15px;
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
    }
  }
 }
</style>