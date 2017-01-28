<template>
	<div>
		<h2>Audio</h2>
		<p>The Web Audio API provides a powerful and versatile system for controlling audio on the Web, allowing developers to choose
			audio sources, add effects to audio, create audio visualizations, apply spatial effects (such as panning) and much more.</p>
		<button v-on:click="play">Play a Song!</button>
	</div>
</template>

<script>
  import Synth from '../audio/Synth'

  export default {
    created: function () {
        // `this` points to the vm instance
        this.synth = new Synth();
    },
     methods: {
      play (){
          this.synth.playSong();
      }
    }
  }
</script>