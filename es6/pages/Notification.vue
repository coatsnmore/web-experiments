<template>
	<main-layout>
		<h2>Web Notifications</h2>
		<button v-on:click="meow">Notify Me!</button>
	</main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import EventNotification from '../notification/EventNotification'

  export default {
    created: function () {
        // `this` points to the vm instance
        //console.log('a is: ' + this.a)
        this.eventNotification = new EventNotification();
    },
    components: {
      MainLayout
    },
     methods: {
      meow (){
          this.eventNotification.meow();
      }
    }
  }
</script>