<script>
import ContactForm from '../components/ContactForm.vue'
  export default {
    name: 'Contacts',
    data() {
      return {}
    },
    components:{
      ContactForm
    },
    methods: {},
    mounted() {},
    computed: {}
  }
</script>

<template>
  <div  class="corner-radius card-custom">
    <div class="card-custom__content">
      <h2>Contact us!</h2>
      <ContactForm />
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>