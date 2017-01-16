<template>
	<main-layout>
		<h2>Audio</h2>
		<button v-on:click="play">Play a Song!</button>
	</main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import Synth from '../audio/Synth'

  export default {
    created: function () {
        // `this` points to the vm instance
        //console.log('a is: ' + this.a)
        this.synth = new Synth();
    },
    components: {
      MainLayout
    },
     methods: {
      play (){
          this.synth.playSong();
      }
    }
  }
</script>