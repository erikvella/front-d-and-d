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
    <div class="d-flex w-100 h-100 align-items-center justify-content-md-between justify-content-center mx-md-3 me-4">
      <div class="logo h-100 w-md-25">
        <router-link :to="{name: 'home'}" class="d-flex h-100">
          <img src="/logoDandD.png" class="h-100">
        </router-link> 
      </div>

      <nav>
        <ul class="gap-3 align-items-center">
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

      <div class="log w-md-25 gap-2 d-md-flex d-none">
        <a href="http://127.0.0.1:8000/login" class="button" type="button">
          <span class="button-text" contenteditable="">LogIn</span>
          <span class="button-background"></span>
          <span class="button-border"></span>
        </a>
        <a href="http://127.0.0.1:8000/register" class="button" type="button">
          <span class="button-text" contenteditable="">Register</span>
          <span class="button-background"></span>
          <span class="button-border"></span>
        </a>
      </div>
    </div>
    

  </header>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

header{
  background-color:  rgba(60, 90, 92, 0.8);
  position: fixed;
  text-align: center;
  width: 100%;
  padding: 15px 0px;
  display: flex;
  align-items: center;
  height: 100px;
  .logo {
    img{
      transition: .2s linear;
      &:hover {
        scale: 1.3;
    }
  }

  }
  nav{
    ul{
      display:flex;
      list-style: none;
      margin: 0;
      li{
        a{
          transition: .2s linear;
          color: aliceblue;
          text-decoration: none;
          text-transform: uppercase;
          &.active, &:hover {
            color: yellow;
            scale: 1.1;
          }
        }
      }
    }
  }

}
.debug{
  border: 3px solid red;
}
</style>