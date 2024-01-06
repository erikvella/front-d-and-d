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

    
    <div class="logo">
      <router-link :to="{name: 'home'}">
        <img src="/logoDandD.png" class="w-100 h-100 object-fit-cover ">
      </router-link> 
    </div>

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
  display: flex;
  align-items: center;
  height: 100px;
  .logo {
    width: 60px;
    float: left;
    vertical-align: middle;
    transition: .2s linear;
    &:hover {
      scale: 1.1;
    }
  }
  nav{
    vertical-align: middle;
    width: calc(100% - 60px);
    ul{
      list-style: none;
      margin: 0;
      li{
        display: inline-block;
        margin: 0 15px;
        transition: .2s linear;
      &:hover{
        scale: 1.1;
        }
      a{
        color: aliceblue;
        text-decoration: none;
        text-transform: uppercase;
        &.active, &:hover {
          color: yellow;
          }
      }
    }
  }
  }
}
</style>