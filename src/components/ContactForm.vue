<script>
import axios from 'axios';
import { store }  from '../data/store';
import Loader from '../components/partials/Loader.vue';

  export default {
    name: 'ContactForm',
    data() {
      return {
        name: '',
        email: '',
        subject: '',
        message: '',
        success: false,
        isLoading: false,
        errors: {
          name:[],
          email:[],
          subject: [],
          messages:[]
        }
      }
    },
    components:{
      Loader
    },
    methods: {
      sendForm(){
        console.log('sendform');
        this.isLoading = true;
        const data = {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message
        }

        axios.post(store.apiUrl + 'send-email', data)
          .then(response => {
            this.isLoading = false;
              console.log(response.data);
              this.success = response.data.success;
              if(!this.success){
              this.errors = response.data.errors
            } 
          })
          .catch(error => {
            console.log(error);
          })
      }
    },
    mounted() {},
    computed: {}
  }
</script>

<template>
<div class="container d-flex flex-column align-items-center">

  <h4 class="text-white mb-4 w-75 ">
    If you have any idea for a new character do not hesitate to mail us your idea and we will do our best to add it as soon as posible, your ideas are important to us.
  </h4>
    <form v-if="!success" @submit.prevent="sendForm()" class="bg-dark text-white">
      <div v-if="!isLoading" >
        <div class="mb-2">
          <label for="name">Name</label>
          <input v-model="name" type="text" name="name" id="name" placeholder="Your name"/>
          <p class="error" v-for="error in errors.name" >{{ error }}</p>
        </div>
        <div class="mb-2">
          <label for="email">Email</label>
          <input v-model="email"  type="text" name="email" id="email" placeholder="Your email" />
          <p class="error" v-for="error in errors.email" >{{ error }}</p>
        </div>
        <div class="mb-2">
          <label for="subject">Subject</label>
          <input v-model="subject" type="text" name="subject" id="subject" placeholder="What is the topic you want to talk about?" />
          <p v-for="error in errors.subject"> {{error}}</p>
        </div>  
        <div class="mb-2">
          <label for="message">Message</label>
          <textarea v-model="message"  name="message" id="message" placeholder="Your message"></textarea>
          <p class="error" v-for="error in errors.message" >{{ error }}</p>
        </div>
        <div>
          <button class="" type="submit">Send</button>
        </div>
      </div>
      <Loader v-else />
      
    </form>
    <div v-else>Email Sent</div>
</div>
</template>


<style lang="scss" scoped>
.container{
  color:black;
  text-align: center;  
}
form{
  color:black;
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  label{
    display: block;
    margin-bottom: 10px;
  }
  input, textarea{
    display: block;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button{
    color:white;
    display: block;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 20px;
    background-color:black ;
  }
}
</style>