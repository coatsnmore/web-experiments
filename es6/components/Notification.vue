<template>
	<div>
		<h2>Web Notifications</h2>
		<p>The Notifications API allows web pages to control the display of system notifications to the end user — these are outside
			the top-level browsing context viewport, so therefore can be displayed even the user has switched tabs or moved to a different
			app. The API is designed to be compatible with existing notification systems across different platforms.</p>
		<div>
			<input v-model="name" placeholder="First and Last Name" />
			<!--<p>Name: {{name}}</p>-->
		</div>
    <br>
		<div>
			<button v-on:click="meow">Notify Me!</button>
		</div>
	</div>
</template>

<script>
  import EventNotification from '../notification/EventNotification'

  export default {
    created: function () {
        // `this` points to the vm instance
        //console.log('a is: ' + this.a)
      
        this.eventNotification = new EventNotification();
    },
     methods: {
      meow (){
          this.eventNotification.meow(this.name);
      }
    },
    data: function (){
      return {
        name: ""
      }
    }
  }
</script>