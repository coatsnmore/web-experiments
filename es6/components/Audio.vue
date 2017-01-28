<template>
	<div>
		<h2>Web Audio</h2>
		<p>The Web Audio API provides a powerful and versatile system for controlling audio on the Web, allowing developers to choose
			audio sources, add effects to audio, create audio visualizations, apply spatial effects (such as panning) and much more.</p>

		<div class="notes">
			<h4>Notes</h4>
			<button v-on:click="add('G3')">G</button>
			<button v-on:click="add('G#3/Ab3')">Ab</button>
			<button v-on:click="add('A#3/Bb3')">Bb</button>
			<button v-on:click="add('B3')">B</button>
			<button v-on:click="add('C4')">C</button>
			<button v-on:click="add('C#4/Db4')">Db</button>
			<button v-on:click="add('D4')">D</button>
			<button v-on:click="add('D#4/Eb4')">Eb</button>
			<button v-on:click="add('E4')">E</button>
			<button v-on:click="add('F4')">F</button>
			<button v-on:click="add('F#4/Gb4')">Gb</button>
		</div>

		<!--<input v-model="name" placeholder="First and Last Name" />-->
		<br>
		<div>
			<h4>Song</h4>
			{{song}}
		</div>

		<br>
		<br>

		<div>
			<h4>Oscillators</h4>
			<button v-on:click="changeOscillator('sine')">Sine</button>
			<button v-on:click="changeOscillator('square')">Square</button>
			<button v-on:click="changeOscillator('sawtooth')">Sawtooth</button>
			<button v-on:click="changeOscillator('triangle')">Triangle</button>
		</div>

		<br>
		<br>

		<div>
			<h4>Controls</h4>
			<button v-on:click="play">Play!</button>
			<button v-on:click="clear">Clear</button>
		</div>
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
          this.synth.playSong(this.song, this.oscillator);
      },
      add (note){
        this.song.push(note);
      },
      clear (){
        this.song = [];
      },
      changeOscillator (osc){
        this.oscillator = osc;
      }
    },
    data: function (){
      return {
        song: ['G3', 'A#3/Bb3', 'D#4/Eb4', 'G3', 'A#3/Bb3', 'G#3/Ab3', 'G3'],
        oscillator: 'sine'
      }
    }
  }
</script>